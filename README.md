# Asta Build Financing Page

A static **Astro v7.2.2** paid-funnel template for Asta Build. The route at `/lp/asta-build/` recreates the full structural conversion architecture of the approved reference without using any third-party branding, proof, claims, legal copy, or media.

> **Current state:** This is a structurally complete staging funnel, not a live lead-capture flow. CTA controls, qualifier options, customer proof, legal URLs, tracking, and submission remain deliberately inactive until approved client inputs and a validated back end are supplied.

## Included Conversion Architecture

The route preserves the approved route sequence: dark hero and outcome context; two-option qualifier; supporting value narrative; three-step process; approval-gated proof architecture; objection-handling comparison; final CTA; and legal/consent closure. The full inventory and reconciliation are recorded in [`docs/reference-inventory.md`](docs/reference-inventory.md).

The implementation is mobile-first, static by default, and uses no client framework hydration. FAQ, live form, video, tracker, pixel, Conversions API, and CRM behavior are intentionally absent until their production requirements are approved.

## Local Commands

| Command | Purpose |
|---|---|
| `npm install` | Install dependencies. |
| `npm run dev` | Start the local development server. |
| `npm run check` | Run Astro type and template diagnostics. |
| `npm run build` | Build the static production route. |
| `npm run preview` | Preview the built route locally. |

## Project Structure

```text
src/
  components/funnel/     Static conversion modules
  data/funnel.ts         Single source for client facts and approval gates
  layouts/               Paid-page metadata and static document shell
  pages/lp/asta-build/   Paid-funnel route
  styles/funnel.css      Mobile-first local stylesheet
docs/
  reference-inventory.md Section-by-section reference reconciliation
  visual-qa.md           Desktop and mobile visual review results
```

## Before Launch

Replace the bracketed staging content in `src/data/funnel.ts` with approved Asta Build data. The production launch checklist requires: a brand asset and approved visual tokens; valid offer, eligibility, and service-area copy; named funnel steps or a real form endpoint; a separate thank-you route; approved customer proof with source records; privacy, terms, SMS, and consent wording; valid CTA destination; form validation and bot protection; and approved browser/server tracking configuration.

The project ships `noindex, nofollow, noarchive` metadata on the paid route and disallows `/lp/` in `robots.txt`. Remove or revise these controls only after the final paid-traffic strategy is approved.

## Performance Position

The route is static Astro HTML and one local CSS stylesheet. It uses no web fonts, trackers, embeds, external images, carousels, icon packages, or hydrated UI components. Approved production images should be locally optimized with explicit dimensions and lazy loading below the fold. Third-party video should remain user-initiated.
