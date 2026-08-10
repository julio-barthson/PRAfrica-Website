import "server-only"

/**
 * Mailjet Send API v3.1, called directly over HTTPS.
 *
 * Deliberately no SDK: the send endpoint is a single authenticated POST, and
 * `node-mailjet` would pull in a dependency tree for something this small.
 *
 * Credentials come from .env (gitignored) and are never returned to the client
 * or written to logs.
 */

const MAILJET_ENDPOINT = "https://api.mailjet.com/v3.1/send"

type MailjetResult =
  | { ok: true }
  | { ok: false; reason: "unconfigured" | "rejected" | "network" }

function readConfig() {
  const publicKey = process.env.MAILJET_API_PUBLIC_KEY
  const privateKey = process.env.MAILJET_API_PRIVATE_KEY
  const sender = process.env.SENDER_EMAIL_ADDRESS
  const admin = process.env.ADMIN_EMAIL_ADDRESS

  if (!publicKey || !privateKey || !sender || !admin) return null
  return { publicKey, privateKey, sender, admin }
}

/** Escape user input before it goes anywhere near an HTML email body. */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export type BriefPayload = {
  name: string
  email: string
  company: string
  service: string
  budget: string
  timeline: string
  markets: string
  brief: string
}

const LABELS: [keyof BriefPayload, string][] = [
  ["name", "Name"],
  ["email", "Email"],
  ["company", "Company"],
  ["service", "Service"],
  ["budget", "Budget"],
  ["timeline", "Timeline"],
  ["markets", "Markets"],
  ["brief", "Brief"],
]

function toTextPart(values: BriefPayload) {
  return LABELS.map(([key, label]) => `${label}: ${values[key] || "—"}`).join("\n")
}

function toHtmlPart(values: BriefPayload) {
  const rows = LABELS.map(
    ([key, label]) =>
      `<tr>
         <td style="padding:8px 16px 8px 0;vertical-align:top;color:#715F55;font-size:13px;white-space:nowrap;">${label}</td>
         <td style="padding:8px 0;vertical-align:top;color:#271B15;font-size:14px;">${
           escapeHtml(values[key] || "—").replace(/\n/g, "<br>")
         }</td>
       </tr>`
  ).join("")

  return `<div style="font-family:system-ui,-apple-system,sans-serif;background:#FAF5ED;padding:32px;">
    <div style="max-width:640px;margin:0 auto;background:#fff;border:1px solid #E0D7CC;padding:32px;">
      <p style="margin:0 0 4px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#B44B29;font-weight:700;">New brief — prafrica.com</p>
      <h1 style="margin:0 0 24px;font-size:22px;color:#271B15;">${escapeHtml(
        values.company || values.name
      )}</h1>
      <table style="border-collapse:collapse;width:100%;">${rows}</table>
    </div>
  </div>`
}

export async function sendBriefNotification(
  values: BriefPayload
): Promise<MailjetResult> {
  const config = readConfig()

  if (!config) {
    // Missing credentials must never look like a successful send.
    console.error(
      "[mail] Mailjet is not configured — check MAILJET_API_PUBLIC_KEY, MAILJET_API_PRIVATE_KEY, SENDER_EMAIL_ADDRESS and ADMIN_EMAIL_ADDRESS."
    )
    return { ok: false, reason: "unconfigured" }
  }

  const auth = Buffer.from(`${config.publicKey}:${config.privateKey}`).toString("base64")

  const body = {
    Messages: [
      {
        From: { Email: config.sender, Name: "PRAfrica Website" },
        To: [{ Email: config.admin, Name: "PRAfrica" }],
        // Replying to the notification reaches the enquirer directly.
        ReplyTo: { Email: values.email, Name: values.name },
        Subject: `New brief — ${values.company || values.name}`,
        TextPart: toTextPart(values),
        HTMLPart: toHtmlPart(values),
      },
    ],
  }

  try {
    const response = await fetch(MAILJET_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      // Don't leave a form submission hanging on a slow upstream.
      signal: AbortSignal.timeout(10_000),
    })

    if (!response.ok) {
      // Log status only — the response body can echo back address details.
      console.error(`[mail] Mailjet rejected the send: HTTP ${response.status}`)
      return { ok: false, reason: "rejected" }
    }

    const result = (await response.json()) as {
      Messages?: { Status?: string }[]
    }

    // Mailjet returns 200 even when an individual message fails, so the
    // per-message status is the thing that actually confirms delivery.
    const status = result.Messages?.[0]?.Status
    if (status !== "success") {
      console.error(`[mail] Mailjet message status: ${status ?? "unknown"}`)
      return { ok: false, reason: "rejected" }
    }

    return { ok: true }
  } catch (error) {
    console.error(
      "[mail] Mailjet request failed:",
      error instanceof Error ? error.message : "unknown error"
    )
    return { ok: false, reason: "network" }
  }
}
