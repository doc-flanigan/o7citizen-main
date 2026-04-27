#!/usr/bin/env node
// Local reproduction of the sc-news-broadcast workflow's API call.
// No jq required, no GitHub Actions round-trip — just node + fetch.
//
// Usage:
//   RESEND_KEY="re_..." node scripts/test-broadcast.mjs
//   RESEND_KEY="re_..." node scripts/test-broadcast.mjs --minimal-html
//   RESEND_KEY="re_..." node scripts/test-broadcast.mjs --ascii-subject
//   RESEND_KEY="re_..." node scripts/test-broadcast.mjs --minimal-html --ascii-subject
//
// Flags let us bisect what's causing the workflow's 500 application_error.

import { readFileSync } from 'node:fs'
import { execSync } from 'node:child_process'

const args = new Set(process.argv.slice(2))
const useMinimalHtml = args.has('--minimal-html')
const useAsciiSubject = args.has('--ascii-subject')

const apiKey = process.env.RESEND_KEY
if (!apiKey) {
  console.error('Set RESEND_KEY env var first.')
  process.exit(1)
}

const digestPath = 'digests/2026-04-27.md'

let html
if (useMinimalHtml) {
  html = '<p>hello</p>'
} else {
  html = execSync(`node scripts/digest-to-email-html.mjs ${digestPath}`).toString()
}

const md = readFileSync(digestPath, 'utf8')
let subject = md.split('\n')[0].replace(/^#\s*/, '').trim()
if (useAsciiSubject) {
  // Same transliteration as the workflow's iconv //TRANSLIT
  subject = subject
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, '--')
    .replace(/…/g, '...')
}

const payload = {
  audience_id: '36035a4d-f0fb-4700-b7a4-ac7d57a12580',
  from: 'weekly@o7citizen.com',
  subject,
  html,
}

console.log('--- Payload summary ---')
console.log('audience_id:', payload.audience_id)
console.log('from:       ', payload.from)
console.log('subject:    ', payload.subject)
console.log('html bytes: ', payload.html.length)
console.log('html starts:', payload.html.slice(0, 60).replace(/\n/g, ' '))
console.log()

const res = await fetch('https://api.resend.com/broadcasts', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload),
})

console.log('--- Resend response ---')
console.log('HTTP', res.status)
console.log(await res.text())
