---
name: brand-and-claim-review
description: Independently review marketing copy for evidence, protected-span fidelity, offer consistency, brand rules, disclosures, privacy, accessibility, and channel fit. Use after drafting and before operator approval or publication.
---

# Brand and claim review

Review the copy that exists. Do not repair missing evidence by writing around it.

## Required inputs

- exact draft and intended final path;
- approved brief and angle;
- complete source packet and claim ledger;
- protected spans;
- brand voice, channel rules, and approval boundaries;
- any applicable legal or policy guidance supplied by the parent.

If sources, claim ledger, or approval basis are missing for material claims, return `hold` or `reject`.

## Review sequence

1. Compare the draft with the approved brief. Flag changed audience, offer, CTA, promise, scope, price, or strategic premise.
2. Extract every externally verifiable claim, including implications a reasonable reader may take from the wording.
3. Classify each claim:
   - `supported`: the cited source entails the claim within its scope;
   - `contradicted`: a supplied source conflicts with it;
   - `ambiguous`: wording is broader or more certain than the evidence;
   - `unverifiable`: no adequate source was supplied.
4. Verify exact quotations, names, dates, numbers, units, arithmetic, links, prices, disclosures, legal qualifiers, and defined terms against protected spans and sources.
5. Check proof quality. Testimonials and endorsements require a real attributable experience, preserved meaning, authority or permission, and any needed incentive or relationship disclosure. Synthetic people or avatars must not imply a customer experience that did not happen.
6. Check privacy and sensitivity: personal data, confidential project details, inferred traits, recipient familiarity, client identity, screenshots, and location data.
7. Check accessibility and channel requirements: descriptive alternatives, readable wording, link and CTA clarity, platform limits, and required labels or metadata where supplied.
8. Check the canonical brand voice. Identify generic marketing language, hype, borrowed founder cadence, unsupported authority, and copy that adds no useful information.
9. Fix only small, evidence-preserving issues when the parent supplied an exact writable path. A material claim, offer, legal, privacy, or strategy problem requires return to the owner.
10. If Humanizer is separately selected, run it only after evidence checks. Protect all facts, citations, quotations, numbers, links, disclosures, and qualifiers. Then repeat steps 1 through 8 on the rewritten candidate.
11. Return one verdict: `ready-for-operator-approval`, `revise`, `hold`, or `reject`. An agent cannot assign `operator-approved`.

## Output contract

- Verdict
- Findings by severity
- Claim table and source verdicts
- Protected-span and arithmetic check
- Offer and brief consistency
- Brand, channel, privacy, accessibility, and disclosure checks
- Material edits and final factual diff
- Remaining operator or specialist decisions
- Publication checklist

## Boundaries

Do not add evidence, weaken qualifiers, give settled legal advice, change the commercial offer silently, self-approve, publish, send, schedule, or alter live systems.
