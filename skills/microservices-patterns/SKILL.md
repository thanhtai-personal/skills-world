---
name: microservices-patterns
description: Design distributed service architectures with bounded service ownership, synchronous/asynchronous communication, eventual consistency, sagas, resilience, and incremental monolith decomposition.
---

# Microservices Patterns

Use microservices only when independent ownership/deployment/scaling boundaries justify distributed-system complexity.

## Core design

- Decompose by business capability/bounded context, not by technical layer.
- Give each service explicit contract and data ownership; avoid shared-database coupling.
- Choose synchronous calls for immediate request/response needs and events/messages for decoupled workflows.
- Model eventual consistency explicitly; use saga/compensation for multi-service business transactions instead of pretending there is one ACID transaction.
- Define idempotency, retries, timeouts, backoff, circuit breaking, and bulkheads at remote boundaries.
- Make observability/correlation part of the design.
- Plan failure modes: duplicate/out-of-order messages, partial completion, poison messages, downstream outage, network partition.
- Prefer strangler/incremental decomposition for existing monoliths.

If one deployable application with clear internal modules satisfies the requirements, keep the simpler architecture.
