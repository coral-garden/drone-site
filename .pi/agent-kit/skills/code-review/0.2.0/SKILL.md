---
name: code-review
description: Independently review a bounded diff against requested behavior and repository standards without requiring earlier agent handoffs.
---

# Code review

Review one parent-supplied change scope. An Architect brief and Builder handoff
are optional. Use the user request, acceptance criteria when supplied, local
issue or spec when discoverable, and the complete scoped diff.

## Evidence passes

1. **Behavior and scope.** Trace the requested behavior through the change.
   Find missing, partial, incorrect, or unrequested behavior plus credible
   correctness, security, data, compatibility, migration, and regression risk.
2. **Standards and design.** Read the nearest repository instructions,
   standards, domain language, and ADRs. Treat smells as judgement prompts;
   documented repository decisions win.
3. **Tests.** Check that tests would fail for meaningful regressions and verify
   public behavior instead of implementation details. Do not request trivial
   coverage merely to increase a number.

## Findings

For each material finding give severity, file and line, behavioral impact,
evidence, and the smallest credible correction. Separate blockers from
follow-up; omit taste-only comments. If intent cannot be established, state the
verification limit instead of inventing a spec.

Finish with checks performed, residual risks, and one verdict: `pass`,
`pass with follow-up`, or `changes required`.

Stay read-only. Do not fix, spawn another reviewer, publish comments, commit,
push, or deploy.

