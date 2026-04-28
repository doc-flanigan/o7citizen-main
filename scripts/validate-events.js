const fs = require('fs');
const path = require('path');

const VALID_TYPES = new Set(['free-fly', 'referral-bonus']);
const VALID_STATUSES = new Set(['upcoming', 'active', 'past']);
const ISO_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/;

function validateEvent(event, index) {
  const errors = [];
  const where = `events[${index}]`;

  if (typeof event.id !== 'string' || event.id.length === 0) {
    errors.push(`${where}.id: must be a non-empty string`);
  }
  if (!VALID_TYPES.has(event.type)) {
    errors.push(`${where}.type: must be one of ${[...VALID_TYPES].join(', ')}`);
  }
  if (event.id && event.type && !event.id.startsWith(event.type + '-')) {
    errors.push(`${where}.id: must start with "${event.type}-"`);
  }
  if (!VALID_STATUSES.has(event.status)) {
    errors.push(`${where}.status: must be one of ${[...VALID_STATUSES].join(', ')}`);
  }
  if (typeof event.name !== 'string' || event.name.length === 0) {
    errors.push(`${where}.name: must be a non-empty string`);
  }
  if (!ISO_RE.test(event.start || '')) {
    errors.push(`${where}.start: must be ISO 8601 UTC (e.g. 2026-05-01T00:00:00Z)`);
  }
  if (!ISO_RE.test(event.end || '')) {
    errors.push(`${where}.end: must be ISO 8601 UTC`);
  }
  if (event.start && event.end && event.start >= event.end) {
    errors.push(`${where}: start must be before end`);
  }
  if (typeof event.description_plain !== 'string' || event.description_plain.length === 0) {
    errors.push(`${where}.description_plain: must be a non-empty string`);
  }
  if (typeof event.source_url !== 'string' || !/^https?:\/\//.test(event.source_url)) {
    errors.push(`${where}.source_url: must be an http(s) URL`);
  }
  if (!ISO_RE.test(event.last_seen_at || '')) {
    errors.push(`${where}.last_seen_at: must be ISO 8601 UTC`);
  }
  if (event.type === 'free-fly') {
    if (typeof event.ships_summary !== 'string' || event.ships_summary.length === 0) {
      errors.push(`${where}.ships_summary: required for free-fly events`);
    }
  } else if (event.type === 'referral-bonus') {
    if (typeof event.bonus_summary !== 'string' || event.bonus_summary.length === 0) {
      errors.push(`${where}.bonus_summary: required for referral-bonus events`);
    }
  }
  return errors;
}

function validate(data) {
  const errors = [];
  if (data.schema_version !== 1) {
    errors.push(`schema_version: must be 1`);
  }
  if (!ISO_RE.test(data.last_updated || '')) {
    errors.push(`last_updated: must be ISO 8601 UTC`);
  }
  if (!Array.isArray(data.events)) {
    errors.push(`events: must be an array`);
    return errors;
  }
  for (let i = 0; i < data.events.length; i++) {
    errors.push(...validateEvent(data.events[i], i));
  }
  return errors;
}

function main() {
  const filePath = process.argv[2] || 'src/data/events.json';
  const abs = path.resolve(filePath);
  if (!fs.existsSync(abs)) {
    console.error(`File not found: ${abs}`);
    process.exit(2);
  }
  let data;
  try {
    data = JSON.parse(fs.readFileSync(abs, 'utf8'));
  } catch (e) {
    console.error(`Invalid JSON in ${abs}: ${e.message}`);
    process.exit(2);
  }
  const errors = validate(data);
  if (errors.length > 0) {
    console.error('Validation failed:');
    for (const err of errors) console.error('  - ' + err);
    process.exit(1);
  }
  console.log(`OK: ${data.events.length} event(s) valid`);
  process.exit(0);
}

if (require.main === module) {
  main();
}

module.exports = { validate, validateEvent };
