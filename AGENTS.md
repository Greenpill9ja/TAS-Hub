# TAS Hub — Codex Guide

Primary runtime contract for Codex in this repository. This repo is intentionally
lean: a single Next.js App Router site with a local-first validation loop and a
small planning surface.

## Repo Map

- `src/app` — App Router entrypoints and global layout
- `src/components/sections` — Homepage sections and most site-facing content
- `src/components` — Shared UI behavior such as scroll and cursor effects
- `public` — Static assets referenced by the site
- `.codex` — Codex config, environment actions, and role definitions
- `.plans` — Lightweight feature specs, context notes, and audits

## Global Invariants

- Use `bun` for all repo operations. Do not introduce npm, pnpm, or Yarn.
- Use Node `22.22.1`, pinned in `mise.toml` and `.nvmrc`.
- Preserve the single-site Next.js shape. Do not introduce monorepo machinery.
- Default to the smallest sensible change boundary.
- Keep public narrative and marketing copy stable unless the user explicitly asks
  for copy or content edits.
- When smoke tests need stable selectors, prefer section ids and `data-testid`
  hooks over text-dependent selectors.
- Do not add `CLAUDE.md`, `.claude/`, CI workflows, scheduled automations, or
  queue/lane systems unless the task explicitly asks for phase 2 expansion.

## Codex Workflow

1. Read `AGENTS.md` before making changes.
2. Check for an active feature spec in `.plans/features/<feature-slug>/`.
3. Keep changes inside the smallest surface that satisfies the task.
4. Run the lightest validation tier that still proves the change.
5. Escalate to browser smoke verification when navigation, rendering, or CTA
   behavior changes.

## Planning OS

- Active feature work lives in `.plans/features/<feature-slug>/`.
- Each feature folder contains:
  - `spec.md` — execution-ready plan
  - `context.md` — current state, constraints, and relevant notes
- Point-in-time audits live in `.plans/audits/YYYY-MM-DD-<slug>.md`.
- This repo does not use queue scripts, lane files, handoff branches, or
  tool-specific ownership files in phase 1.

## Validation Ladder

- Quick repo verification: `bun run validate:quick`
- Static gate: `bun run check`
- Browser smoke: `bun run test:smoke`
- Full local release gate: `bun run validate:smoke`

## Scope Discipline

- When the user asks to plan, audit, review, or explain, stay read-only unless
  they explicitly ask for implementation.
- For destructive or wide-reaching changes, list the intended surface first and
  avoid silent scope creep.
- Never claim a change is done without running the validation that matches the
  change surface.
