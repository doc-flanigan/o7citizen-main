import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'

const apiKey = process.env.RESEND_API_KEY
const audienceId = process.env.RESEND_AUDIENCE_ID

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  if (!apiKey || !audienceId) {
    return NextResponse.json(
      { error: 'Newsletter is not configured.' },
      { status: 500 },
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const payload = (body ?? {}) as Record<string, unknown>
  const honeypot = payload.website
  if (typeof honeypot === 'string' && honeypot.length > 0) {
    return NextResponse.json({ ok: true })
  }

  const email = payload.email
  if (typeof email !== 'string' || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 400 },
    )
  }

  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    })

    if (error) {
      const message = error.message ?? ''
      if (/already exists|already a contact|already subscribed/i.test(message)) {
        return NextResponse.json({ ok: true })
      }
      console.error('Resend subscribe error', error)
      return NextResponse.json(
        { error: 'Could not subscribe right now. Try again in a moment.' },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('Resend subscribe exception', e)
    return NextResponse.json(
      { error: 'Could not subscribe right now. Try again in a moment.' },
      { status: 502 },
    )
  }
}
