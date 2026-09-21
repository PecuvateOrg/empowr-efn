# empowr-efn — Context

*Last updated: 2026-05-07*

Cross-cutting orientation for the project. Workspace context lives in each folder's CONTEXT.md.

---

## What This Is

A lightweight Next.js site at `efn.empowrcic.org` — the public-facing hub for the Empowr Freelancer Network programme. It introduces the EFN, links to the onboarding tool, and will link to other programme tools as they are built.

UI-only project. No database, no API routes, no authentication. All functional tools (onboarding form, dashboards) are built separately and linked from here.

---

## External Services

| Service | Purpose |
|---|---|
| Netlify | Hosting and continuous deployment from `main` — live at `https://efn.empowrcic.org` |
| AWS Route 53 | DNS — `efn.empowrcic.org` CNAME to Netlify domain |
| `efn-dashboard.empowrcic.org` | Onboarding form target (Freelancer-Workflow project, separate deploy) |

---

## Non-Obvious Decisions

- **Separate from the admin dashboard** — The EFN site is public-facing. The dashboard is admin-facing. Keeping them separate prevents public users from encountering admin routes and lets each project evolve independently.
- **Links out, does not embed** — Tools like the onboarding form live in the dashboard and are linked from here, not iframed or replicated. Single source of truth per tool.
- **Tailwind v4 + shadcn/ui** — Brand tokens from `~/projects/Empowr CIC/brand-identity.md` are registered via `@theme` in `globals.css`, making them available as Tailwind utility classes. Heroes stays on plain CSS (legacy); this project establishes the new standard for all new Empowr CIC builds.
- **Programme hub design** — The homepage is not just a landing page. It is the navigation layer for the entire EFN programme. As new tools are built, they appear here as destinations.
- **Next.js over Vite/React** — Chosen for routing flexibility and the option to add SSR or API routes later without a rewrite, at minimal extra cost on a simple site.
