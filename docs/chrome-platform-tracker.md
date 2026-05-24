# Chrome Platform Tracker

Last refreshed: 2026-05-24

Guidance sources: `modern-web-guidance@latest`, Chrome View Transitions guidance, Chrome WebMCP, Lighthouse Registered WebMCP tools, Chrome soft-navigation measurement, Chrome DevTools Performance reference, and Chrome DevTools MCP.

| Feature | Current adoption | Candidate surface | Risk | Proof command | Status |
| --- | --- | --- | --- | --- | --- |
| `/llms.txt` and public site context | Public `llms.txt` and smoke proof are present. | Homepage, public sections, and contact surface. | Public context can overstate private partnership or operational details. | `bun run agentic:browser-proof` | ship |
| Semantic, native, accessible DOM | Lean Next.js guide requires Baseline Widely Available, semantic controls, ARIA snapshots, reduced motion, and smoke proof. | Homepage sections and contact form. | Marketing polish can degrade CTA labels, focus, or mobile proof. | `bun run agentic:check` | ship |
| View Transitions | No current production use. | No action unless a concrete navigation UX benefit appears. | Extra motion could distract from a lean public site and add proof cost without user value. | Plan-only until route/navigation design exists. | watch |
| WebMCP runtime tools | Strategy and discovery probes only; no runtime tools approved. | Future read-only public homepage/contact explanation tools only. | Lead/contact submission, deploys, analytics, or private operational data are forbidden. | Chrome DevTools MCP `list_webmcp_tools` must return only expected visible tools. | watch |
| Chrome DevTools MCP proof | Smoke lane records screenshots, ARIA snapshots, console/page errors, `/llms.txt`, reduced motion, and WebMCP discovery. | Homepage/contact proof before public changes. | Real-profile MCP proof can expose private browser profile data. | `bun run validate:smoke` for rendered proof; isolated Chrome DevTools MCP when needed. | ship |
| Core Web Vitals | Next core-web-vitals lint config is present; no custom RUM lane. | Homepage and contact form. | Heavy instrumentation would be disproportionate for this lean public site. | Use `bun run validate:quick`; add Lighthouse only when performance work is scoped. | watch |
| HTML-in-Canvas, 3D, Declarative Partial Updates, `streamHTML` | No production dependency. | Research only if clear accessibility value appears. | 3D/canvas or experimental HTML delivery can undermine lean accessibility proof. | Explicit plan and AX fallback proof required. | watch |

## Adoption Notes

- Keep TAS-Hub lean: docs and proof strategy are enough unless a concrete navigation, accessibility, or performance issue appears.
- WebMCP remains frozen at strategy/proof level until the user explicitly approves runtime `navigator.modelContext.registerTool`, `toolname`, or `tooldescription` work.
- Do not add 3D, HTML-in-Canvas, or View Transitions just to mirror other repos.

## Operational Follow-Up

- Repo-native task surface: `.plans/features/modern-css-web-ui-primitives/spec.md` under `Next Proof Task`.
- Next proof task: after a real homepage/contact runtime change, run `bun run validate:smoke` or isolated Chrome DevTools MCP proof and record route, viewport, screenshot/ARIA or DOM snapshot, console/page errors, `/llms.txt`, reduced motion, CWV fields when performance is scoped, and `list_webmcp_tools`.
