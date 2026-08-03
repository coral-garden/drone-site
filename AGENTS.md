<!-- agent-kit:core-dev:start -->
## Shared agent workflow

For material coding changes, the parent Pi session must use the project
Nano Team agents in this sequence:

1. Call `nano_agent_spawn` with `architect` for a read-only, implementation-ready brief.
2. Resolve open decisions, then call `nano_agent_spawn` with `builder` and the approved brief.
3. After implementation, call `nano_agent_spawn` with `reviewer`, the brief, Builder handoff, and resulting diff.
4. The parent integrates the handoffs and sends findings back through Builder
   and Reviewer until the review passes.

Wait for each handoff before starting the next role. The parent owns scope,
permissions, integration, and the final answer. The full chain is optional for
trivial changes that do not benefit from separate architecture and review.

Project `AGENTS.md` guidance, including Laravel Boost's installed-version rules,
applies to every child. If it requires a tool unavailable to the child (for
example `search-docs`), the child must return the exact lookup needed; the
parent performs it and supplies the result before work continues.
<!-- agent-kit:core-dev:end -->
