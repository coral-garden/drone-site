# Technical frontend preflight

Use this as a final challenge, not as evidence that the page has been rendered,
accessibility-tested, or performance-profiled.

## Design Read

- Change class, surface, scope, preservation rules, and source of truth are
  explicit.
- Variance, motion, and density are evidence-based and independently chosen.
- Any low-confidence decision that materially changes implementation is exposed.

## Tokens and modes

- Reusable decisions use the incumbent token system; one-offs have not been
  prematurely abstracted.
- Foundation, semantic, and component layers have clear ownership and alias
  direction.
- Token types, transformed names, references, modes, and generated outputs are
  valid for the installed toolchain; no cycle or collision is known.
- Theme and mode values preserve semantic roles.
- New literals and exceptions are intentional and documented.
- Deprecated values identify migration or compatibility status.

## Style guide and components

- Documentation names canonical source files and describes implemented truth.
- New primitives and components define purpose, anatomy, API, variants, states,
  tokens, content limits, responsive behavior, and known gaps.
- Parent layouts own placement and spacing; components own internal anatomy.
- Variant/state combinations remain bounded and deterministic.

## Composition

- Semantic source order survives a single-column reading.
- Containers, tracks, alignment anchors, spacing rhythm, and type measure have
  stated reasons.
- Repeated section or card patterns correspond to repeated information roles.
- Wide, intermediate, and narrow arrangements are explicit where they differ.
- Missing media, long content, empty/error states, and overflow have outcomes.
- The result contains at least one choice that belongs specifically to this
  product rather than a generic template.

## Implementation integrity

- Existing routes, copy, semantics, native behavior, component APIs, analytics
  hooks, and legal content remain intact unless explicitly changed.
- No dependency, remote asset, font, generated image, or network action was
  introduced without separate approval.
- No fake dashboard, chart, status, testimonial, metric, control, or product
  behavior was added.
- Motion requirements are handed to the correct runtime skill and include a
  reduced-motion outcome.

## Evidence boundary

- Existing focused checks were run and exact results recorded.
- Coded responsive branches are not reported as browser-tested.
- Visual judgment is not reported as accessibility, usability, conversion,
  performance, or cross-browser evidence.
- Accessibility, browser, screenshot, assistive-technology, performance, and
  low-powered-device checks still required are listed explicitly.

## Handoff

Report:

1. Design Read and dials;
2. system source of truth and action taken;
3. tokens, modes, style guide, primitives, and components changed;
4. composition, responsive, content, and state decisions;
5. exceptions, compatibility, and migration debt;
6. files changed and checks run;
7. unverified claims and next evidence owner.
