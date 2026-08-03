---
name: diagnosing-bugs
description: Reproduce, isolate, and fix a hard bug or performance regression inside an approved Builder task. Use when behavior is broken, failing, flaky, or slow and the cause is not already established by a tight feedback loop.
---

# Diagnosing bugs

Do not guess at a cause before building a feedback loop that detects the user's
actual symptom.

## 1. Build the loop

Create one agent-runnable command that drives the real failure path and can turn
red on the reported symptom and green after a fix. Prefer, in order: focused
test, HTTP/CLI reproduction, browser script, captured-trace replay, small
harness, property loop, bisection, or differential comparison.

Run it at least once and capture its command and output. Tighten it until it is
specific, deterministic, and fast. For flaky failures, raise and measure the
reproduction rate.

If no credible loop is possible, stop. Report what was tried and request the
smallest missing access, artifact, or instrumentation permission from the
parent. Do not continue with code-reading speculation.

## 2. Reproduce and minimise

Confirm the loop produces the exact reported symptom. Remove inputs, state,
configuration, and steps one at a time until every remaining element is
necessary for failure.

## 3. Hypothesise

Write three to five ranked, falsifiable hypotheses. For each, state the
observation that would support or refute it. Return the ranking to the parent as
a non-blocking checkpoint, then continue unless the delegated task requires an
answer first.

## 4. Instrument

Test one prediction at a time. Prefer debugger or REPL inspection, then narrow
logs. Tag temporary instrumentation with one unique marker so it can be removed.
For performance failures, measure a baseline and use profiling, query plans, or
bisection rather than broad logging.

## 5. Fix and lock down

Turn the minimal reproduction into a failing regression test at an approved
public seam. If no correct seam exists, report that architectural limitation
rather than writing a misleading shallow test. Apply the smallest fix, watch
the regression test pass, and rerun the original loop.

## 6. Clean up and hand off

- Remove all tagged instrumentation and throwaway harnesses.
- Run the focused checks and proportionate surrounding suite.
- Report the root cause, supporting evidence, fix, regression coverage,
  commands/results, and any architectural follow-up separately.

## Boundaries

- Do not redesign approved scope while debugging.
- Do not change production observability or external state without explicit
  parent permission.
- Do not commit, push, open a PR, deploy, or hide an unreproduced assumption as
  a root cause.
