---
name: frontend-design
description: Design, implement, refine, or document production web frontends and their design systems. Use for design tokens, style guides, component contracts, composition, visual hierarchy, typography, spacing, color, density, responsive adaptation, and intentional redesign. Preserve the incumbent product and route animation implementation, accessibility conformance, and browser verification to dedicated capabilities.
license: Proprietary; see LICENSE
compatibility: Framework-neutral web frontends. Uses the repository's existing styling system and approved tools; adds no dependency or runtime.
---

# Frontend design

Own both the visual result and the design-system decisions that make it
repeatable. Produce a coherent interface, explicit tokens and component
contracts where warranted, and implementation that belongs to the product.

## Boundaries

This skill owns visual direction, design-system engineering, composition, and
frontend implementation. It does not own:

- animation-library implementation; use the project's approved Motion, Anime.js,
  CSS, or other animation capability after defining the motion requirement;
- accessibility conformance or assistive-technology claims;
- browser, responsive, performance, or visual-regression verification;
- product strategy, factual copy, backend behavior, or analytics decisions;
- installation of packages, fonts, assets, design tools, or browser tooling.

Do not invent a design system merely to satisfy this workflow. Extend the
repository's existing source of truth unless replacement or migration is
explicitly approved.

## Workflow

1. **Inventory the incumbent system.** Read project instructions, the brief,
   rendered-surface code, global styles, token/config files, component
   primitives, package and lock files, representative screens, and existing
   design documentation. Identify which artifact actually wins when values
   conflict.
2. **Classify the work.** State whether it is greenfield, extension, refinement,
   migration, or replacement; identify the surface type; and name the routes,
   components, states, and viewports in scope.
3. **Write the Design Read.** Use
   [design-read-and-dials.md](references/design-read-and-dials.md). Record the
   user, task, product character, preservation constraints, and inferred
   variance, motion, and density. Dials express intent; they are not universal
   defaults or mandatory CSS variables.
4. **Choose the system action.** Decide whether to reuse, extend, normalize,
   migrate, or create tokens and primitives. Read
   [tokens-and-style-guide.md](references/tokens-and-style-guide.md). Prefer the
   smallest system change that supports the complete slice and its foreseeable
   reuse.
5. **Gate unsafe or mixed briefs before editing.** If any requested action would
   fabricate product truth, weaken accessibility, discard a deliberate design
   system without authority, use unapproved licensed or remote material,
   install a dependency, access the network, or exceed redesign scope, separate
   the blocked requests from a complete safe scope and obtain approval before
   editing. Do not treat a general aesthetic goal as authority for the safe
   fragments of an otherwise mixed brief.
6. **Define the composition contract.** Use
   [composition.md](references/composition.md). Establish source order, page
   shell, containers, tracks, rhythm, typographic measure, section families,
   narrow-width recomposition, and content-resilience behavior before styling
   individual elements.
7. **Define component contracts.** For every new or materially changed reusable
   component, apply
   [component-contract.md](references/component-contract.md): purpose, anatomy,
   variants, states, token dependencies, content limits, responsive behavior,
   semantics, and evidence still required.
8. **Implement the smallest complete slice.** Keep routes, content, behavior,
   semantics, native affordances, analytics hooks, and shared APIs intact unless
   the approved task changes them. Implement system decisions in the project's
   incumbent technology rather than translating it to a preferred framework.
9. **Cover actual states and content.** Handle relevant empty, loading, error,
   success, focused, open, disabled, selected, narrow, wide, short-content, and
   long-content outcomes. A coded branch is implementation coverage, not proof
   that it rendered correctly.
10. **Run the technical preflight.** Read
    [preflight.md](references/preflight.md). Resolve token drift, undocumented
    exceptions, accidental composition repetition, component inconsistencies,
    and obvious content breakage. Then run only the repository checks already
    approved for the task.
11. **Hand off honestly.** Report the Design Read; system action; token,
    primitive, component, and style-guide changes; composition and responsive
    contracts; files changed; checks run; and unresolved accessibility,
    browser, visual, motion, and performance work.

## System invariants

- One canonical value source per concern. Generated artifacts are outputs, not
  competing sources of truth.
- Name reusable values by role or documented scale position, not by the first
  page that happened to use them.
- Preserve alias direction from lower-level values toward semantic and component
  decisions; detect cycles and avoid aliases that conceal ownership.
- Parent layouts own inter-component spacing. Components own internal anatomy.
- Visual order must not make semantic, reading, or focus order incoherent.
- Responsive thresholds follow content failure and available space, not an
  unexamined device list.
- Variants are authored configurations; states are dynamic conditions. Do not
  multiply one to compensate for a missing definition of the other.
- Style guides describe implemented truth. Do not document an aspirational
  system as though the repository already conforms to it.
- Subjective visual choices do not become accessibility, usability,
  performance, or conversion claims without dedicated evidence.

## Completion contract

Return:

- the Design Read and three dials with evidence or uncertainty;
- incumbent system source of truth and chosen reuse/extend/migrate/create action;
- changed tokens, aliases, themes, primitives, components, and documentation;
- composition, responsive, state, and content-resilience decisions;
- deliberate exceptions and migration compatibility retained;
- checks actually run and their results;
- explicit animation, accessibility, browser, responsive, visual-regression,
  and performance follow-up still required.
