---
name: motion
description: Implement or review animation with an already-installed Motion-family dependency. Use for Motion in React, Vue, or vanilla JavaScript, including presence, gestures, layout, scroll, reduced motion, lifecycle, and performance choices.
compatibility: Current motion, motion-v, or legacy framer-motion projects; preserve the installed package and framework.
---

# Motion

Use the Motion family already present in the repository. Do not migrate package
names or frameworks as part of an animation task.

## Boundaries

- Inspect the manifest, lockfile, installed package/version, framework, existing imports, component patterns, and checks before editing.
- If no compatible `motion`, `motion-v`, or `framer-motion` dependency is installed locally, stop and report it. Do not install or upgrade packages.
- Preserve legacy `framer-motion` imports unless migration is separately approved.
- Do not add CDN imports, Motion+ or AI products, remote assets, examples, fonts, scripts, or dependencies.
- Prefer CSS for a small isolated transition without presence, gesture, layout, scroll, sequence, or interruption needs.

## Workflow

1. **Define the interaction.** State trigger, visual state, exit/interruption behavior, reduced-motion alternative, and ownership.
2. **Choose the runtime and smallest API.** Consult [the runtime guide](references/guide.md). React with `motion` uses `motion/react`; Vue preserves `motion-v`; vanilla JavaScript uses `motion`; legacy projects preserve `framer-motion`.
3. **Use framework-native ownership.** Reuse established components, composables, MotionValues, and lifecycle patterns. Add `AnimatePresence`, layout animation, gestures, scroll linkage, or sequences only when they solve a stated requirement.
4. **Respect reduced motion.** In React, use the application's `MotionConfig` policy or `useReducedMotion()` for a local alternative. Else use the project's existing preference mechanism. Replace large movement, scale, parallax, or autoplay with fades, static states, or non-autoplay outcomes while retaining meaning.
5. **Protect rendering performance.** Prefer transform and opacity, isolate unavoidable layout animation, use `will-change` sparingly, and profile paint-heavy properties. Treat hardware acceleration as conditional, not guaranteed.
6. **Implement one bounded slice.** Preserve semantics, focus behavior, content, and component APIs unless the approved brief changes them.
7. **Verify locally.** Run existing focused checks. Exercise entry, exit, interruption, repeat interaction, normal and reduced motion, and cleanup. Record browser/profiling gaps.
8. **Hand off honestly.** Report package/import form, Motion APIs, animated properties, reduced-motion behavior, checks run, and remaining browser or low-powered-device verification.

Do not claim accessibility, frame rate, hardware acceleration, or browser
compatibility without measured project evidence.
