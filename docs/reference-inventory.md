# Asta Build Paid Funnel — Reference Inventory

## Scope

This document is the source of truth for the staging route at `/lp/asta-build/`. It records every meaningful conversion module found in the supplied Canada Drives PDF and maps each to a client-safe Asta Build implementation. The PDF is a structural reference only; its brand, people, vehicles, customer imagery, review count, financing claims, legal language, and proprietary copy are excluded.

## Reference Section Inventory

| ID | PDF page | Section / module | Visual pattern | Conversion purpose | CTA present | Decision | Planned component | Content / asset dependency | Validation condition |
|---:|---:|---|---|---|---|---|---|---|---|
| 01 | 1 | Brand context and outcome hero | Dark centered hero, compact mark, large headline, reassurance line | Establish attention and offer context | No | Adapt | `HeroAndQualifier` | Approved logo, headline, reassurance | Renders first, with `noindex` page metadata. |
| 02 | 1 | Hero media | Category visual over asymmetrical blue band | Give immediate category context | No | Adapt | `HeroAndQualifier` | Approved local image or illustration | Placeholder has no external media or copied assets. |
| 03 | 1 | Two-option qualifier | Centered question with two equal action buttons | Start segmentation with minimal friction | Yes | Adapt | `HeroAndQualifier` | Approved funnel question and named-step URLs | Controls remain disabled until real step URLs exist. |
| 04 | 1 | Supporting qualifier | Concise centered availability/eligibility line | Reduce barrier and clarify next step | No | Adapt | `HeroAndQualifier` | Approved terms and eligibility copy | No unverified rates, approval, timing, or availability claims. |
| 05 | 1 | Benefit narrative | Centered headline/body plus supporting image cluster | Explain the higher-level value | No | Adapt | `BenefitNarrative` | Approved outcome statement and local asset | Renders after qualifier with safe placeholder visual. |
| 06 | 2 | Three-step process | Three stacked numbered cards with blue headers | Make the process understandable | No | Adapt | `ProcessSteps` | Approved real workflow steps | Three cards render in order from one config file. |
| 07 | 2 | Trust/network proof | Heading, copy, six-tile customer photo mosaic | Establish social proof | No | Adapt | `ProofGrid` | Approved stories, media, rights/source records | Disabled gate renders without fake proof until approved. |
| 08 | 3 | Proof photo strip | Two customer/product images | Add credibility before objection handling | No | Adapt | `ProofGrid` | Approved media and alt text | Included in the same approval-gated proof module. |
| 09 | 3 | Comparison introduction | Centered headline/body | Acknowledge process objection | No | Adapt | `ComparisonPanel` | Approved explanation | Renders before comparison lists. |
| 10 | 3 | Existing-process friction list | Warm gradient title band and three icon rows | Name real pain points | No | Adapt | `ComparisonPanel` | Substantiated, non-absolute friction copy | Three rows render from config. |
| 11 | 3 | Proposed-process benefits list | Blue/cyan title band and three icon rows | Position process advantages | No | Adapt | `ComparisonPanel` | Approved, supportable benefits | Three rows render from config. |
| 12 | 4 | Final conversion panel | Dark bordered card with concise value statement and primary button | Repeat campaign action near closure | Yes | Build | `FinalConversion` | Valid request/first-step URL and approved CTA label | Uses the same central CTA label as the hero. |
| 13 | 4 | External review badge | Third-party logo, stars, and review count | Independent credibility | No | Explicitly Omit | None | Approved review source, terms, and count | Omitted because no approved Asta Build proof exists. |
| 14 | 4 | Legal closure | Copyright text and policy/utility links | Compliance and trust | Adapt | `FinalConversion` | Asta Build legal URLs and approved consent copy | Displays pending labels without fake links until approved. |

## Approved Route Order

1. Staging status strip
2. Brand/context hero
3. Hero media placeholder
4. Two-option qualifier and central CTA
5. Supporting qualifier
6. Benefit narrative and supporting visual placeholder
7. Three-step process
8. Approval-gated proof architecture
9. Comparison introduction
10. Current-process friction list
11. Asta Build process-benefit list
12. Final conversion panel
13. Legal/consent closure

## Required Inputs Before Launch

The route is structurally complete but **not launch-ready**. A production version requires an approved logo and brand tokens; approved offer, qualification, service-area and compliance copy; named survey step URLs or a valid request form; actual form and thank-you implementation; approved local media; source-approved customer proof; privacy, terms, and SMS links; consent wording; tracker IDs; server-side validated submission endpoint; and Meta browser/server conversion configuration.

## Reconciliation Template

| Inventory ID | Planned module | Final status | Evidence |
|---:|---|---|---|
| 01 | Hero | Complete | `HeroAndQualifier.astro`, rendered before all other modules. |
| 02 | Hero media | Complete | Static original placeholder; no reference image copied. |
| 03 | Qualifier | Complete | Two disabled staging controls in hero. |
| 04 | Supporting qualifier | Complete | Config-driven safe placeholder copy. |
| 05 | Benefit narrative | Complete | `BenefitNarrative.astro`. |
| 06 | Three-step process | Complete | `ProcessSteps.astro` renders three cards. |
| 07 | Trust/network proof | Complete with gate | `ProofGrid.astro` preserves the section without inventing proof. |
| 08 | Proof strip | Complete with gate | Preserved in the same six-slot proof architecture. |
| 09 | Comparison introduction | Complete | `ComparisonPanel.astro`. |
| 10 | Friction list | Complete | Warm comparison list. |
| 11 | Benefits list | Complete | Cool comparison list. |
| 12 | Final conversion | Complete, disabled | `FinalConversion.astro` shares the central CTA label. |
| 13 | Review badge | Explicitly omitted | No approved proof source supplied. |
| 14 | Legal closure | Complete with gate | Pending labels await real legal destinations. |
