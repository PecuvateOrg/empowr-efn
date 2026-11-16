# Empowr EFN — System Flow

## Request Lifecycle

```
Browser → efn.empowrcic.org
    │
    ▼
Route 53 DNS
    │  CNAME: efn → empowr-efn.netlify.app
    ▼
Netlify CDN
    │  Serves pre-built static files from .next/
    │  (@netlify/plugin-nextjs wraps the output)
    ▼
Static HTML page + Tailwind CSS + minimal JS
    │
    ▼
Client-side hydration (only for):
    └── FAQAccordion.tsx  — open/close state (shadcn/ui Accordion)
        AnchorNav.tsx     — sticky scroll detection (if applicable)
```

No API calls, no database queries, no authentication at any stage. The entire site is pre-rendered at deploy time.

---

## User Journey

```
User arrives at efn.empowrcic.org (/)
    │
    ├── Hero CTA: "Join the Network"
    │       → dashboard.empowrcic.org/onboard
    │         (external — freelancer onboarding form)
    │
    ├── Hero CTA: "Learn about EFN"
    │       → /guide (internal)
    │
    └── ToolsHub (coming soon cards)
            → future tool destinations (Phase 3)

User reads /guide
    │
    ├── AnchorNav → jumps to section anchors on page
    │
    └── CTAStrip: "Ready to join?"
            → dashboard.empowrcic.org/onboard
```

---

## Special Routes

### `/legal/*` — Policy Proxy
```
Browser → efn.empowrcic.org/legal/empowr-efn-terms-and-conditions
    │
    ▼
Netlify redirect rule (status 200, force = true)
    │  from = "/legal/*"
    │  to   = "https://legalhub.pecuvate.com/share/empowr/:splat"
    ▼
LegalHub serves the policy content
    │
    ▼
Rendered transparently at efn.empowrcic.org/legal/...
```

---

## Data Flow

This site has **no dynamic data**. All content is hardcoded in page and component files.

```
External URL constants
    src/lib/links.ts
        │
        ├── Hero.tsx           → "Join the Network" CTA
        ├── GuideHeader.tsx    → "Join the Network" CTA
        ├── CTAStrip.tsx       → "Ready to join?" CTA
        └── Footer.tsx         → legal links, contact email

Page content (JSX)
    src/app/page.tsx
    src/app/guide/page.tsx
        │
        ▼
    out/ (static HTML at build time)
```

To update any link, edit `src/lib/links.ts` and redeploy. Never hardcode URLs in components.

---

## External Services

| Service | Connection | Direction |
|---|---|---|
| **dashboard.empowrcic.org** | Freelancer onboarding form — all CTAs point here | Outbound link |
| **LegalHub** (`legalhub.pecuvate.com`) | T&Cs + Privacy Policy — served via Netlify redirect | Inbound redirect target |
| **AWS S3** | Empowr logo (`empowr-cic.s3.us-east-1.amazonaws.com`) | Remote image pattern |
| **Netlify** | Hosting — auto-deploy on push to main | Infrastructure |
| **GitHub** (`PecuvateOrg/empowr-efn`) | Source — Netlify pulls on push | Infrastructure |
| **Route 53** | DNS — CNAME to Netlify | Infrastructure |
| **efn@empowrcic.org** | Contact email — mailto link in footer | Outbound link |

No inbound webhooks. No third-party SDKs called from the browser. No Netlify Functions.

---

## Deployment Pipeline

```
Local change
    │
    git push origin main
    │
    ▼
GitHub (PecuvateOrg/empowr-efn)
    │  triggers Netlify build hook
    ▼
Netlify build runner
    │  cd src/ && npm run build
    │  @netlify/plugin-nextjs wraps .next/ output
    ▼
Deploy to Netlify CDN
    │
    ▼
Live at efn.empowrcic.org
    (Route 53 CNAME → empowr-efn.netlify.app)
```

Build time: ~30–60 seconds (no external data fetching at build time).

---

## Page Composition

### Landing page (`/`)

```
layout.tsx (Nunito font, metadata)
    └── page.tsx
            ├── Hero.tsx            eyebrow + headline + dual CTAs
            ├── HowItWorks.tsx      4-step flow (horizontal → vertical on mobile)
            ├── ValuePillars.tsx    3-column value props grid
            ├── EligibilityStrip.tsx chip row
            ├── ToolsHub.tsx        coming-soon tool cards
            └── Footer.tsx          3-column footer + legal links
```

### Guide page (`/guide`)

```
layout.tsx
    └── page.tsx
            ├── GuideHeader.tsx     eyebrow + headline + back link + CTA
            ├── AnchorNav.tsx       sticky pill nav (4 anchors: Roles, Joining, Getting Paid, FAQ)
            ├── GuideSection(s)     section wrappers with alternating backgrounds
            │   ├── RolesTable.tsx  roles + hourly rates
            │   ├── StepList.tsx    numbered joining steps
            │   ├── StepList.tsx    numbered payment steps
            │   ├── Callout.tsx     blue/amber info blocks
            │   └── FAQAccordion.tsx single-open accordion (shadcn/ui)
            ├── CTAStrip.tsx        pre-footer CTA band
            └── Footer.tsx
```

---

## Phase 3 Expansion (Planned)

When the EFN programme grows, new tool destinations will be added to `ToolsHub.tsx`:

```
ToolsHub (currently coming-soon cards)
    │  Phase 3: activate cards as tools ship
    ├── Timesheet Portal    → tbd.empowrcic.org or /timesheet
    ├── My Schedule         → efn-dashboard.empowrcic.org/portal
    └── Resource Hub        → tbd.empowrcic.org or /resources
```

A sticky top navigation will also be added once there are 3+ active tool destinations.
