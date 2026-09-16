---
name: saga-orchestration
description: Coordinate distributed business transactions with ordered steps, idempotency, compensation, timeouts, correlation, retries, and stuck-saga recovery when a single ACID transaction is unavailable.
---

# Saga Orchestration

Use sagas for multi-service business transactions where partial completion is possible and compensation is required.

## Rules

- Define each step's owner, input/output, success condition, timeout, and compensation.
- Make every action and compensation idempotent.
- Propagate a stable saga/correlation ID through events, logs, and traces.
- Distinguish transient failures from permanent business failures.
- Use per-step timeouts and bounded retries; never wait forever.
- Run compensation in reverse dependency order and test failure injection at every step.
- Persist enough saga state to recover after orchestrator/broker restart.
- Handle duplicate/out-of-order events and dead-letter recovery explicitly.
- Monitor stuck, compensating, and repeatedly failing sagas.

Do not introduce a saga when a single database transaction or simpler local workflow can satisfy the consistency requirement.
