---
name: domain-modeling
description: Build and sharpen a project's domain model. Use when terminology, domain rules, context boundaries, CONTEXT.md, or ADR-worthy domain decisions need to be clarified.
---

# Domain Modeling

Actively build and sharpen the project's domain model while designing. This is for changing the model, not merely reading existing vocabulary.

## Core process

1. Read the relevant `CONTEXT.md` / `CONTEXT-MAP.md` and nearby ADRs if they exist.
2. Challenge conflicting or overloaded terms immediately.
3. Stress-test domain relationships with concrete edge-case scenarios.
4. Cross-check claimed domain behavior against the current code when source is available.
5. Update the domain glossary as terms crystallize; keep implementation details out of the glossary.
6. Offer an ADR only for a decision that is hard to reverse, surprising without context, and the result of a real trade-off.

Use canonical domain language consistently across later architecture, API, database, implementation, and documentation work.
