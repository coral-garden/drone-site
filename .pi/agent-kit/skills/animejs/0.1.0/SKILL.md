---
name: animejs
description: Implement or review animation with the already-installed Anime.js dependency. Use for Anime.js timelines, scopes, staggering, draggable/layout behavior, SVG or object animation, cleanup, reduced motion, and engine selection.
compatibility: Anime.js V4 projects. Older majors require an explicit migration decision.
---

# Anime.js

Use Anime.js only when the repository already declares it and the requested
interaction benefits from library orchestration.

## Boundaries

- Inspect the manifest, lockfile, installed major, existing imports, framework, and component lifecycle before editing.
- If `animejs` is absent, unavailable locally, or on an incompatible major, stop and report it. Do not install or upgrade it.
- Do not add CDN imports, remote assets, examples, fonts, scripts, or packages.
- Do not change the framework, build tool, module format, styling system, router, or component architecture.
- Preserve established Anime.js import style unless a change is necessary and approved.
- Prefer CSS for a small isolated transition that needs no orchestration.

## Workflow

1. **Define the interaction.** State the trigger, targets, final state, interruption behavior, reduced-motion result, and cleanup owner.
2. **Choose the smallest API.** Consult [the API and integration guide](references/guide.md). Use `animate()` for general animation, a timeline for coordinated sequences, `stagger()` for offsets, and specialized draggable, layout, SVG, text, or object APIs only when the brief needs them.
3. **Own the lifecycle.** Scope selectors to the component or feature. In React, use the existing effect pattern with `createScope()` and call `revert()` during teardown. In other frameworks, follow their established mount/unmount lifecycle.
4. **Respect reduced motion.** Use the project's preference mechanism or an Anime.js Scope media query. Preserve meaning and final state while removing or substantially reducing nonessential movement.
5. **Choose the engine deliberately.** Keep the JavaScript engine for complex orchestration, many targets, non-DOM objects, advanced controls, or unsupported properties. Consider `waapi.animate()` only when its supported CSS surface and under-load behavior fit the task.
6. **Implement one bounded slice.** Reuse local selectors, tokens, easings, and patterns. Make repeated mount/unmount and interrupted animations safe.
7. **Verify locally.** Run existing focused checks. Inspect imports, target containment, cleanup, normal and reduced-motion outcomes, final styles, and interruption behavior.
8. **Hand off honestly.** Report APIs used, animated properties, lifecycle/cleanup, reduced-motion behavior, checks run, and browser or low-powered-device verification still required.

Do not claim accessibility, performance, or browser compatibility without the
project's dedicated evidence-producing checks.
