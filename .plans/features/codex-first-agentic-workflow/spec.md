# Codex-First Agentic Workflow

## Goal

Set up a lean Codex operating system for TAS Hub with repo-level instructions,
Codex config, lightweight planning artifacts, and a local smoke-validation path.

## Key Changes

- Add `AGENTS.md` as the primary repo contract.
- Add `.codex/` config, environment actions, and reusable Codex roles.
- Add a lightweight `.plans/` scaffold for features and audits.
- Extend the validation ladder with Playwright smoke coverage for the homepage.

## Validation

- `bun run validate:quick`
- `bun run check`
- `bun run test:smoke`
- `bun run validate:smoke`

## Assumptions

- TAS uses Bun for repo operations and remains a single Next.js app.
- Codex is the only repo-managed agent in phase 1.
- Smoke coverage stays structural and non-visual.
