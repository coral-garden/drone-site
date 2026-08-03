---
name: codebase-design
description: Design or assess a module interface inside an already approved change. Use when Architect must choose a seam, reduce an interface, improve testability, or compare bounded structural options without editing code or expanding product scope.
---

# Codebase design

Design a deep module: substantial behavior behind a small interface, at a clean
seam that callers and tests can both use.

## Process

1. Read the approved task, applicable repository guidance, domain language,
   ADRs, and the code on both sides of the proposed seam.
2. State the constraints the interface must satisfy. Separate verified facts
   from assumptions and unresolved product decisions.
3. Describe the interface completely: entry points, parameters, results,
   invariants, ordering, error modes, configuration, and material performance
   characteristics.
4. Apply the deletion test: if removing the module merely removes indirection,
   it is shallow; if complexity spreads back into callers, it is earning its
   place.
5. Check that tests can exercise behavior through the same interface callers
   use. Do not expose implementation details solely for tests.
6. Classify dependencies and choose the smallest justified seam. Read
   [references/deepening.md](references/deepening.md) when dependencies or
   adapters affect the design.
7. When the interface is consequential, compare at least two materially
   different options yourself. Recommend one using depth, locality, testability,
   compatibility, and migration cost.
8. Return the recommendation with repository evidence, affected interfaces,
   trade-offs, tests, risks, and any decision the parent must make.

Use the canonical vocabulary in
[references/vocabulary.md](references/vocabulary.md).

## Boundaries

- Stay read-only. Do not edit files, implement, commit, or deploy.
- Do not spawn nested agents; the parent owns delegation.
- Do not turn a bounded change into an architecture programme.
- Do not invent product behavior to make an interface convenient.
- Escalate when the task needs a product decision, destructive migration, or a
  seam that conflicts with an accepted ADR.
