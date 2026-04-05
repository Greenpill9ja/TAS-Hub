# Codex-First Agentic Workflow Context

## Current State

- TAS is a single Next.js App Router site.
- Node `22.22.1` is pinned in `mise.toml` and `.nvmrc`.
- `lint`, `typecheck`, `build`, and `check` already pass locally.
- The repo did not previously have `AGENTS.md`, `.codex/`, or `.plans/`.

## Constraints

- Keep Bun as the package manager.
- Do not introduce Claude repo files, CI workflows, or queue systems in phase 1.
- Avoid copy or narrative rewrites while adding smoke hooks.

## Notes

- This feature is the phase 1 baseline for future Codex maintenance and release
  hardening work.
