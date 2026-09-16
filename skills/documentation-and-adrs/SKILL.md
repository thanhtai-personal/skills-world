---
name: documentation-and-adrs
description: Record architecture decisions, public contracts, setup knowledge, operational context, and the reasoning future engineers or agents need.
---

# Documentation and ADRs

Document **why**, constraints, and trade-offs; code already documents much of the what.

## Use for

- significant architecture decisions or expensive-to-reverse choices;
- public API/contract changes;
- setup/onboarding knowledge;
- known gotchas that are not obvious from code;
- release/runbook/changelog context that future operators need.

Before creating an ADR, detect and follow the repository's existing ADR location, numbering, format, and headings. Do not introduce a second convention. Never delete old ADR history; supersede it with a new decision when needed.

Comments should explain non-obvious intent and constraints rather than restating code. Keep README/setup commands executable and keep agent/project instruction files current.
