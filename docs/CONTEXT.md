# Empowr EFN — Docs Index

This directory contains technical documentation for the Empowr Freelancer Network programme hub. Read these files when picking up this project cold.

---

## Files

| File | What it covers |
|---|---|
| [tech-stack.md](./tech-stack.md) | Dependencies, framework, design system, folder structure, naming conventions |
| [system-flow.md](./system-flow.md) | User journey, page composition, data flow, external integrations, deployment pipeline |

---

## What Is This Project?

**empowr-efn** is the public-facing hub for the Empowr Freelancer Network (EFN) programme, live at `efn.empowrcic.org`. It has two jobs:

1. **Introduction** — explain what the EFN is, who can join, how it works, and what to expect
2. **Navigation hub** — as EFN tools are built (timesheet portal, schedule, resource hub), they appear here as linked destinations

It is deliberately **UI-only** — no database, no API routes, no authentication. All functional tools live in separate projects and are linked from here.

- **Live URL:** [efn.empowrcic.org](https://efn.empowrcic.org)
- **Stack:** Next.js 16 + TypeScript + Tailwind CSS v4 + shadcn/ui
- **Hosting:** Netlify (auto-deploy on push to `main`)
- **Repo:** `PecuvateOrg/empowr-efn` (GitHub, public)
- **DNS:** Route 53 CNAME `efn → empowr-efn.netlify.app`

---

## Pages

| Route | Purpose | Status |
|---|---|---|
| `/` | Landing page — hero, how it works, value pillars, eligibility, tools hub | Live |
| `/guide` | Freelancer guide — roles, pay, joining steps, payment steps, FAQs | Live |

Planned future pages (Phase 3, not started): Timesheet Portal, My Schedule, Resource Hub.

---

## Phases

| Phase | Scope | Status |
|---|---|---|
| 0 — Planning | Specs, architecture decisions | Complete |
| 1 — Build | Landing page + guide page | Complete |
| 2 — DNS | Deploy to Netlify, CNAME to efn.empowrcic.org | Complete |
| 3 — Expand | Add tool links as EFN programme grows | Not started |

---

## Outstanding

- Confirm exact Sling management process with team → expand copy on home/guide if needed

---

## Key Relationships

| Project | Relation |
|---|---|
| Freelancer-Workflow | Backend automation (Notion, Xero, BoldSign, Sling) — this site is the public face |
| dashboard.empowrcic.org | Onboarding form — `/` and `/guide` both CTA here |
| LegalHub (`legalhub.pecuvate.com`) | T&Cs + Privacy Policy — served via `/legal/*` Netlify redirect |

---

## Key Constraints

- **No form handling here** — all forms live in the dashboard
- **No hardcoded URLs** — all external links in `src/lib/links.ts`
- **No new colours or fonts** — follow `~/projects/Empowr CIC/brand-identity.md` exactly
- **No nav on launch** — nav will be added once there are 3+ tool destinations

---

## Planning & Ops

| Location | Contains |
|---|---|
| `planning/specs/landing-page_spec-2.md` | Approved landing page spec |
| `planning/specs/guide-page_spec.md` | Guide page spec (all 8 sections) |
| `planning/CONTEXT.md` | Planning workspace structure |
| `src/CONTEXT.md` | Application code orientation |
| `ops/CONTEXT.md` | Deployment and DNS config |
