# empowr-efn

Public-facing hub for the Empowr Freelancer Network (`efn.empowrcic.org`).

Introduces the EFN programme and provides navigation to freelancer tools.

---

## Stack

- Next.js (App Router)
- Plain CSS with custom properties (no Tailwind — consistent with Empowr Heroes)
- Netlify (hosting + continuous deployment)
- AWS Route 53 (DNS)

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy

Push to `main` — Netlify auto-deploys.

DNS: `efn.empowrcic.org` → CNAME → Netlify domain (configured in AWS Route 53).

---

## Project Structure

```
empowr-efn/
  planning/       Feature specs and decision records
  docs/           Integration docs (added when needed)
  ops/            Deployment scripts (added when needed)
  src/
    app/          Next.js App Router pages + globals.css
    components/   Shared UI components
```

---

## Brand

Brand tokens live at `~/projects/Empowr CIC/brand-identity.md`. The `globals.css` in this project copies the root token block from `empowr-heroes-nextjs/src/app/globals.css` and applies them identically.

---

## Related Projects

| Project | Purpose |
|---|---|
| `Freelancer-Workflow/dashboard/` | Onboarding form at `/onboard`, admin tools |
| `empowr-heroes-nextjs/` | Empowr Heroes donation platform |
