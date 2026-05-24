# TAS Hub WebMCP Strategy

Status: strategy only. Do not ship runtime WebMCP tools in v1.

## Candidate Visible Tools

- Public site: summarize visible sections, calls to action, and navigation anchors.
- Contact/CTA surfaces: explain visible requirements and next steps without submitting for the user.
- Motion/3D sections: describe visible controls and reduced-motion alternatives.
- Local smoke review: support visible route and CTA verification during development.

## Forbidden Tools

- Lead capture submission, private lead data, database credentials, unpublished plans, deploy actions, or hidden admin state.
- Background-only actions, destructive operations, bulk edits, or cross-origin data extraction.
- Any tool that bypasses normal visible CTA/user confirmation.

## Proof Before Runtime

- `bun run agentic:check` is stable and `bun run agentic:verify` passes when the exposed surface involves navigation, CTA behavior, motion, or rendering.
- `bun run agentic:browser-proof` records screenshots, ARIA snapshots, `/llms.txt` status, console/page error status, reduced-motion status, and WebMCP discovery JSON in `output/playwright/agentic-browser-proof/`.
- Tool descriptions are public, visible, and scoped to normal page affordances.
- Accessibility names, focus states, console health, and reduced-motion behavior are checked for exposed flows.
