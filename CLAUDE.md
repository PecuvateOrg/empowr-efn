# empowr-efn — Claude Code Rules

> **This repository is PUBLIC** (`PecuvateOrg/empowr-efn`).
>
> **Devlog and memory location:** `../../workspace-docs/empowr-efn/`
>
> `DEVLOG.md` and `memory.md` are **not** kept in this repo — they hold operational
> detail that must not be world-readable. Write session entries to the path above,
> in the private Empowr CIC hub. Both filenames are gitignored here, so a copy created
> in this directory is silently never committed.
>
> Never put live identifiers, unremediated security findings, or commercial state
> in any file tracked here. See `../../CONTEXT.md` and
> `_config/guides/public-repo-collaboration.md`.

## Identity
`efn.empowrcic.org` — the Empowr Freelancer Network programme hub. Lightweight Next.js site; introduces the EFN and links out to admin tools built in separate projects.

## Self-Reference
Inherits from `~/projects/Empowr CIC/CLAUDE.md` and `~/projects/CLAUDE.md`. This file is the map — workspace context lives in each folder's CONTEXT.md.

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

## Constraints

- Brand must match `~/projects/Empowr CIC/brand-identity.md` exactly — no new colours or fonts
- Tailwind CSS v4 + shadcn/ui — brand tokens registered via `@theme` in `globals.css`; see `~/projects/_config/guides/styling.md` for the pattern
- Primary CTA "Join the Network" links to `https://efn-dashboard.empowrcic.org/onboard`
- No back-end logic in this project — UI-only hub; API routes belong in the dashboard
- Do not add features beyond what is specced in `planning/specs/` before build review
- No form handling — all forms live in the dashboard

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

## Naming

| Thing | Convention |
|---|---|
| Page files | kebab-case, `.tsx` |
| Component files | PascalCase, `.tsx` |
| CSS files | kebab-case, `.css` |
| Script files | kebab-case, `.mjs` |
| Spec files | `{feature-name}_spec.md` |

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
