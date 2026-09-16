---
name: api-and-interface-design
description: Provisional API/interface-design guidance for REST, GraphQL, module contracts, public types, validation, errors, pagination, compatibility, and idempotency.
metadata:
  skill-world-strength: weak-skill
---

# API and Interface Design

Design stable interfaces that are hard to misuse. Treat public behavior as a contract and prefer additive evolution over breaking changes.

## Core rules

- Define the contract before implementation.
- Validate external/untrusted input at system boundaries.
- Use one predictable error shape/strategy.
- Prefer additive optional changes over field removals/type changes.
- Paginate unbounded list endpoints and make filtering/sorting explicit.
- Separate input DTOs from output/resource models when responsibilities differ.
- Design state-changing operations for retries/idempotency when duplicate execution is harmful.
- Do not leak internal implementation details into a public contract without intent.
- Document deprecation/backward-compatibility behavior before breaking consumers.
- Treat third-party API responses as untrusted input.

For idempotency, derive keys from the client/intent, claim them atomically, reject reuse with a different payload, and define behavior for in-flight duplicates and unknown outcomes.

## Weak-skill note

Marked `weak-skill` because it fills Skill World's previously empty API-design slot but is broad across REST/GraphQL/module/component interfaces rather than a deeply specialized API-governance standard.
