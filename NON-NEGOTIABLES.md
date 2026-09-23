# empowr-efn — Non-Negotiables

Forced open by `CLAUDE.md`'s Self-Reference line — read before doing anything else in this
project.

## Rules

- **This repository is PUBLIC** (`PecuvateOrg/empowr-efn`). Never create `DEVLOG.md` or
  `memory.md` in this repo — both filenames are gitignored here, so a copy created in this
  directory is silently never committed. Write session entries to
  `../../workspace-docs/empowr-efn/` in the private Empowr CIC hub instead.
- Never put live identifiers, unremediated security findings, or commercial state in any file
  tracked here. See `../../CONTEXT.md` and `_config/guides/public-repo-collaboration.md`.
- Brand must match `~/projects/Empowr CIC/brand-identity.md` exactly — no new colours or fonts
- Tailwind CSS v4 + shadcn/ui — brand tokens registered via `@theme` in `globals.css`; see `~/projects/_config/guides/styling.md` for the pattern
- Primary CTA "Join the Network" links to `https://efn-dashboard.empowrcic.org/onboard`
- No back-end logic in this project — UI-only hub; API routes belong in the dashboard
- Do not add features beyond what is specced in `planning/specs/` before build review
- No form handling — all forms live in the dashboard

## Naming Conventions

| Thing | Convention |
|---|---|
| Page files | kebab-case, `.tsx` |
| Component files | PascalCase, `.tsx` |
| CSS files | kebab-case, `.css` |
| Script files | kebab-case, `.mjs` |
| Spec files | `{feature-name}_spec.md` |
