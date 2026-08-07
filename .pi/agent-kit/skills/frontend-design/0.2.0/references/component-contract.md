# Component contract

A reusable component is a behavioral and visual contract, not merely extracted
markup. Define enough of the contract to prevent consumers from reconstructing
its rules at every call site.

## Required record

For each new or materially changed reusable component, document:

1. **Purpose:** user need, surface roles, and when not to use it.
2. **Anatomy:** named visible and semantic parts, content slots, native element
   or role, accessible-name source, and state owner.
3. **API:** props/inputs, events, slots/children, defaults, dependencies,
   invalid combinations, and ownership of controlled state.
4. **Variants:** authored configurations such as emphasis, size, intent, or
   layout. Keep the set finite and meaningful.
5. **States:** dynamic conditions such as hover, focus, pressed, selected,
   expanded, loading, empty, error, success, disabled, read-only, or waiting.
6. **Tokens:** semantic and component tokens consumed, local exceptions, theme
   mappings, and density behavior.
7. **Content:** required and optional content, length/format constraints,
   wrapping, truncation, missing-media behavior, and localization assumptions.
8. **Responsive behavior:** available-space thresholds, recomposition, source
   order, touch targets, and overflow policy.
9. **Semantics and interaction:** native affordance, keyboard/pointer behavior,
   focus movement, announcements, and status ownership. Accessibility review
   owns conformance.
10. **Evidence:** stories/examples, tests, rendered checks, known limitations,
    and unverified environments.

## Variants versus states

A variant is selected by the author or consumer; a state changes during use or
from data. Do not encode every state as a visual variant, and do not create a
variant prop to bypass an undefined state machine. Name mutually exclusive and
combinable dimensions explicitly.

Watch the combinatorial surface. A component with four sizes, five intents,
three densities, two themes, and seven states does not need a bespoke style for
every combination, but each supported combination needs deterministic rules.
Remove impossible combinations at the API boundary.

## Token ownership

Start with semantic tokens. Add component tokens only when the component needs a
stable override boundary or a decision that should vary independently from the
shared semantic role. Component tokens should usually alias semantic tokens.
Avoid copying foundation values into component-local variables.

The parent layout owns external `gap`, alignment, and placement. The component
owns internal padding, anatomy, and state visuals. Document any exception, such
as a full-bleed component that deliberately participates in page-grid tracks.

## State matrix

Build a matrix appropriate to the component rather than applying every possible
state mechanically:

| Dimension | Representative checks |
| --- | --- |
| Interaction | rest, hover, focus-visible, active/pressed, selected/open |
| Availability | enabled, disabled, read-only, permission-limited |
| Data | empty, loading/waiting, error, success, partial/stale |
| Content | short, long, missing optional media, translated/user content |
| Environment | narrow/wide container, theme, density, reduced motion |
| Lifecycle | initial, interrupted, repeated, dismissed, remounted |

Implementation must cover relevant branches, but browser and accessibility
verification must exercise actual behavior.

## Documentation and stories

Use the project's existing component-documentation surface. If Storybook or an
equivalent tool is already present, add deterministic named stories for the
contract's important variants and states, then use its existing interaction and
visual test facilities. Generated prop tables do not replace authored anatomy,
content, responsive, and semantic guidance.

If no component workshop exists, use the repository's established docs and test
harness. Do not install Storybook, Chromatic, a browser runner, or a package as
part of this skill.

## Component boundary tests

Before extracting or expanding a component, ask:

- Does it express a repeated user or system concept rather than repeated tags?
- Can its purpose and state ownership be named?
- Are its variations bounded, or is it becoming a page-layout switchboard?
- Does reuse reduce drift without hiding product-specific meaning?
- Is the shared API less complex than the duplicated local implementations?

Prefer local composition over an all-purpose component with dozens of unrelated
boolean props.

## Change discipline

When changing an established component:

- inventory consumers and serialized/analytics hooks;
- separate visual change from behavior or API change;
- preserve compatibility or provide a documented migration;
- update contract, examples, tokens, and tests together;
- report affected combinations and consumers not inspected.
