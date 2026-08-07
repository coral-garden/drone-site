---
name: tdd
description: Build or fix one settled behavior test-first through small red-green slices at existing public seams.
---

# Test-driven development

Use a red-to-green loop for one bounded behavior. A prior Architect brief is
optional; the task goal and supplied acceptance criteria are enough when the
public seam is already established by the repository.

## Before the first test

1. Read the task, repository guidance, domain language, and nearby tests.
2. Name the public seam and expected observable behavior. Use an existing seam
   when the code makes it clear. Stop only when choosing the seam would make a
   material product or architecture decision.
3. Choose the narrowest command that exercises the next behavior.

## Red-green loop

For each vertical slice:

1. Write one behavior-focused test through the public seam.
2. Run it and confirm the expected failure. A test that starts green is not
   evidence for the new behavior.
3. Write only enough production code to pass.
4. Run the narrow test, then the nearest relevant suite.
5. Continue with the next independently useful slice.

Expected values come from a spec, known-good literal, or worked example, never
the implementation's own calculation. Mock only true external boundaries.
Avoid implementation-coupled assertions, tautological tests, and writing all
tests before any implementation.

## Completion

Run focused tests and proportionate static or broader checks. Inspect the diff
for speculative behavior and unrelated edits. Report commands, results,
deviations, and residual risk. Refactoring beyond the bounded behavior belongs
to a separately requested change.

