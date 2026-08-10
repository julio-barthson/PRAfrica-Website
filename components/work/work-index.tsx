"use client"

import * as React from "react"

import { Reveal } from "@/components/site/reveal"
import { WorkCard } from "@/components/site/work-card"
import type { CaseStudy, Division } from "@/lib/content"
import { cn } from "@/lib/utils"

type DivisionFilter = Division | "all"

/**
 * Filtering is client-side state rather than a `searchParams` read, which keeps
 * /work statically prerendered. With a catalogue this size the whole dataset is
 * already in the payload — a round trip per filter click would be slower and
 * would cost the user data for no benefit.
 */
export function WorkIndex({
  studies,
  sectors,
}: {
  studies: CaseStudy[]
  sectors: string[]
}) {
  const [division, setDivision] = React.useState<DivisionFilter>("all")
  const [sector, setSector] = React.useState<string>("all")

  const filtered = studies.filter(
    (s) =>
      (division === "all" || s.division === division) &&
      (sector === "all" || s.sector === sector)
  )

  const divisions: { id: DivisionFilter; label: string }[] = [
    { id: "all", label: "All work" },
    { id: "advertising", label: "Advertising" },
    { id: "entertainment", label: "Entertainment" },
  ]

  return (
    <>
      <div className="flex flex-col gap-6">
        <FilterRow
          legend="Filter by division"
          options={divisions.map((d) => ({ id: d.id, label: d.label }))}
          value={division}
          onChange={(v) => setDivision(v as DivisionFilter)}
        />
        <FilterRow
          legend="Filter by sector"
          options={[
            { id: "all", label: "All sectors" },
            ...sectors.map((s) => ({ id: s, label: s })),
          ]}
          value={sector}
          onChange={setSector}
        />
      </div>

      {/* Announce result count changes for screen reader users, who otherwise
          get no feedback that pressing a filter did anything. */}
      <p aria-live="polite" className="text-muted-foreground mt-8 text-sm">
        {filtered.length} {filtered.length === 1 ? "project" : "projects"}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-14 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
          {filtered.map((study, i) => (
            <Reveal key={study.slug} delay={(i % 2) * 100}>
              <WorkCard study={study} />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="border-border mt-10 border border-dashed px-6 py-16 text-center">
          <p className="font-display text-2xl font-semibold">Nothing matches that yet.</p>
          <p className="text-muted-foreground mt-2 text-sm">
            Try a different sector, or clear the filters to see everything.
          </p>
          <button
            type="button"
            onClick={() => {
              setDivision("all")
              setSector("all")
            }}
            className="text-accent-strong link-rule focus-visible:ring-ring mt-6 cursor-pointer text-sm font-medium focus-visible:ring-2 focus-visible:outline-none"
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  )
}

function FilterRow({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string
  options: { id: string; label: string }[]
  value: string
  onChange: (value: string) => void
}) {
  return (
    <fieldset className="flex flex-wrap items-center gap-2">
      <legend className="sr-only">{legend}</legend>
      {options.map((option) => {
        const active = value === option.id
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            /* aria-pressed carries the selected state; colour alone would not. */
            aria-pressed={active}
            className={cn(
              "focus-visible:ring-ring cursor-pointer rounded-sm border px-3.5 py-2 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none",
              active
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-input hover:text-foreground"
            )}
          >
            {option.label}
          </button>
        )
      })}
    </fieldset>
  )
}
