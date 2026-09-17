---
name: data-platform-architecture
description: Design warehouse/lakehouse data platforms with table-format/storage architecture, batch and streaming boundaries, lineage/governance, data contracts, retention, and reliable stream-processing state/checkpoint semantics. Use for warehouses, lakehouses, Iceberg, lineage, governance, Flink, or streaming platform architecture.
---

# Data Platform Architecture

Design the platform from workload and governance needs, not from fashionable labels. This skill covers **warehouse/lakehouse architecture, lineage/governance, and streaming processing**.

## 1. Warehouse / lakehouse architecture

Clarify before choosing technology:

- source systems and ingest modes (CDC, events, files, APIs, batch);
- latency/freshness requirements;
- analytical vs operational workload;
- table size/growth, update/delete needs, retention;
- concurrency and engine interoperability;
- governance/residency/security requirements;
- cost/operational constraints.

For object-storage lakehouses, use an open table format such as Iceberg/Delta/Hudi only when its transaction/evolution/interoperability features solve actual needs. With Iceberg-style tables, reason explicitly about snapshots, metadata/catalog, schema evolution, partition evolution, compaction, retention, and optimistic concurrency.

Separate storage/table format, catalog/metastore, compute engine, and orchestration responsibilities; avoid coupling the entire platform to one engine without a requirement.

## 2. Lineage and governance

- Assign ownership and business meaning to critical datasets.
- Define data contracts at producer/consumer boundaries: schema, semantics, freshness, quality, compatibility, and deprecation policy.
- Capture lineage from jobs/runs/datasets where possible instead of maintaining diagrams manually.
- Prefer standard lineage events such as OpenLineage when ecosystem support exists.
- Distinguish declared lineage from runtime-observed lineage and field-level lineage.
- Apply classification, access policy, retention, residency, and audit requirements according to data sensitivity.
- Avoid collecting sensitive data in lineage/metadata systems unnecessarily.
- Treat breaking schema/semantic changes like API changes: version, communicate, migrate, and deprecate.

Pair with `data-quality-frameworks` for testable quality gates.

## 3. Streaming processing

- Define event-time vs processing-time semantics and late/out-of-order event policy.
- Partition/key streams from state and ordering requirements.
- Use bounded state, checkpoints/savepoints, and restart strategy appropriate to the engine.
- Reason about source and sink guarantees end-to-end; exactly-once requires compatible transactional/idempotent boundaries, not just engine checkpoints.
- Define watermark/window strategy for time-based aggregations.
- Monitor consumer/backpressure/checkpoint duration/failures/state size/late-event rate.
- Plan schema evolution and replay/reprocessing before production.
- Separate stream processing from durable event contracts/broker concerns; use `kafka-event-streaming` when Kafka/schema/consumer contracts are part of the task.

## Typical platform path

```text
source contracts
→ ingestion / event streaming
→ durable raw storage
→ table format + catalog
→ batch/stream processing
→ curated models/serving
→ quality gates
→ lineage/governance
→ observability + cost controls
```

Use `airflow-dag-patterns` for scheduled orchestration, `dbt-transformation-patterns` for analytics SQL modeling, and `spark-optimization` only for evidence-backed Spark performance work.
