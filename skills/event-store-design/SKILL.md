---
name: event-store-design
description: Design event-sourced persistence with append-only streams, optimistic concurrency, idempotency, subscriptions, replay, event versioning, snapshots, and projection/rebuild concerns.
---

# Event Store Design

Use event sourcing only when an append-only domain history, temporal reconstruction, auditability, or event-driven projection model provides real value.

## Rules

- Events are immutable facts; corrections are new events, not in-place mutation.
- Use aggregate/stream identifiers with explicit per-stream versioning and optimistic concurrency.
- Give every event a stable ID plus correlation/causation metadata.
- Make appends idempotent and define duplicate handling.
- Version event schemas from the beginning; preserve replay compatibility or explicit upcasters/migrations.
- Separate command/write behavior from projections/read models when appropriate.
- Plan projection rebuild, subscription checkpoints, backpressure, and poison-event handling.
- Snapshot only when replay cost requires it; snapshots are derived optimization, not source of truth.
- Test concurrent appends, replay, duplicate delivery, projection rebuild, and schema evolution.

Do not use event sourcing merely because events are fashionable; ordinary relational state is usually simpler.
