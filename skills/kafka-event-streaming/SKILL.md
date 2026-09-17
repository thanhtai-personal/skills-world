---
name: kafka-event-streaming
description: Design reliable Kafka/event-streaming systems with topic/partition/key strategy, schema registry compatibility, consumer-group reliability, retries/DLQ/idempotency, and machine-readable event contracts. Use for Kafka, schema evolution, consumers, event contracts, AsyncAPI, or streaming messaging design.
---

# Kafka Event Streaming

Treat Kafka and event streams as durable distributed contracts, not as a faster message queue. This skill covers **Kafka design, schema registry, consumer reliability, and event contracts**.

## 1. Topic, partition, and key design

- Define event ownership and business meaning before naming topics.
- Choose the message key from the ordering/affinity requirement; Kafka ordering is per partition, not global.
- Size partition count from throughput, consumer parallelism, ordering constraints, and future growth—not arbitrary defaults.
- Define retention/compaction from recovery/audit/state requirements.
- Avoid one topic per tiny implementation detail; prefer stable domain/event boundaries.
- Do not use Kafka when synchronous request/response or a local transaction is simpler and sufficient.

## 2. Schema registry and evolution

- Use an explicit schema format and registry when multiple independently deployed producers/consumers share events.
- Choose and document compatibility mode deliberately (backward, forward, full, transitive variants as supported).
- Validate compatibility in CI before registering/deploying a breaking schema.
- Prefer additive, optional/defaulted evolution patterns where the chosen schema format supports them.
- Treat field semantic changes as breaking even when the wire schema technically passes compatibility checks.
- Version event meaning/contracts independently from internal class/type names.

## 3. Consumer reliability

- Assume messages may be delivered more than once; make side effects idempotent or deduplicate with a durable key.
- Commit offsets only after the processing semantics the application requires have succeeded.
- Use bounded retries with backoff for transient failures; poison/permanent failures need quarantine/DLQ or explicit operator workflow.
- Preserve original payload/headers/key/offset/error context when routing failures for recovery.
- Monitor consumer lag, rebalance frequency, processing latency, retry/DLQ volume, and partition skew.
- Test restart/rebalance/duplicate/out-of-order and downstream outage behavior.
- Do not describe a pipeline as exactly-once unless the end-to-end side effects satisfy that guarantee, not merely the Kafka client configuration.

## 4. Event contracts

Define a machine-readable contract when events cross team/service boundaries. AsyncAPI is a strong protocol-agnostic choice. Contracts should cover:

- channel/topic and operation direction;
- message name/purpose and schema;
- key/partitioning semantics;
- required headers/metadata, correlation/causation IDs;
- producer and consumer ownership;
- compatibility/evolution policy;
- retry/error/DLQ behavior where it is part of the integration contract;
- security/auth requirements for the broker/channel.

Contract tests should validate representative producer output against the schema and consumer compatibility before deployment.

## Recommended path

```text
domain event definition
→ event contract
→ topic/key/partition/retention design
→ schema + compatibility policy
→ producer implementation
→ idempotent consumer + retry/DLQ strategy
→ contract/integration tests
→ lag/error/throughput observability
```

Pair with `microservices-patterns`, `saga-orchestration`, `event-store-design`, or `data-platform-architecture` only when their distinct concerns are actually present.
