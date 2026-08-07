# Composition system

Composition defines relationships across source order, containers, tracks,
spacing, type, media, and content. Avoid treating a sequence of component
patterns as a page system.

## Composition contract

For each page or major region record:

- semantic purpose and source order;
- page shell and maximum readable or operational width;
- outer gutters and major tracks;
- section or region family;
- content measure and media role;
- alignment anchors and spacing relationships;
- design variance and local density;
- wide, intermediate, and narrow arrangements;
- content conditions that trigger recomposition;
- interaction and motion requirement, if any;
- empty, missing-media, long-content, and localization behavior.

Use layout names as implementation vocabulary, not as aesthetic ends: stack,
cluster, split, sidebar, switcher, grid, frame, reel, cover, and layered region.
Reuse a primitive when its contract matches; do not force unlike content into one
primitive for superficial consistency.

## Source and visual order

Start from a document order that remains understandable in a single column.
Grid placement, flex order, absolute positioning, dense packing, or masonry-like
layouts must not make reading or focus order incoherent. Preserve DOM proximity
for content that depends on a heading, control, caption, or status.

## Page and component containers

Separate page-level and component-level adaptation:

- page containers own outer gutters, maximum width, page tracks, and broad
  chrome;
- region containers own local arrangements such as content/media splits;
- component containers own recomposition based on their actual available inline
  size when the incumbent browser and build support permit it.

Use viewport media queries for page or environmental conditions and container
queries for reusable local composition where already supported. Provide a
stable fallback before progressive enhancement. Set thresholds where content or
interaction fails, not from a generic device taxonomy.

## Grid and rhythm

- Use Grid for two-dimensional alignment and Flexbox or normal flow for
  one-dimensional distribution.
- Define tracks from content priorities. Equal fractions are appropriate only
  when items have equal roles.
- Use `gap` on parent layouts for inter-component relationships; avoid margins
  that make a component responsible for its placement everywhere.
- Align repeated regions to shared anchors where coherence matters, then use
  deliberate departures for hierarchy.
- Prefer a bounded spacing scale. Micro, component, group, section, and page
  separations should be distinguishable without arbitrary values at every call
  site.
- Use logical inline/block properties where writing direction or mode may vary.

Experimental masonry or grid-lane behavior is progressive enhancement, not a
baseline. Keep an ordinary-flow or stable-grid fallback and verify that visual
placement does not contradict sequence.

## Typography as composition

- Define display, heading, body, supporting, label, and data roles only when the
  product uses them.
- Pair type size with line height, weight, measure, wrapping, and surrounding
  space. A size token alone is not a type system.
- Constrain sustained reading measure; permit wider measures for data,
  navigation, code, or short display copy when the role warrants it.
- Test real long and short content. Do not edit factual or legal content merely
  to preserve a preferred wrap.
- Fluid type and spacing need bounded minimum and maximum outcomes and should
  follow the incumbent technology. Avoid formulas whose intermediate behavior
  has not been inspected.

## Dial-to-composition mapping

- Higher **variance** may change track proportions, alignment, scale contrast,
  whitespace distribution, and section family. It does not justify random
  offsets or fragile absolute positioning.
- Higher **density** shortens spacing relationships and increases simultaneous
  information, while preserving larger separations between conceptual groups.
  It does not mean shrinking all text or enclosing everything in cards.
- Higher **motion** can change how states or sections transition, but temporal
  implementation belongs to a dedicated animation capability and must have a
  reduced-motion result.

For narrow arrangements, lower effective variance and reduce nonessential
motion before sacrificing source order, content, or control clarity.

## Repetition diagnostics

Repetition is a defect only when structure and content roles do not justify it.
Check for:

- consecutive sections with interchangeable centered heading plus card-grid
  anatomy;
- repeated equal columns for unequal information;
- alternating split layouts that create rhythm without hierarchy;
- every datum or action enclosed in the same card treatment;
- repeated calls to action that erase priority;
- empty grid cells, decorative browser/device chrome, or fake operational UI;
- unique borders, radii, shadows, or spacing values with no system reason.

When repetition is accidental, change the information architecture or
composition family before adding decorative effects. When it expresses an
operational pattern or established system, preserve it.

## Responsive and content resilience

Define at least wide, intermediate, and narrow behavior when the composition
actually changes. For each transition specify:

- track and item order;
- navigation and control behavior;
- media crop, ratio, and optional-media fallback;
- text measure and wrapping;
- tables, overlays, forms, long lists, and dense-control behavior;
- touch/keyboard implications introduced by recomposition;
- whether decoration or motion is removed.

Exercise minimum, typical, and maximum supported content; missing optional
media; long unbroken text; translated or user-generated content where relevant;
and simultaneous open/error states. Dedicated browser and accessibility checks
must still verify the rendered result.
