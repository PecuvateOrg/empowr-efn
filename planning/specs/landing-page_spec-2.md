# Landing Page — Spec 2 (Revised)

`efn.empowrcic.org` homepage — the Empowr Freelancer Network programme hub.

**Status:** Approved
**Route:** `/` (homepage)
**Primary CTA target:** `https://dashboard.empowrcic.org/onboard`

> **What changed from spec 1:** Copy reframed around the EFN as a network delivering Empowr's programmes — self-billing demoted from a headline pillar to a detail under Simple pay. Footer updated to a 3-column brand identity layout (matches Heroes site pattern) with a Find Out More link added. All other layout, sections, components, responsive behaviour, and brand application unchanged.

---

## Purpose

The homepage serves two functions:

1. **Introduction** — tells a prospective freelancer what the EFN is, who can join, and how it works.
2. **Navigation hub** — as EFN tools are built, they appear here as accessible destinations.

It is not a sales page. It is a clear, direct introduction followed by a single primary action.

---

## Page Sections

### 1. Hero

| Element | Content |
|---|---|
| Eyebrow | `Empowr Freelancer Network` |
| Headline | `Do work that matters. On your terms.` |
| Body | `The Empowr Freelancer Network is a community of coaches, facilitators, and operations professionals delivering Empowr's programmes across the UK. Join on a flexible, shift-based basis — we handle the admin so you can focus on the work.` |
| Primary CTA | `Join the Network` → `https://dashboard.empowrcic.org/onboard` |
| Secondary CTA | `Learn about EFN` → Notion page (see `links.ts`) |
| Background | `--card` (`#ffffff`) |

Headline: H1, weight 900. Body: weight 400, max-width ~560px, centred. CTAs side by side on desktop, stacked on mobile. Primary: solid `--blue`. Secondary: outlined `--blue` border and text, `--blue-soft` hover bg.

---

### 2. How It Works

Four-step flow. Horizontal on desktop, vertical on mobile.

| Step | Title | Body |
|---|---|---|
| 1 | Complete the onboarding form | Fill in your details online — takes around 5 minutes. |
| 2 | Sign your agreement | You'll receive a personalised Freelance Services Agreement by email. Sign it electronically. |
| 3 | Join Sling | Once signed, you'll receive a Sling invite — our scheduling platform. Join with one click. |
| 4 | Start working | Your manager will be in touch to schedule your first assignment. |

Step numbers: styled with `--blue`, weight 900. Background: `--card` (`#ffffff`).

---

### 3. What You Get

Three value pillars. Three-column grid on desktop, stacked on mobile.

| Pillar | Copy |
|---|---|
| Flexible shifts | Take on assignments that fit your schedule — no fixed hours or minimum commitment. |
| Simple pay | Once your timesheet is approved, we handle invoicing on your behalf. No chasing, no paperwork — you just get paid. |
| Real impact | Contribute to programmes promoting life-long wellbeing through experiential learning activities to communities across the UK. |

Background: `--blue-pale` (`#eef3fc`). Cards: `--card` bg, `14px` radius, `1.5px` border using `--border`.

---

### 4. Eligibility Requirements

Heading: `Eligibility Requirements`. Three criteria as inline chips on desktop, stacked on mobile. Two CTAs below the chips.

- Self-employed (or willing to register)
- Eligible to work in the UK
- Available for shift-based assignments

Background: `--cream`. Each item: small chip with `--border` border and `--blue` tick. Centred layout throughout.

**CTA:** `Join the Network` → `https://dashboard.empowrcic.org/onboard` — `.btn-blue` (solid)

---

### 5. Tools Section

Enticer — shows members what's coming. No CTA in this section. Section heading: `EFN Tools` with a `Coming soon` chip inline beside it.

| Tool | Description | Link | Status at launch |
|---|---|---|---|
| Timesheet Portal | Submit and track your timesheets | TBC | Coming soon |
| My Schedule | View your upcoming shifts via Sling | TBC | Coming soon |
| Resource Hub | Guides, policies, and programme information | TBC | Coming soon |

Cards: `--muted` bg, `14px` radius, `--border` border, `opacity-60`. No links. 3-column grid on desktop, single column on mobile.

---

### 6. Footer

3-column layout (brand identity left, grouped link sections right) — matches the Heroes site footer pattern. Collapsible on mobile.

| Column | Element | Value |
|---|---|---|
| Brand | Name | `Empowr Freelancer Network` |
| Brand | Tagline | `Promoting life-long wellbeing through experiential learning activities.` |
| Legal | Terms and Conditions | Link to Pecuvate LegalHub (confirm URL at build time) |
| Legal | Privacy Policy | Link to Pecuvate LegalHub (confirm URL at build time) |
| Links | Find Out More | Notion page (see `links.ts`) |
| Links | Contact | `efn@empowrcic.org` |
| Bottom | Copyright | `© Empowr CIC` |

Background: `--black` (`#1B1B1B`). Text: `--muted` / white. Links: `--blue-light` on hover. Copyright bar below the column grid.

---

## Navigation

No top navigation on launch — the page is single-scroll. Add a sticky header with nav links once there are 3 or more tool destinations in Section 5.

---

## Responsive Behaviour

| Section | Mobile | Desktop |
|---|---|---|
| Hero | Stacked, centred | Centred, max-width 880px |
| How It Works | Vertical numbered list | Horizontal 4-step flow |
| What You Get | Stacked single column | 3-column grid |
| Eligibility | Stacked | Inline chip row |
| Tools | Single-column cards | 2-column grid |
| Footer | Stacked | 3-column or centred |

---

## Brand Application

- **Font:** Nunito — import via `next/font/google` in `layout.tsx` (weights 400, 600, 800, 900); apply via `--font-nunito` CSS variable on `<html>`
- **Colours:** exact tokens from `~/projects/Empowr CIC/brand-identity.md`
- **Implementation:** register brand tokens in `globals.css` using Tailwind v4's `@theme` directive so they become Tailwind utilities (`bg-blue`, `text-cream`, `bg-blue-pale`, etc.)
- **Buttons:** use shadcn/ui `Button` component with a custom `brand` variant — `rounded-full`, `font-extrabold`, `shadow-blue`, transition `0.2s`
- **Shadows:** define `--shadow-blue` and `--shadow-sm` in `@theme` and use via `shadow-blue`, `shadow-sm` Tailwind classes
- **Cards:** shadcn/ui `Card` component, styled via variant or className to match brand radius (`rounded-[14px]`) and border (`border-border-b`)

---

## Component List

| Component | File | Notes |
|---|---|---|
| Hero | `src/components/Hero.tsx` | Eyebrow, headline, body, CTA button |
| HowItWorks | `src/components/HowItWorks.tsx` | 4-step flow, responsive |
| ValuePillars | `src/components/ValuePillars.tsx` | 3-column pillar grid |
| EligibilityStrip | `src/components/EligibilityStrip.tsx` | Chip row |
| ToolsHub | `src/components/ToolsHub.tsx` | Tool card grid — accepts a tools array |
| Footer | `src/components/Footer.tsx` | Links, copyright, contact |

---

## Out of Scope

- Authentication or login
- API routes or server actions
- Any form handling — forms live in the dashboard
- Blog, resources, or role descriptions (marked as future in `efn-public-page.md`)
- Multiple language support
- Analytics (can be added post-launch via Netlify)
