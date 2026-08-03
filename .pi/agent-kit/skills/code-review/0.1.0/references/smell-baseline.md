# Code-smell judgement prompts

Use these only when a changed hunk creates concrete maintenance or correctness
risk. Label them as judgement calls; repository guidance can explicitly accept
a pattern.

- **Mysterious name** — a name conceals what a value or operation means.
- **Duplicated code** — the same non-trivial behavior is repeated in changed
  locations and can diverge.
- **Feature envy** — behavior depends more on another module's data than its
  own, weakening locality.
- **Data clump** — the same fields repeatedly travel together and conceal one
  domain concept.
- **Primitive obsession** — an unconstrained primitive represents a concept
  whose invariants matter.
- **Repeated switch** — the same type decision is spread across changed code.
- **Shotgun surgery** — one behavior requires scattered edits because the seam
  lacks locality.
- **Divergent change** — one module is modified for unrelated reasons.
- **Speculative generality** — abstractions or extension points serve no
  accepted requirement.
- **Message chain** — callers navigate internal structure they should not know.
- **Middle man** — a changed layer delegates without hiding complexity.
- **Refused bequest** — an implementation inherits a contract it cannot honor.
