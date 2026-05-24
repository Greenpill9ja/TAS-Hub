# Modern CSS/Web UI Primitives Context

## Current State

- Source audit: `/Users/afo/Documents/Codex/2026-05-23/i-m-watching-this-great-video/modern-css-web-ui-audit.md`.
- TAS Hub already has a lightweight `.plans` surface with feature `context.md` and `spec.md` files only.
- The app is a Next 16, React 19, Bun 1.3.10, Tailwind v4 site with Framer Motion, Lenis smooth scrolling, and Spline available as runtime dependencies.
- Current UI surfaces use Tailwind utility classes heavily, including `min-h-screen`, hardcoded gradient colors, horizontal scroll snapping, hidden scrollbar styling, and Framer Motion scroll/parallax effects.
- `src/app/layout.tsx` does not yet opt into `meta name="text-scale" content="scale"`, and root/body viewport behavior still needs large-font and dynamic viewport review.
- The app does not currently expose an explicit `color-scheme`, `prefers-contrast`, or `forced-colors` contract; motion-heavy Framer/Lenis surfaces need reduced-motion proof before further animation work.

## Constraints

- This plan tracks future work only. Do not change runtime CSS, components, scripts, dependencies, metadata, or generated assets in this pass.
- Preserve the existing lightweight TAS planning model: no lane files, queue metadata, handoff branches, package scripts, or validation helpers.
- Treat existing dirty files outside `.plans/features/modern-css-web-ui-primitives/` as unrelated user work.
- Modern CSS/Web UI adoption should use progressive enhancement. Limited-support APIs such as HTML-in-Canvas, overscroll gestures, scoped View Transitions, CSS `@function`, and CSS `if()` remain research until explicitly promoted.

## Notes

- Priority primitives from the audit: OS preference support, text-scale readiness, token roles, dynamic viewport units, safe scroll behavior, native layered UI, and progressive CSS motion.
- TAS-specific candidates: Tailwind token consolidation, Lenis/Framer Motion reduction opportunities, scroll-driven animation pilots, horizontal snap/scrollbar polish, and Spline/canvas accessibility research.
- Safe adoption path: document first, pilot one low-risk surface, guard newer features with `@supports` or feature detection, provide static/reduced-motion fallbacks, and verify across breakpoint and preference modes.
