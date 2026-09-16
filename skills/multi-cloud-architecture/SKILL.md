---
name: multi-cloud-architecture
description: Design cloud architecture across AWS, Azure, GCP, OCI, or provider-neutral stacks. Use for provider selection, portability, DR, migration, data sovereignty, cloud abstraction, and cross-cloud trade-offs.
---

# Multi-Cloud Architecture

Choose cloud architecture from workload requirements and trade-offs, not from a desire to be multi-cloud by default.

## Workflow

1. Clarify workload, latency, availability, compliance/data-residency, operational skill, cost, and lock-in constraints.
2. Decide whether single-cloud, single-cloud + DR, hybrid, or true multi-cloud is justified.
3. Map required capabilities across providers only where the comparison affects a decision.
4. Prefer portable primitives where portability has real value: Kubernetes, PostgreSQL, Kafka-compatible streaming, Redis, object-storage abstractions, OpenTelemetry, Terraform/OpenTofu.
5. Explicitly model cross-cloud networking, identity, data replication, failure modes, egress cost, and operational complexity.
6. Plan migrations incrementally with coexistence/rollback rather than big-bang moves.
7. Capture important trade-offs in ADRs and verify current provider capabilities with `source-driven-development`.

Multi-cloud adds failure modes and operational surface. Do not introduce it merely to avoid hypothetical lock-in.
