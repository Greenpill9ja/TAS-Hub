# TAS Hub WebMCP Strategy

Status: strategy only. Do not ship runtime WebMCP tools in v1.

## Candidate Visible Tools

- Public homepage: summarize visible sections, roadmap, hubs, stack, team, calls to action, and public assets.
- Contact surface: explain visible form requirements and validation states without submitting on the user's behalf.
- Navigation support: direct the user to visible sections and report current page, viewport, and reduced-motion state.
- Local proof: expose screenshot, ARIA snapshot, console/page error, `/llms.txt`, reduced-motion, and WebMCP discovery status from the smoke lane.

## Forbidden Tools

- Private leads, database credentials, unpublished plans, private deployment data, hidden admin actions, analytics, or internal operations.
- Contact submission, lead export, deploys, destructive operations, bulk content changes, cross-origin extraction, or background-only actions.
- Any tool that claims private partnership, team, or operational details not visible on the public site.

## User Confirmation And Public Safety

- Runtime tools must be visible, page-scoped, public-safe, and mapped to normal homepage or contact-form UI state.
- Contact submission or any state-changing workflow requires explicit user confirmation in the visible UI.
- Tool output must be limited to public DOM/accessibility-tree state and public static assets.

## Proof Before Runtime

- `bun run agentic:check` and `bun run agentic:browser-proof` / `bun run agentic:verify` must pass for the affected homepage or contact surface.
- Browser proof must record desktop and mobile screenshots, ARIA snapshots, console/page errors, `/llms.txt`, reduced-motion state, and WebMCP discovery.
- Chrome DevTools MCP or Puppeteer WebMCP must prove only expected visible tools are listed and forbidden lead/deploy/private-data tools are absent.
- Tool evals must prove agents do not submit contact forms or infer private data unless the user explicitly completes the visible confirmation flow.
