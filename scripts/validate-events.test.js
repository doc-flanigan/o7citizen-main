const test = require('node:test');
const assert = require('node:assert/strict');
const { validate } = require('./validate-events');

const baseFreeFly = {
  id: 'free-fly-2026-may-aurora',
  type: 'free-fly',
  status: 'upcoming',
  name: 'May 2026 Aurora Free Fly',
  start: '2026-05-01T17:00:00Z',
  end: '2026-05-08T17:00:00Z',
  ships_summary: 'Aurora MR starter ship',
  description_plain: 'Anyone can play Star Citizen for free from May 1 through May 8, 2026.',
  source_url: 'https://robertsspaceindustries.com/comm-link/test',
  last_seen_at: '2026-04-25T03:00:00Z',
};

const baseFile = {
  schema_version: 1,
  last_updated: '2026-04-27T14:30:00Z',
  events: [baseFreeFly],
};

test('valid file passes', () => {
  assert.deepEqual(validate(baseFile), []);
});

test('rejects wrong schema_version', () => {
  const errs = validate({ ...baseFile, schema_version: 2 });
  assert.ok(errs.some(e => e.includes('schema_version')));
});

test('rejects unknown event type', () => {
  const bad = { ...baseFreeFly, type: 'lore-event' };
  const errs = validate({ ...baseFile, events: [bad] });
  assert.ok(errs.some(e => e.includes('type')));
});

test('rejects start >= end', () => {
  const bad = { ...baseFreeFly, start: '2026-05-10T00:00:00Z', end: '2026-05-08T00:00:00Z' };
  const errs = validate({ ...baseFile, events: [bad] });
  assert.ok(errs.some(e => e.includes('start must be before end')));
});

test('rejects id missing type prefix', () => {
  const bad = { ...baseFreeFly, id: 'random-id' };
  const errs = validate({ ...baseFile, events: [bad] });
  assert.ok(errs.some(e => e.includes('must start with "free-fly-"')));
});

test('referral-bonus requires bonus_summary', () => {
  const bad = {
    ...baseFreeFly,
    id: 'referral-bonus-2026-test',
    type: 'referral-bonus',
  };
  delete bad.ships_summary;
  const errs = validate({ ...baseFile, events: [bad] });
  assert.ok(errs.some(e => e.includes('bonus_summary')));
});

test('free-fly requires ships_summary', () => {
  const bad = { ...baseFreeFly };
  delete bad.ships_summary;
  const errs = validate({ ...baseFile, events: [bad] });
  assert.ok(errs.some(e => e.includes('ships_summary')));
});

test('rejects malformed ISO timestamp in start', () => {
  const bad = { ...baseFreeFly, start: '2026/05/01' };
  const errs = validate({ ...baseFile, events: [bad] });
  assert.ok(errs.some(e => e.includes('start')));
});

test('rejects malformed source_url', () => {
  const bad = { ...baseFreeFly, source_url: 'not-a-url' };
  const errs = validate({ ...baseFile, events: [bad] });
  assert.ok(errs.some(e => e.includes('source_url')));
});

test('rejects missing description_plain', () => {
  const bad = { ...baseFreeFly };
  delete bad.description_plain;
  const errs = validate({ ...baseFile, events: [bad] });
  assert.ok(errs.some(e => e.includes('description_plain')));
});

test('rejects invalid month value', () => {
  const bad = { ...baseFreeFly, start: '2026-13-01T00:00:00Z' };
  const errs = validate({ ...baseFile, events: [bad] });
  assert.ok(errs.some(e => e.includes('start')));
});

test('rejects start equal to end', () => {
  const same = '2026-05-01T00:00:00Z';
  const bad = { ...baseFreeFly, start: same, end: same };
  const errs = validate({ ...baseFile, events: [bad] });
  assert.ok(errs.some(e => e.includes('start must be before end')));
});

test('rejects non-object input', () => {
  const errs1 = validate(null);
  assert.ok(errs1.some(e => e.includes('root')));

  const errs2 = validate('string');
  assert.ok(errs2.some(e => e.includes('root')));
});
