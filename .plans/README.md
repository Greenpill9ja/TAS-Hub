# TAS Planning OS

TAS uses a lightweight planning surface modeled after sibling repos, but without
queue scripts, lane files, or tool-specific handoff choreography.

## Layout

- `features/<feature-slug>/spec.md` — execution-ready plan
- `features/<feature-slug>/context.md` — current state, constraints, notes
- `audits/YYYY-MM-DD-<slug>.md` — point-in-time audits and readiness reports
- `templates/feature/` — starter files for new feature folders

## Operating Rules

- Codex owns execution by default in phase 1.
- Planning artifacts should stay human-readable and reusable by future tools.
- Do not add `.todo.md` lane files, queue metadata, or handoff branches in this
  phase.
