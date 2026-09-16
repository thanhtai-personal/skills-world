---
name: improve-codebase-architecture
description: Review an existing codebase for architectural friction and deepening opportunities. Use for targeted architecture improvement, not greenfield design.
---

# Improve Codebase Architecture

Use `codebase-design` vocabulary and the current domain model to identify architectural friction in existing code.

## Process

1. Scope the review to user-named areas or recent hot spots; do not refactor cold code speculatively.
2. Read relevant domain glossary and ADRs first.
3. Look for shallow modules, knowledge scattered across callers, difficult test seams, and tightly coupled areas where changes repeatedly span many files.
4. Apply the deletion test and distinguish real seams from hypothetical abstractions.
5. Present a small set of candidates with files, problem, proposed deepening, expected locality/leverage benefit, test impact, and confidence.
6. Do not change architecture until the selected candidate and trade-offs are approved.
7. When a candidate conflicts with an ADR, surface the conflict instead of silently overriding it.

This skill is a maintenance/refactoring capability and is not a mandatory phase for every feature.
