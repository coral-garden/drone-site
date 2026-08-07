# Design Read and dials

Turn the brief and incumbent product into explicit design controls before
choosing CSS values or component shapes.

## Design Read

Record:

- **User and task:** who uses this surface, what they need to understand or do,
  and the primary success path.
- **Surface:** marketing, editorial, commerce, product/operational,
  documentation, or another evidenced category.
- **Change class:** greenfield, extension, refinement, migration, or replacement.
- **Incumbent language:** typography, color roles, spacing rhythm, geometry,
  imagery, iconography, density, interaction, and recurring composition.
- **Source of truth:** files or tools that currently govern each system decision.
- **Preserve:** routes, content, semantics, brand marks, tokens, components,
  interaction patterns, analytics hooks, legal text, and recognizable product
  behavior that are outside the approved change.
- **Direction:** one sentence describing the intended visual and structural
  change in product terms rather than aesthetic slogans.
- **Unknowns:** only decisions that can materially fork the implementation.

Ask at most one focused question when the evidence supports multiple materially
different directions. For refinement, infer from the incumbent system rather
than asking the user to restate what the repository already shows.

## Three independent dials

Use integer values from 1 to 10. Infer them from the brief and product evidence;
do not adopt another project's defaults. Record a short reason and confidence
for each. Dials may be documented in the Design Read without becoming runtime
tokens.

### Design variance

Controls geometry and regularity, not quality.

- **1–3:** restrained symmetry, repeated alignment, regular tracks, predictable
  rhythm, minimal overlap.
- **4–7:** controlled offsets, mixed proportions, selected alignment changes,
  varied section families, and occasional overlap with clear hierarchy.
- **8–10:** expressive asymmetry, strong scale contrast, irregular tracks,
  deliberate voids, layered media, and high compositional contrast.

High variance never authorizes visual reordering that breaks source, reading, or
focus order. Narrow layouts usually need lower effective variance even when the
wide composition is expressive.

### Motion intensity

Controls temporal behavior; the frontend-design skill only defines the need.

- **1–3:** static presentation plus immediate state feedback and small CSS
  transitions where already appropriate.
- **4–7:** purposeful entry, exit, presence, layout, or continuity transitions.
- **8–10:** choreographed storytelling, scroll-linked sequences, or spatial
  transitions requiring a dedicated animation plan and capability.

A stated level above 3 must identify motion purpose and reduced-motion outcome.
If no approved runtime is present, lower the implementation scope or hand off;
do not install one.

### Visual density

Controls information and spatial compression, not font size alone.

- **1–3:** gallery-like pacing, few simultaneous decisions, generous grouping.
- **4–7:** balanced application or content density with visible hierarchy.
- **8–10:** compact operational presentation, shorter spacing steps, explicit
  grouping, and minimal decorative enclosure.

Density can vary by region. Dense controls or data clusters still need larger
separations between conceptual groups.

## Calibration by surface

- **Marketing and portfolio:** variance may be higher, but product truth,
  conversion hierarchy, actual assets, and readable copy remain constraints.
- **Editorial and documentation:** typography, measure, sequence, navigation,
  and long-content resilience dominate decorative novelty.
- **Product and operational:** state clarity, scanability, repeated behavior,
  information hierarchy, and density control dominate section variety.
- **Commerce:** product evidence, comparison, trust, pricing truth, and purchase
  path dominate atmospheric styling.

Dials are diagnostic controls, not a reason to force one surface into another's
visual grammar.

## Decision record

Use a compact form:

```text
Design Read: <user, task, surface, change, incumbent language, direction>
Variance: N/10 — <evidence>; confidence <high|medium|low>
Motion: N/10 — <purpose/evidence>; reduced-motion outcome <...>
Density: N/10 — <evidence>; regional exception <...>
Preserve: <system and product contracts>
Unknown: <material unresolved decision or none>
```
