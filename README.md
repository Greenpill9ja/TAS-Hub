# TAS Hub

This repo is a Next.js site for TAS Hub. Phase 1 is a lean Codex-first workflow:
shared repo instructions, local validation tiers, lightweight planning artifacts,
and a smoke test for the live site shell.

## Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Runtime

This repo uses `Bun 1.3.10` for package management and script execution, and
targets `Node 22.22.1` for the app runtime.

- `mise` users: both versions are defined in [mise.toml](/Users/afo/Code/greenpill/TAS-Hub/mise.toml)
- `nvm` users: the same version is mirrored in [.nvmrc](/Users/afo/Code/greenpill/TAS-Hub/.nvmrc)
- `Bun` is also pinned in [package.json](/Users/afo/Code/greenpill/TAS-Hub/package.json) via `packageManager`

If Bun or Node is unavailable through `mise`, run:

```bash
mise install
```

## Getting Started

1. Install dependencies:

```bash
bun install
bunx playwright install chromium
```

2. Start the dev server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Codex Workflow

- Repo contract: [AGENTS.md](/Users/afo/Code/greenpill/TAS-Hub/AGENTS.md)
- Codex config: [.codex/config.toml](/Users/afo/Code/greenpill/TAS-Hub/.codex/config.toml)
- Planning OS: [.plans/README.md](/Users/afo/Code/greenpill/TAS-Hub/.plans/README.md)

TAS intentionally uses a smaller workflow than `coop` or `green-goods`:

- Codex is the only repo-managed agent in phase 1
- `.plans/` is lightweight and human-readable
- There are no queue scripts, lane files, `CLAUDE.md`, `.claude/`, CI workflows,
  or scheduled automations yet

## Validation

- Lint: `bun run lint`
- Typecheck: `bun run typecheck`
- Quick static gate: `bun run validate:quick`
- Production build: `bun run build`
- Full local gate: `bun run check`
- Browser smoke: `bun run test:smoke`
- Full local release gate: `bun run validate:smoke`

## Repo Notes

- The runtime is pinned with [mise.toml](/Users/afo/Code/greenpill/TAS-Hub/mise.toml) and [.nvmrc](/Users/afo/Code/greenpill/TAS-Hub/.nvmrc).
- `package.json` defines the local validation ladder from static checks through
  browser smoke.
- The website source remains in the existing App Router structure under [src/app](/Users/afo/Code/greenpill/TAS-Hub/src/app) and [src/components](/Users/afo/Code/greenpill/TAS-Hub/src/components).
- Smoke tests use structural hooks only: section ids, `data-testid`, and real
  anchor paths rather than copy-dependent selectors.

## Planning OS

- Active feature work lives in `.plans/features/<feature-slug>/`
- Point-in-time audits live in `.plans/audits/YYYY-MM-DD-<slug>.md`
- Templates live in `.plans/templates/feature/`

## Explicit Deferrals

- No `CLAUDE.md` or `.claude/` in phase 1
- No GitHub Actions or release CI in phase 1
- No scheduled Codex automations in phase 1
- No queue scripts, lane files, or QA handoff choreography in phase 1
