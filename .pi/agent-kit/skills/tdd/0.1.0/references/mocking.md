# Test substitutes

Use substitutes at system boundaries only: third-party APIs, clocks, randomness,
remote services, and occasionally storage or filesystems when a realistic local
stand-in is unavailable.

Prefer, in order:

1. The real in-process implementation.
2. A realistic local stand-in such as a test database.
3. A narrow fake or mock at a true external seam.

Do not mock owned internal modules merely to make a shallow test easy. Inject
external dependencies through narrow, operation-specific interfaces; avoid a
generic fetcher whose mock needs its own routing logic.
