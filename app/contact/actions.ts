"use server"

import { headers } from "next/headers"

import { site } from "@/lib/content"
import { sendBriefNotification } from "@/lib/mail"
import { checkRateLimit } from "@/lib/rate-limit"

import {
  CONTACT_FIELDS,
  type ContactField,
  type ContactState,
} from "./contact-state"

/**
 * Note: this module exports exactly one thing, and it is an async function.
 * Constants and types live in ./contact-state — see the note there.
 */

const REQUIRED: ContactField[] = ["name", "email", "service", "brief"]

/**
 * Reasonable-effort email shape check. Deliberately permissive — the only
 * authoritative validation of an address is sending mail to it, and overly
 * clever regexes reject real addresses.
 */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export async function submitBrief(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const values = Object.fromEntries(
    CONTACT_FIELDS.map((field) => [field, String(formData.get(field) ?? "").trim()])
  ) as Record<ContactField, string>

  // Honeypot: a hidden field that only an automated submitter fills in. Return
  // the success shape rather than an error so bots learn nothing from the reply.
  if (String(formData.get("company_website") ?? "")) {
    return { status: "success" }
  }

  const errors: Partial<Record<ContactField, string>> = {}

  for (const field of REQUIRED) {
    if (!values[field]) errors[field] = "This field is required."
  }

  if (values.email && !EMAIL.test(values.email)) {
    errors.email = "Enter a valid email address."
  }

  if (values.brief && values.brief.length < 20) {
    errors.brief = "Tell us a little more — at least a couple of sentences."
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      errors,
      values,
    }
  }

  // Rate limit only once the submission is otherwise valid, so someone
  // correcting a typo three times doesn't get locked out.
  const headerList = await headers()
  const forwardedFor = headerList.get("x-forwarded-for")
  const ip = forwardedFor?.split(",")[0]?.trim() || headerList.get("x-real-ip") || "unknown"
  const { allowed, retryAfter } = checkRateLimit(ip)

  if (!allowed) {
    return {
      status: "error",
      message: `That's a few briefs in quick succession. Try again in ${retryAfter} seconds, or email us directly.`,
      values,
    }
  }

  const sent = await sendBriefNotification(values)

  if (!sent.ok) {
    // Never report success for a message that was not delivered — the whole
    // point of this form is that an enquiry reaches someone.
    return {
      status: "error",
      message: `Something went wrong sending your brief. Please email us directly at ${site.contact.email} and we'll pick it up straight away.`,
      values,
    }
  }

  return {
    status: "success",
    message: "Thanks — we'll come back to you within two working days.",
  }
}
