# Deepening modules safely

Classify each dependency before choosing a seam:

1. **In-process** — pure computation or in-memory state. Keep it behind the
   module and test through the external interface.
2. **Local-substitutable** — infrastructure with a realistic local stand-in,
   such as an in-memory filesystem or embedded database. Prefer the stand-in to
   a mock.
3. **Remote but owned** — an internal service across a transport boundary.
   Define a port at the seam and use production and in-memory adapters when
   both are genuinely needed.
4. **True external** — a third-party system. Inject the narrow external port
   and substitute it at that boundary in tests.

When replacing shallow modules, add behavior tests at the new interface before
removing superseded tests. Delete tests that only preserve the old internal
shape after equivalent coverage exists at the new seam.
