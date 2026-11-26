# empowr-efn — Claude Code Rules

> **This repository is PUBLIC** (`PecuvateOrg/empowr-efn`).
>
> **Devlog and memory location:** `../../workspace-docs/empowr-efn/`
>
> `DEVLOG.md` and `memory.md` are not kept in this repo — write session entries to the path
> above instead. See `NON-NEGOTIABLES.md` for what must never be committed here.

@NON-NEGOTIABLES.md

Other tools: read `NON-NEGOTIABLES.md` first, then `~/projects/NON-NEGOTIABLES.md`.

## Routing

| Task | Workspace | Read first |
|---|---|---|
| **Design: look, colours, components** | `design-system/` | `design-system/MASTER.md` (then the Empowr brand kit it names) |
| Landing page or any page build | `planning/specs/` | relevant spec in `planning/specs/` |
| Deployment or DNS | `ops/` | `ops/CONTEXT.md` |
| Architectural decisions | `planning/decisions/` | relevant decision record |

## Cross-Workspace Flows

- **Onboarding CTA** — "Join the Network" links to `https://efn-dashboard.empowrcic.org/onboard`; any onboarding flow changes require coordination with Freelancer-Workflow project
- **Brand tokens** — source of truth is `~/projects/Empowr CIC/company/identity/brand-guide.md`; update there first, then propagate to `src/app/globals.css`
- **Deploy** — push to `main` → Netlify auto-deploys; no manual deploy step needed

## File Placement

| File type | Goes in |
|---|---|
| Feature specs | `planning/specs/` |
| Architectural decision records | `planning/decisions/` |
| Deployment and DNS scripts | `ops/scripts/` |
| Shared CSS tokens | `src/app/globals.css` |
| Reusable UI components | `src/components/` |
| Page files | `src/app/` (Next.js App Router) |

## Facts

- `planning/decisions/` — only when reviewing or recording architectural decisions
- `docs/` — only when task involves integration documentation
- `ops/` — only when deploying or running scripts
