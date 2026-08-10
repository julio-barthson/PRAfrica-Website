"use client"

import * as React from "react"
import { useActionState } from "react"
import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { submitBrief } from "./actions"
import { initialContactState } from "./contact-state"

const SERVICES = [
  "Brand & campaign strategy",
  "Media planning & buying",
  "Public relations",
  "Event production",
  "Talent & culture partnerships",
  "Content production",
  "Not sure yet",
]

const BUDGETS = [
  "Under $25,000",
  "$25,000 – $100,000",
  "$100,000 – $500,000",
  "$500,000+",
  "Prefer not to say",
]

const TIMELINES = ["Within a month", "1–3 months", "3–6 months", "Just exploring"]

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitBrief, initialContactState)

  /**
   * Fields are controlled rather than relying on `defaultValue`.
   *
   * `defaultValue` is applied only when an element mounts. After the action
   * re-renders the form, a <select> snaps back to its placeholder — the user's
   * choice is silently thrown away right at the moment they're being told to fix
   * something. Text inputs appear to survive only because the DOM keeps its own
   * value, which is incidental rather than guaranteed.
   *
   * Adopting the server's echoed values during render (rather than in an effect)
   * keeps the no-JS path working too: there the form re-renders fresh from the
   * server and these become the initial values.
   */
  const [fields, setFields] = React.useState<Record<string, string>>({})
  const [seenValues, setSeenValues] = React.useState(state.values)

  /**
   * Bumped each time the action responds, and used as a `key` on the selects.
   *
   * React 19 resets the form element once a form action settles. That snaps a
   * <select> back to its placeholder in the DOM while React's internal value
   * tracker still holds the previous selection — so React sees "no change" and
   * never re-syncs, leaving the control visually empty while `value` says
   * otherwise. Remounting the selects makes them apply `value` fresh.
   * Text inputs and textareas re-sync correctly and are left alone, so typing
   * is never interrupted.
   */
  const [selectKey, setSelectKey] = React.useState(0)

  if (state.values !== seenValues) {
    setSeenValues(state.values)
    if (state.values) {
      setFields((current) => ({ ...current, ...state.values }))
      setSelectKey((k) => k + 1)
    }
  }

  const bind = (name: string) => ({
    value: fields[name] ?? "",
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => setFields((current) => ({ ...current, [name]: e.target.value })),
  })

  if (state.status === "success") {
    return (
      <div
        className="border-border flex flex-col items-start gap-4 border p-8"
        /* Move focus here so the outcome is announced, not just rendered. */
        role="status"
        aria-live="polite"
        tabIndex={-1}
      >
        <span className="bg-primary text-primary-foreground flex size-10 items-center justify-center rounded-full">
          <Check className="size-5" aria-hidden="true" />
        </span>
        <h2 className="font-display text-2xl font-semibold">Brief received.</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {state.message}
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="flex flex-col gap-7" noValidate>
      {state.status === "error" && state.message ? (
        <p
          role="alert"
          className="border-destructive/40 bg-destructive/10 text-destructive border px-4 py-3 text-sm"
        >
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-7 sm:grid-cols-2">
        <Field
          name="name"
          label="Your name"
          required
          error={state.errors?.name}
          {...bind("name")}
        />
        <Field
          name="email"
          label="Email"
          type="email"
          required
          error={state.errors?.email}
          {...bind("email")}
        />
      </div>

      <Field
        name="company"
        label="Company"
        error={state.errors?.company}
        {...bind("company")}
      />

      <SelectField
        key={`service-${selectKey}`}
        name="service"
        label="What do you need?"
        options={SERVICES}
        required
        error={state.errors?.service}
        {...bind("service")}
      />

      <div className="grid gap-7 sm:grid-cols-2">
        <SelectField
          key={`budget-${selectKey}`}
          name="budget"
          label="Budget range"
          options={BUDGETS}
          error={state.errors?.budget}
          {...bind("budget")}
        />
        <SelectField
          key={`timeline-${selectKey}`}
          name="timeline"
          label="Timeline"
          options={TIMELINES}
          error={state.errors?.timeline}
          {...bind("timeline")}
        />
      </div>

      <Field
        name="markets"
        label="Markets"
        hint="Which countries or regions is this for?"
        error={state.errors?.markets}
        {...bind("markets")}
      />

      <Field
        name="brief"
        label="The brief"
        as="textarea"
        required
        hint="What are you launching, and what does success look like?"
        error={state.errors?.brief}
        {...bind("brief")}
      />

      {/* Honeypot — hidden from users, irresistible to bots. Not `display:none`,
          which some bots detect and skip. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company_website">Do not fill this in</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button type="submit" size="2xl" disabled={pending}>
            {pending ? "Sending…" : "Send brief"}
          </Button>
          <p className="text-muted-foreground text-xs">
            We reply to every brief within two working days.
          </p>
        </div>

        {/* Notice, not a consent tick-box: the privacy notice relies on
            legitimate interest for responding to enquiries, so asking for
            consent here would contradict the stated lawful basis. */}
        <p className="text-muted-foreground max-w-md text-xs leading-relaxed">
          We use your details only to reply to this enquiry. See our{" "}
          <Link
            href="/privacy"
            className="text-accent-strong link-rule focus-visible:ring-ring rounded-sm focus-visible:ring-2 focus-visible:outline-none"
          >
            privacy notice
          </Link>
          .
        </p>
      </div>
    </form>
  )
}

function Field({
  name,
  label,
  hint,
  error,
  required,
  type = "text",
  as = "input",
  value,
  onChange,
}: {
  name: string
  label: string
  hint?: string
  error?: string
  required?: boolean
  type?: string
  as?: "input" | "textarea"
  value: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void
}) {
  const hintId = hint ? `${name}-hint` : undefined
  const errorId = error ? `${name}-error` : undefined
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined

  const shared = {
    id: name,
    name,
    required,
    value,
    onChange,
    "aria-invalid": error ? (true as const) : undefined,
    "aria-describedby": describedBy,
    className: cn(
      "border-input bg-background text-foreground placeholder:text-muted-foreground/60 focus-visible:border-ring focus-visible:ring-ring/30 w-full rounded-sm border px-3.5 py-3 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none",
      error && "border-destructive focus-visible:border-destructive"
    ),
  }

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-foreground text-sm font-medium">
        {label}
        {required ? (
          <span className="text-accent-strong ml-1" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="text-muted-foreground ml-2 text-xs font-normal">Optional</span>
        )}
      </label>
      {hint ? (
        <p id={hintId} className="text-muted-foreground text-xs">
          {hint}
        </p>
      ) : null}
      {as === "textarea" ? (
        <textarea {...shared} rows={6} />
      ) : (
        <input {...shared} type={type} />
      )}
      {error ? (
        <p id={errorId} className="text-destructive text-xs">
          {error}
        </p>
      ) : null}
    </div>
  )
}

function SelectField({
  name,
  label,
  options,
  error,
  required,
  value,
  onChange,
}: {
  name: string
  label: string
  options: string[]
  error?: string
  required?: boolean
  value: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void
}) {
  const errorId = error ? `${name}-error` : undefined
  const ref = React.useRef<HTMLSelectElement>(null)

  /**
   * Force the DOM back onto the controlled value after every commit.
   *
   * React 19 resets the form once a form action settles. The reset lands after
   * render, so React's value tracker still matches and it never re-syncs —
   * leaving the select showing the first enabled option while `value` says
   * something else. This is a plain DOM sync with no setState, which is exactly
   * what an effect is for.
   */
  React.useLayoutEffect(() => {
    const node = ref.current
    if (node && node.value !== value) node.value = value
  })

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-foreground text-sm font-medium">
        {label}
        {required ? (
          <span className="text-accent-strong ml-1" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="text-muted-foreground ml-2 text-xs font-normal">Optional</span>
        )}
      </label>
      <select
        ref={ref}
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        className={cn(
          "border-input bg-background text-foreground focus-visible:border-ring focus-visible:ring-ring/30 w-full cursor-pointer rounded-sm border px-3.5 py-3 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none",
          error && "border-destructive"
        )}
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <p id={errorId} className="text-destructive text-xs">
          {error}
        </p>
      ) : null}
    </div>
  )
}
