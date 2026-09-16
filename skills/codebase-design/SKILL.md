---
name: codebase-design
description: Design deep modules with small interfaces, clean seams, high leverage, locality, and testability. Use when designing or improving module interfaces and architecture.
---

# Codebase Design

Design **deep modules**: substantial behavior behind a small interface, placed at a clean seam and testable through that interface.

## Vocabulary

- **Module**: anything with an interface and implementation.
- **Interface**: everything callers must know: types, invariants, ordering, errors, config, and performance expectations.
- **Implementation**: what stays behind the interface.
- **Depth**: leverage delivered per unit of interface complexity.
- **Seam**: a place where behavior can vary without editing the caller.
- **Adapter**: a concrete implementation satisfying an interface at a seam.
- **Leverage**: capability callers gain from a small interface.
- **Locality**: change, knowledge, bugs, and verification concentrated in one place.

## Design rules

Prefer smaller interfaces that hide more complexity. Apply the deletion test: if removing a module simply spreads the same complexity across callers, the module was earning its keep; if complexity disappears, it was likely shallow/pass-through. Treat the interface as the primary test surface. Introduce seams only where variation is real, not hypothetical. Accept dependencies rather than constructing them internally when testability or substitution matters.
