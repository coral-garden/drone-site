# Test quality

Good tests describe observable behavior through a public interface and survive
internal refactoring.

## Checks

- Name the caller-visible capability, not the implementation technique.
- Use an independent expected value: a worked example, fixed literal, accepted
  fixture, or specification. Do not recompute the answer with the same
  algorithm as production.
- Prefer one logical behavior per test.
- Verify outcomes through the public interface rather than private methods,
  internal call counts, or direct inspection of storage behind the interface.
- Exercise the highest approved seam that remains fast and deterministic.

## Reject

- Tests coupled to private methods or internal collaborators.
- Assertions that only prove a mock was called.
- Tautological expectations derived the same way as the implementation.
- Snapshots whose size hides the behavior under test.
- Tests that must change during a behavior-preserving internal refactor.
