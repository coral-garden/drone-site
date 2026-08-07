# Tokens and style guides

Treat tokens as a typed decision graph and the style guide as documentation of
implemented truth. Do not create layers, files, or generators that the project
does not need.

## 1. Find the source of truth

Inventory, in precedence order:

- design-token files or design-tool exports;
- CSS custom properties, Sass/Less maps, Tailwind theme/config, CSS-in-JS theme,
  framework presets, and generated platform artifacts;
- shared primitives and component-local variables;
- style-guide or Storybook documentation;
- repeated literals and one-off exceptions.

Identify which file wins at build time, which files are generated, and whether
documentation matches the implementation. Never edit a generated artifact when
the generator source is available.

Choose one action:

- **Reuse:** the system already expresses the needed decision.
- **Extend:** add a durable role, scale step, mode, primitive, or component token.
- **Normalize:** replace accidental duplicates without changing the visual
  contract.
- **Migrate:** move consumers between documented systems while preserving
  compatibility.
- **Create:** establish a minimum system for greenfield work with evidenced reuse.

## 2. Token architecture

Use only as many layers as the system can explain and govern.

- **Foundation tokens** hold reusable raw scales or brand values: color ramps,
  spacing steps, type values, dimensions, radii, and other building blocks.
- **Semantic tokens** name purpose: text, surface, border, action, status, focus,
  spacing relationship, or typographic role. They normally alias foundations.
- **Component tokens** name a stable component decision when a shared semantic
  token cannot express it without coupling unrelated consumers.

These layer names are industry conventions, not DTCG requirements. Small
projects may need only semantic custom properties. Do not create component
tokens for every declaration or expose raw foundations throughout application
code when semantic meaning exists.

Token categories to consider only when used include:

- color and opacity roles;
- typography families, weights, sizes, line heights, tracking, and measures;
- spacing, sizing, gutters, containers, and control density;
- radii, borders, strokes, shadows, and elevation;
- breakpoints or composition thresholds;
- icon and media sizes or aspect policies;
- duration and easing decisions for the separate motion layer;
- z-index or layering roles with a documented ownership model.

## 3. Names, aliases, and modes

- Use stable, product-relevant names. Prefer `color.text.muted` over
  `gray-500` at consumption sites and over names tied to one page.
- Preserve one direction of dependency: foundation → semantic → component →
  implementation. Avoid cycles and cross-component aliases.
- Use complete paths or a project prefix where generated names could collide.
- Keep themes and modes semantic. A dark mode changes role values; it should not
  require every component to choose an unrelated dark literal.
- Model theme, brand, density, contrast, or platform as independent modifiers
  where possible. Record precedence when they intentionally overlap.
- Deprecate before removal. Keep a compatibility alias or migration window when
  consumers cannot move atomically, and name the replacement.

## 4. DTCG interoperability

The Design Tokens Community Group Format, Color, and Resolver Modules 2025.10
are stable Community Group reports intended for implementation, but they are
not W3C Standards. Use them only when interchange, generation, or the project's
existing architecture warrants a portable token source.

For a DTCG-formatted source:

- tokens have `$value` and an unambiguous `$type`, inherited or explicit;
- groups organize tokens and may carry type, description, extension,
  deprecation, and inheritance metadata;
- aliases use token references and must resolve without cycles or type conflict;
- composites represent one structured decision such as typography, border,
  shadow, transition, or gradient; groups are not composites;
- unknown namespaced `$extensions` survive round trips;
- `$deprecated` records lifecycle and should identify a replacement where
  practical;
- alternate contexts use the Resolver's ordered sets and modifiers, with alias
  resolution after the selected sources are composed.

Do not claim DTCG conformance from a JSON-like shape. Validate against the exact
2025.10 rules and the features supported by the project's toolchain. Style
Dictionary and other exporters may support only a subset; inspect the installed
version and generated output rather than assuming parity.

## 5. CSS runtime delivery

CSS custom properties are one delivery target, not the portable source format.

- Emit complete CSS values, including required units. `var(--space)px` is not a
  safe substitute for a typed length.
- Account for cascade, inheritance, scope, fallback, and invalid-at-computed-
  value behavior. A parsed declaration can still become invalid after `var()`
  substitution.
- Detect custom-property cycles and transformed-name collisions.
- Put global semantic roles at the appropriate root or theme scope; keep local
  component tokens at the narrowest stable owner.
- Use `[data-theme]`, classes, media queries, or framework context according to
  existing project policy. Token standards do not mandate a selector strategy.
- Consider `@property` registration only when its type, inheritance, initial
  value, or interpolation contract is useful and supported. It changes runtime
  behavior; it is not documentation sugar.

## 6. Style-guide contract

Extend the repository's established documentation surface. Do not install
Storybook or another documentation tool. A useful guide records:

1. purpose, audience, owner, status, and canonical source files;
2. product principles and the current Design Read or allowed dial ranges;
3. token layers, naming, alias direction, modes, and generated outputs;
4. color roles and mode mappings, not only swatches;
5. typography roles, scale, measure, wrapping, and content examples;
6. spacing rhythm, density behavior, containers, grids, and composition
   primitives;
7. radii, borders, shadows, icons, imagery, and motion policy;
8. component anatomy, variants, states, content constraints, and responsive
   behavior;
9. usage, non-usage, deliberate exceptions, and known gaps;
10. contribution, review, deprecation, migration, and release expectations.

Generated API tables or token swatches are starting points, not a complete style
guide. Authored rationale and behavior must remain linked to implemented values.

## 7. Migration and validation

Before changing consumers:

- inventory references and generated artifacts;
- define old-to-new mappings and breaking changes;
- preserve compatibility where an atomic migration is unsafe;
- validate types, references, cycles, modes, and output-name uniqueness;
- compare resolved values for every supported mode;
- diff generated artifacts and representative rendered surfaces;
- update documentation and mark deprecated paths;
- report consumers not migrated and the planned removal condition.

Value reuse alone does not justify a token. A token is warranted when it
expresses a decision, relationship, contract, or governed scale.
