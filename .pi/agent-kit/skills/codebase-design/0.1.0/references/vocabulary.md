# Design vocabulary

- **Module** — something with one interface and an implementation; it may be a
  function, class, package, or tier-spanning slice.
- **Interface** — everything callers must know: types, invariants, ordering,
  errors, configuration, and performance characteristics.
- **Implementation** — behavior hidden inside the module.
- **Depth** — leverage provided through the interface. A deep module gives
  callers substantial behavior through a small surface.
- **Seam** — the location where behavior can vary without editing its caller.
- **Adapter** — an implementation that occupies a seam.
- **Leverage** — capability callers gain per concept they must learn.
- **Locality** — the degree to which related behavior, change, bugs, and tests
  remain concentrated.

## Design checks

- Reduce methods and parameters when doing so hides real complexity.
- Accept external dependencies rather than constructing them invisibly.
- Prefer returning observable results to hidden side effects.
- Treat the interface as the normal test surface.
- Do not add a seam for hypothetical variation. One production adapter alone
  is usually indirection; a production adapter plus a justified test or runtime
  alternative can make the seam real.
