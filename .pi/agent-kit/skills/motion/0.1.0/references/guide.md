# Motion runtime guide

Use the locally installed package and types as the final API authority.

## Preserve the installed runtime

- React with current `motion`: import from `motion/react`.
- Vanilla JavaScript with current `motion`: import functions from `motion`.
- Vue: preserve `motion-v` and existing Vue/Nuxt integration.
- Legacy React with `framer-motion`: keep its working imports unless migration is explicitly approved.

## Selection prompts

- **Simple isolated hover/focus transition:** CSS first.
- **React/Vue state animation:** framework motion component.
- **Removed children with exit behavior:** presence support.
- **Position/size/order transition:** `layout`; shared transitions use `layoutId` only when identity is intentional.
- **Hover, tap/press, focus, drag:** matching gesture API with semantic/native behavior preserved.
- **Scroll-triggered state:** in-view API; **scroll-linked state:** scroll MotionValues.
- **Vanilla DOM/SVG/object animation:** `animate()` and the smallest related helper.

## Reduced motion

For React, application policy can use `MotionConfig reducedMotion="user"`; local
choices can use `useReducedMotion()`. Preserve useful state feedback while
reducing transform/layout movement, scale, parallax, and autoplay behavior.

## Performance

Transform and opacity are the safest general choices. Layout, paint-heavy
values, shadows, radii, filters, clip paths, and layer promotion require browser
profiling. Independent transform values can have different acceleration
characteristics from a complete transform string; change representation only
when profiling shows a real need.

Official references:

- https://motion.dev/docs
- https://motion.dev/docs/react
- https://motion.dev/docs/quick-start
- https://motion.dev/docs/vue
- https://motion.dev/docs/react-accessibility
- https://motion.dev/docs/performance
