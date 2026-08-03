---
name: tdd
description: Implement an approved feature or bug fix test-first. Use when Builder has explicit acceptance criteria and test seams and should work in small red-green slices without changing product or architecture scope.
---

# Test-driven development

Use a red-to-green feedback loop to implement one approved behavior at a time.

## Before the first test

1. Read the approved brief, acceptance criteria, repository guidance, domain
   language, ADRs, and nearby tests.
2. Identify the public seams named in the brief. If the brief does not settle
   the seam or expected behavior, stop and return the smallest missing decision
   to the parent. Do not choose material architecture or ask the user directly.
3. Choose the narrowest test command that exercises the next behavior.

## Loop

For each vertical slice:

1. Write one behavior-focused test through an approved public seam.
2. Run it and capture the expected failure. A test that starts green does not
   prove the new behavior.
3. Write only enough production code to make that test pass.
4. Run the narrow test again, then the nearest relevant suite.
5. Remove duplication or clarify names only when the change preserves the
   approved interface and behavior. Keep structural redesign out of the loop.
6. Continue with the next independently useful slice.

Read [references/test-quality.md](references/test-quality.md) before adding or
changing tests. Read [references/mocking.md](references/mocking.md) whenever a
test needs a substitute.

## Completion

- Run the focused tests, relevant type/static checks, and the proportionate
  broader suite.
- Inspect the diff for speculative behavior, implementation-coupled tests, and
  unrelated edits.
- Report commands and results, deviations, remaining risks, and the evidence
  Reviewer should inspect.

## Boundaries

- Do not change unapproved seams, acceptance criteria, or product behavior.
- Do not write all tests first; keep one red-green vertical slice at a time.
- Do not commit, push, open a PR, deploy, or claim independent approval.
