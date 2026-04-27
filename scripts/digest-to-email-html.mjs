#!/usr/bin/env node
// Convert a sc-news digest markdown file into email-ready HTML.
// Usage: node scripts/digest-to-email-html.mjs digests/2026-04-27.md > out.html
//
// Output is a self-contained HTML document with inline styles, suitable for
// the Resend Broadcasts API. No external CSS, no <script>, no fancy layout —
// email clients reject most of that anyway.

import { readFileSync } from 'node:fs'
import MarkdownIt from 'markdown-it'

const inputPath = process.argv[2]
if (!inputPath) {
  console.error('usage: digest-to-email-html.mjs <digest.md>')
  process.exit(1)
}

const md = new MarkdownIt({ html: false, linkify: true, typographer: true })
const source = readFileSync(inputPath, 'utf8')
const body = md.render(source)

const styled = body
  .replaceAll(
    '<h1>',
    '<h1 style="font-family:Georgia,serif;font-size:26px;line-height:1.25;margin:0 0 16px;color:#0a0e1a">',
  )
  .replaceAll(
    '<h2>',
    '<h2 style="font-family:Georgia,serif;font-size:20px;line-height:1.3;margin:32px 0 12px;color:#c49a20;text-transform:uppercase;letter-spacing:0.04em">',
  )
  .replaceAll(
    '<p>',
    '<p style="font-family:Georgia,serif;font-size:16px;line-height:1.65;margin:0 0 14px;color:#1a1f2e">',
  )
  .replaceAll(
    '<a ',
    '<a style="color:#c49a20;text-decoration:underline" ',
  )
  .replaceAll(
    '<ul>',
    '<ul style="font-family:Georgia,serif;font-size:16px;line-height:1.65;margin:0 0 14px 20px;color:#1a1f2e">',
  )
  .replaceAll(
    '<ol>',
    '<ol style="font-family:Georgia,serif;font-size:16px;line-height:1.65;margin:0 0 14px 20px;color:#1a1f2e">',
  )

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body style="margin:0;padding:24px;background:#f5f5f0;font-family:Georgia,serif;color:#0a0e1a">
  <div style="max-width:640px;margin:0 auto;background:#ffffff;padding:32px;border-radius:8px">
    ${styled}
    <hr style="margin:32px 0 16px;border:none;border-top:1px solid #e5e5dd" />
    <p style="font-family:Georgia,serif;font-size:13px;line-height:1.5;color:#6b6b6b;margin:0">
      You&rsquo;re getting this because you signed up for the weekly update at
      <a href="https://o7citizen.com" style="color:#c49a20;text-decoration:underline">o7citizen.com</a>.
      An unofficial fan site. Not affiliated with Cloud Imperium Games.
      Use the unsubscribe button in your email client&rsquo;s header to stop receiving these.
    </p>
  </div>
</body>
</html>`

process.stdout.write(html)
