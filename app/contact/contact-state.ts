/**
 * Shared shape for the contact form's action state.
 *
 * This deliberately lives OUTSIDE actions.ts: a "use server" module may only
 * export async functions, so exporting the `initialContactState` object from
 * there throws at runtime ("A 'use server' file can only export async
 * functions"). The production build does not catch it, because /contact is
 * statically prerendered and the action module is never evaluated until a real
 * submission arrives.
 */

export type ContactField =
  | "name"
  | "email"
  | "company"
  | "service"
  | "budget"
  | "timeline"
  | "markets"
  | "brief"

export type ContactState = {
  status: "idle" | "success" | "error"
  message?: string
  errors?: Partial<Record<ContactField, string>>
  /** Echoed back so a failed submit doesn't wipe what the user typed. */
  values?: Partial<Record<ContactField, string>>
}

export const initialContactState: ContactState = { status: "idle" }

export const CONTACT_FIELDS: ContactField[] = [
  "name",
  "email",
  "company",
  "service",
  "budget",
  "timeline",
  "markets",
  "brief",
]
