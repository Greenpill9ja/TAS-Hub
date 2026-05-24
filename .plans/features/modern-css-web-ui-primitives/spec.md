# Modern CSS/Web UI Primitives

## Goal

Create an execution-ready backlog for adopting modern CSS and Web UI primitives in TAS Hub without starting runtime implementation yet. The work should improve consistency, accessibility, and maintainability while preserving the current visual direction until each change is separately approved.

## Key Changes

- Text-scale readiness: audit root/body font assumptions, `min-h-screen` sections, large headings, CTA wrapping, and mobile layouts before considering `meta name="text-scale" content="scale"`.
- CSS architecture: document Tailwind v4 layer ownership, global base rules, repeated utility clusters, and whether cascade layers or scoped CSS would reduce drift before adding new styling conventions.
- Token consolidation: map repeated Tailwind colors, hardcoded gradients, radii, shadows, and spacing into role-based theme primitives before adding more component-local styling.
- Preference and native UI readiness: define `color-scheme`, `prefers-reduced-motion`, `prefers-contrast`, `forced-colors`, visible focus, and touch-target expectations; future overlays, menus, and tooltips should prefer native `<dialog>` or `popover` when component-library behavior is not needed.
- Viewport cleanup: identify `min-h-screen`, `100vw`-derived widths, horizontal scroll surfaces, and hidden scrollbar patterns that should move toward `dvh`/`svh`/`lvh`, `overflow-x: clip`, or explicit scrollbar policy.
- Motion modernization: inventory Lenis and Framer Motion usage, verify reduced-motion behavior, and mark simple reveal/parallax effects that could become CSS scroll-driven or scroll-triggered progressive enhancements.
- Guided navigation: evaluate scroll snap and section navigation for CSS scroll spy or `scrollIntoView({ container: "nearest" })` adoption when support and fallbacks are acceptable.
- Layered/canvas research: keep Spline and HTML-in-Canvas as accessibility research only, focused on semantic labels, copyable text, and inspectable controls inside future canvas-like experiences.

## Validation

- Plan-only pass: confirm `git status --short --branch` before editing and keep the diff scoped to `.plans/features/modern-css-web-ui-primitives/**`.
- Run `git diff --check` after the plan files are added.
- Each future primitive promotion should capture regression risk, vulnerable surfaces, fallback behavior, proof required, existing abstraction fit, and reversibility before runtime work starts.
- Do not run `bun run validate:quick`, `bun run check`, or `bun run validate:smoke` unless future runtime files change.

## Assumptions

- TAS Hub's current `.plans` format remains authoritative.
- Backlog-first means this feature pack becomes the tracking surface for future CSS modernization, not an implementation batch.
- HTML-in-Canvas and overscroll gestures are not production dependencies for TAS Hub in this phase.
