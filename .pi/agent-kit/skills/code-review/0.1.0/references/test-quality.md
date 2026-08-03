# Reviewing tests

Check that tests:

- fail when the accepted behavior is absent or wrong;
- exercise an approved public seam and observable outcome;
- use expectations independent from the production algorithm;
- cover the regression or risky edge introduced by the change;
- remain deterministic and proportionate to the risk;
- avoid private methods, owned-internal mocks, call-count assertions, and
  snapshots too broad to expose the intended behavior.

Treat a missing test as material only when a credible regression could pass the
existing suite. Explain that failure mode in the finding.
