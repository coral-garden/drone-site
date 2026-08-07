# Anime.js V4 guide

Use the locally installed package and types as the final API authority.

## Canonical V4 surfaces

- Main named imports: `animate`, `createTimeline`, `stagger`, `createScope` from `animejs`.
- Granular subpaths exist for animation, timeline, timer, animatable, draggable, layout, scope, engine, events, easings, utilities, SVG, text, and WAAPI. Preserve the project's existing bundling convention.
- React ownership: create a Scope inside the existing effect lifecycle, bind it to a component root, and call `revert()` on cleanup.
- Scope can contain selectors, defaults, registered methods, media-query matches, and owned instances.

## Selection prompts

- **Simple isolated state change:** CSS first.
- **General CSS/SVG/attribute/object animation:** `animate()`.
- **Coordinated sequence:** `createTimeline()`.
- **Per-target delay:** `stagger()`.
- **Interactive value updates:** animatable APIs.
- **Drag or layout behavior:** specialized APIs only when explicitly required.
- **Heavy orchestration, many targets, Canvas/WebGL/WebGPU, callbacks:** JavaScript engine.
- **Supported CSS animation under main-thread load:** consider WAAPI and verify behavior.

## Reduced motion and performance

Provide a no-motion or reduced-distance/duration branch that preserves the
interaction result. Prefer transform and opacity where the design permits;
profile layout/paint-heavy properties and large target sets rather than making
performance claims from API choice alone.

Official references:

- https://animejs.com/documentation/
- https://animejs.com/documentation/getting-started/module-imports/
- https://animejs.com/documentation/getting-started/using-with-react/
- https://animejs.com/documentation/scope/
- https://animejs.com/documentation/web-animation-api/when-to-use-waapi/
