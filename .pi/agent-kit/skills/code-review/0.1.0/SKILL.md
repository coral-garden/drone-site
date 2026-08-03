---
name: code-review
description: Independently review a completed implementation against its approved brief and repository standards. Use when Reviewer receives a Builder handoff and complete diff and must find material correctness, security, regression, scope, or test-quality risks without editing.
---

# Code review

Review the same change through separate evidence passes so conformance cannot
hide a wrong implementation and correct behavior cannot hide unsafe code.

## Inputs

Require the approved brief and acceptance criteria, Builder handoff, applicable
repository guidance, complete diff scope, relevant surrounding code, and test
results. Accept committed or uncommitted changes exactly as the parent defines
them; do not silently replace that scope with a branch comparison.

If a material input is missing, inspect what is locally discoverable and report
the exact remaining gap to the parent. Do not ask the user directly or launch
nested agents.

## Pass 1: brief and behavior

Trace each acceptance criterion into the diff and relevant execution path.
Look for:

- missing, partial, or incorrect requirements;
- behavior not requested by the brief;
- correctness, security, data-integrity, compatibility, and regression risks;
- error, concurrency, boundary, migration, and rollback cases implied by the
  affected code;
- missing or weak verification.

## Pass 2: standards and design

Read the closest `AGENTS.md`, contributing guidance, coding standards, domain
language, and ADRs. Check only standards relevant to changed code. Use
[references/smell-baseline.md](references/smell-baseline.md) as judgement
prompts, never as automatic violations. Repository decisions override the
baseline, and tooling-enforced formatting should not become review commentary.

## Pass 3: tests

Use [references/test-quality.md](references/test-quality.md) to assess whether
tests detect the requested behavior and credible regressions. Do not demand
tests for implementation details or trivial code merely to increase coverage.

## Findings

For every material finding include severity, axis, file and line, behavioral
impact, evidence, and the smallest credible correction. Order findings by
severity while preserving the `brief/behavior`, `standards/design`, or `tests`
label. Distinguish blocking defects from non-blocking follow-up.

If no material findings remain, say so explicitly. Finish with verification
performed, checks not run, residual risks, and one verdict: `pass`, `pass with
follow-up`, or `changes required`.

## Boundaries

- Stay read-only. Never fix the implementation.
- Do not spawn agents, post comments, commit, push, or deploy.
- Do not reopen accepted product decisions unless evidence shows the brief is
  unsafe or inconsistent.
- Do not inflate naming or style preferences into blocking findings.
