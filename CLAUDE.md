# empowr-efn — Claude Code Rules

> **This repository is PUBLIC** (`PecuvateOrg/empowr-efn`).
>
> **Devlog and memory location:** `../../workspace-docs/empowr-efn/`
>
> `DEVLOG.md` and `memory.md` are not kept in this repo — write session entries to the path
> above instead. See `NON-NEGOTIABLES.md` for what must never be committed here.

## Identity
`efn.empowrcic.org` — the Empowr Freelancer Network programme hub. Lightweight Next.js site; introduces the EFN and links out to admin tools built in separate projects.

## Self-Reference
Inherits from `~/projects/Empowr CIC/CLAUDE.md` and `~/projects/CLAUDE.md`. This file is Layer 0
— routing only. Read `NON-NEGOTIABLES.md` before doing anything; project detail lives in each
folder's CONTEXT.md.

---

## Routing

| Task | Workspace | Read first |
|---|---|---|
| Landing page or any page build | `planning/specs/` | relevant spec in `planning/specs/` |
| Deployment or DNS | `ops/` | `ops/CONTEXT.md` |
| Architectural decisions | `planning/decisions/` | relevant decision record |

---

## Cross-Workspace Flows

- **Onboarding CTA** — "Join the Network" links to `https://efn-dashboard.empowrcic.org/onboard`; any onboarding flow changes require coordination with Freelancer-Workflow project
- **Brand tokens** — source of truth is `~/projects/Empowr CIC/brand-identity.md`; update there first, then propagate to `src/app/globals.css`
- **Deploy** — push to `main` → Netlify auto-deploys; no manual deploy step needed

---

## File Placement

| File type | Goes in |
|---|---|
| Feature specs | `planning/specs/` |
| Architectural decision records | `planning/decisions/` |
| Deployment and DNS scripts | `ops/scripts/` |
| Shared CSS tokens | `src/app/globals.css` |
| Reusable UI components | `src/components/` |
| Page files | `src/app/` (Next.js App Router) |

---

## Token Management

Do NOT load unless the task requires it:
- `planning/decisions/` — only when reviewing or recording architectural decisions
- `docs/` — only when task involves integration documentation
- `ops/` — only when deploying or running scripts

---

## Skills and Tools Available

| Tool / Skill | Trigger | Purpose |
|---|---|---|
| `/netlify-deploy` | going live or redeploying | Deploy to Netlify and configure `efn.empowrcic.org` |
| `/netlify-supabase-check` | before any deploy | Pre-deploy audit — Netlify + Supabase integration |
| `/pre-build-check` | before any deploy | Validate build structure and frontend quality |
| `/pre-deploy-security` | before any deploy | FAILs block the deploy |
| `/webapp-testing` | after frontend changes | Test UI with Playwright |
| `/simplify` | after a feature is built | Review changed code for reuse, quality, and efficiency |
