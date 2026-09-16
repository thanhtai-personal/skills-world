---
name: spec-driven-development
description: Create and maintain a concrete specification before substantial implementation. Use for new features/projects, ambiguous requirements, capability decomposition, measurable success criteria, and approved implementation boundaries.
---

# Spec-Driven Development

Write the specification before substantial code. The spec is the shared source of truth for what is being built, why, boundaries, and how success will be verified.

## Workflow

1. Detect whether the request contains one capability or several independently testable capabilities. For several capabilities, propose a small dependency-aware capability map first.
2. Surface assumptions instead of silently filling ambiguity.
3. Specify objective, actors/users, scope/non-goals, constraints, relevant project conventions/commands, testing expectations, success criteria, and unresolved questions.
4. Make success criteria concrete and testable.
5. Get the specification reviewed before implementation when the work is substantial.
6. Route approved specs to `writing-plans`; do not duplicate the implementation-planning skill.
7. Keep the spec alive when scope or decisions change; reference it during review/verification.

Use the repository's existing spec format/location when one exists rather than inventing a competing convention. Tiny unambiguous fixes do not need heavyweight specs.
