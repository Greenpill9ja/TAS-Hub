---
name: TAS Hub Design System
description: Lightweight design contract for the Tech and Sun Hub public Next.js site, grounded in Tailwind v4 theme tokens and current section components.
---

# TAS Hub Design System

TAS Hub is a public solar-and-builder community site. It should feel bright, local, credible, and energetic without becoming a generic SaaS dashboard. The sun, grid, local hub, and builder story are the primary visual signals.

## Source Of Truth

- Tailwind v4 theme tokens live in `src/app/globals.css` under `@theme`.
- Public sections live in `src/components/sections/` and should reuse the existing section rhythm before inventing new layout systems.
- Motion is implemented with Framer Motion and Lenis; Spline is available but must remain inspectable and accessible when used.
- Browser proof is `bun run agentic:browser-proof` / `bun run agentic:verify`.

## Token Rules

- Prefer `@theme` tokens such as `primary`, `secondary`, `accent`, `vibrant`, `dark`, and `light-green` over raw hex or arbitrary Tailwind colors.
- Raw hex, arbitrary Tailwind colors, arbitrary radii/shadows/text sizes, `min-h-screen`, `100vw`, `100vh`, Framer Motion, Lenis, and canvas/Spline usage are design-system risks. They are allowed only when recorded in `scripts/data/design-token-baseline.tsv` with a reason.
- SVG illustrations may keep audited raw values until they are promoted into reusable illustration tokens.

## Layout And Accessibility

- Prefer dynamic viewport units and content-driven sections over `min-h-screen` when mobile browser chrome can clip content.
- Preserve visible focus, semantic links/buttons, real headings, accessible names, and 44px touch targets.
- Do not hide meaningful copy or controls inside canvas-only experiences. Any Spline/canvas-like section needs equivalent DOM text and normal navigation.

## Motion

- Motion should support the solar/community narrative. New animation must honor reduced motion and should not block comprehension.
- Favor CSS/browser primitives when they can replace scroll listeners or animation code with less runtime complexity.

## Validation

Run `bun run check:design-tokens` for UI/CSS changes. Run `bun run agentic:check` before handoff. Use `bun run agentic:browser-proof` when navigation, CTA behavior, motion, rendering, or public-route proof is needed.
