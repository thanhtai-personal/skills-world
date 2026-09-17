---
name: software-development-skill
description: Mandatory orchestration skill for software-development requests. Runs after skill-loader, maps work to a standard software-development lifecycle, and selects downstream skills in lifecycle order.
---

# Software Development Skill

This is the group-level orchestrator for all software-development work in Skill World. It runs after `skill-loader` and before any software-development leaf skill.

```text
user request
→ skill-loader
→ software-development-skill
→ software-development index
→ selected lifecycle skills + relevant specialization skills
```

Treat software development as a lifecycle, not a bag of unrelated skills. Enter at the earliest phase genuinely required for the user's task, then move forward. Do not force every phase, but do not silently skip an unresolved dependency.

## Capability status legend

- **FILLED** — an accepted local skill provides a good fit for the capability.
- **WEAK** / **`weak-skill`** — a loadable provisional candidate provides useful coverage but is weaker in source strength, adoption, specialization, maturity, or fit than Skill World's preferred skills. The label describes fit inside Skill World, not upstream quality.
- **EMPTY** — represented capability with no loadable candidate.

Prefer FILLED over WEAK when equivalent coverage exists. Load the smallest sufficient set rather than every skill in a phase or track.

## Cross-cutting engineering rules

These skills may participate in multiple phases when their condition applies:

- **FILLED** `source-driven-development` — verify version-sensitive framework/library/platform decisions against authoritative current documentation.
- **FILLED** `security-and-hardening` — security constraints during design and implementation.
- **FILLED** `documentation-and-adrs` — preserve important decisions/contracts.
- **FILLED** `observability-and-instrumentation` — production telemetry alongside relevant features.

## Specialized engineering tracks

Specializations do **not** replace the lifecycle. First identify the lifecycle phase, then add only the track skills relevant to the technology/problem. A task can activate more than one track.

### Cloud / IaC

- **FILLED** `multi-cloud-architecture` — cloud-provider strategy, migration, DR, portability, data-residency, and cross-cloud trade-offs. Do not default to multi-cloud without a real requirement.
- **FILLED** `terraform-module-library` — reusable Terraform/OpenTofu-style IaC modules, validation, examples, tests, provider/version discipline. Destructive infrastructure apply remains approval-gated.

Typical ordering:

```text
cloud architecture decision
→ multi-cloud-architecture when relevant
→ terraform-module-library
→ security/verification
→ CI/CD + shipping
```

### Containers / Kubernetes

- **WEAK** `docker` — Dockerfiles, Compose, image hardening, build caching, runtime configuration, and CI image workflows.
- **FILLED** `k8s-manifest-generator` — production workload manifests, probes, resources, configuration, storage, security contexts.
- **FILLED** `helm-chart-scaffolding` — reusable Helm packaging, values, helpers, dependencies, chart validation.
- **FILLED** `k8s-security-policies` — Pod Security Standards, NetworkPolicy, RBAC, admission policy, cluster security.
- **FILLED** `gitops-workflow` — Argo CD / Flux style declarative delivery and continuous reconciliation.

Use Kubernetes skills only when the deployment target is Kubernetes. Docker alone does not imply Kubernetes.

### Distributed systems / resilience

- **FILLED** `microservices-patterns` — service boundaries, communication, eventual consistency, retries/timeouts/circuit breakers/bulkheads, and incremental decomposition.
- **FILLED** `saga-orchestration` — compensating distributed transactions with idempotent steps, timeouts, recovery, correlation, and stuck-saga handling.
- **FILLED** `workflow-orchestration-patterns` — durable long-running workflows with workflow/activity separation and deterministic orchestration.
- **FILLED** `event-store-design` — event-sourced append-only persistence, replay, concurrency/versioning, projections, and schema evolution.

Prefer a local transaction/modular monolith when it satisfies the requirement.

Selection distinctions:

```text
single local ACID transaction
→ do not use saga/workflow engine

cross-service transaction with compensation
→ saga-orchestration

long-running recoverable process / timers / human waits
→ workflow-orchestration-patterns

immutable event history is a domain requirement
→ event-store-design
```

### Supply chain security

- **FILLED** `dependency-upgrade` — compatibility analysis, official migration guidance, staged major upgrades, lockfile discipline, testing, rollback, Renovate/Dependabot policy.
- **FILLED** `software-supply-chain-security` — SBOM generation, SCA, artifact signing/verification, provenance/attestations, and SLSA-oriented build controls.
- Supporting skills: `security-and-hardening`, `security-review`, `ci-cd-and-automation`.

Typical release-security path:

```text
resolve dependencies
→ SCA
→ build
→ SBOM
→ provenance / attestation
→ artifact signing
→ verification
→ publish/deploy
```

### Messaging / streaming

- **FILLED** `kafka-event-streaming` — Kafka topic/key/partition/retention design, schema registry compatibility, consumer reliability, retries/DLQ/idempotency, and event contracts/AsyncAPI.

Use this for broker/event-contract concerns. Add `saga-orchestration`, `event-store-design`, `microservices-patterns`, or `data-platform-architecture` only for their distinct concerns.

### Mobile

- **FILLED** `react-native-architecture` — React Native/Expo architecture, navigation, native APIs, offline-first behavior, secure storage, performance, platform differences.
- **FILLED** `mobile-testing-and-release` — layered mobile testing, release-like platform validation, app-store build/submission/release, and OTA/EAS Update compatibility/rollback.

For mobile visual direction, `frontend-design` may also be selected; for version-sensitive Expo/RN APIs, add `source-driven-development`.

### Data engineering

- **FILLED** `airflow-dag-patterns` — production DAG orchestration, idempotency, retries/timeouts, observability, testing.
- **FILLED** `dbt-transformation-patterns` — staging/intermediate/mart layers, incremental models, tests, documentation, lineage.
- **FILLED** `data-quality-frameworks` — data contracts, completeness/uniqueness/validity/consistency/freshness checks and CI/monitoring gates.
- **FILLED** `spark-optimization` — evidence-led Spark tuning for partitioning, shuffle/skew, memory, caching, formats, and adaptive execution.

### Data platform

- **FILLED** `data-platform-architecture` — warehouse/lakehouse design, open table formats/catalog boundaries, lineage/governance, data contracts, retention, and reliable stream-processing state/checkpoint semantics.

Use `kafka-event-streaming` for Kafka/schema/consumer contracts, `airflow-dag-patterns` for scheduled orchestration, `dbt-transformation-patterns` for analytics SQL modeling, and `spark-optimization` only after evidence shows a Spark performance problem.

## Standard software-development lifecycle

### Phase 1 — Discover & clarify

- **FILLED** `brainstorming` — intent/scope/approach discovery.
- **FILLED** `domain-modeling` — ubiquitous language, domain concepts, context boundaries.
- **FILLED** `spec-driven-development` — requirements, assumptions, scope, success criteria, living specification.
- **WEAK supplemental** `prd` — product-oriented PRD format when explicitly useful.

Exit: outcome, domain language, constraints, and success criteria are clear enough for design.

### Phase 2 — Design the solution

- **FILLED** `frontend-design` — visual/UX direction.
- **FILLED** `codebase-design` — deep modules, interfaces, seams, locality, testability.
- **WEAK** `software-architecture` → `architecture-patterns`.
- **FILLED** `supabase-postgres-best-practices` — Postgres design/migrations/RLS/indexes/concurrency.
- **FILLED** `security-and-hardening` — threat-model-first secure design.
- **WEAK** `api-design` → `api-and-interface-design`.
- **FILLED when version-sensitive** `source-driven-development`.
- Add specialization design skills such as `multi-cloud-architecture`, `microservices-patterns`, `saga-orchestration`, `workflow-orchestration-patterns`, `event-store-design`, `kafka-event-streaming`, `react-native-architecture`, or `data-platform-architecture` only when the task requires them.

Exit: relevant boundaries/contracts/data/security/platform decisions are explicit enough to plan implementation.

### Phase 3 — Plan the implementation

- **FILLED** `writing-plans`.
- **FILLED** `documentation-and-adrs` when significant decisions/contracts should be preserved.

### Phase 4 — Prepare isolated execution

- **FILLED** `using-git-worktrees`.
- **FILLED** `git-workflow-and-versioning`.

### Phase 5 — Implement

- **FILLED** `test-driven-development`.
- **FILLED** `frontend-ui-engineering` for production web UI.
- **FILLED** `source-driven-development` for version-sensitive external technologies.
- **FILLED** `security-and-hardening`.
- **FILLED** `supabase-postgres-best-practices` for Postgres work.
- **FILLED** `observability-and-instrumentation` when production behavior needs telemetry.
- Execution modes: `subagent-driven-development`, `dispatching-parallel-agents`, or `executing-plans` as appropriate.
- Add only the specialization implementation skills selected by the task.

### Phase 6 — Debug failures (loopback)

- **FILLED** `systematic-debugging`.

After root cause/fix, return to the phase that failed and continue forward.

### Phase 7 — Verify quality

- **FILLED** `verification-before-completion`.
- **FILLED** `performance-optimization` for measured performance needs.
- **FILLED** `accessibility` for web accessibility.
- **FILLED** `browser-testing-with-devtools` when compatible tooling exists.
- **WEAK** `test-strategy` → `test-gap-audit`.
- **WEAK** `integration-contract-e2e-strategy` → `webapp-testing`.
- Specialization-specific validation must also run: Terraform plan/tests, Helm lint/render, Kubernetes validation/dry-run, GitOps diff/reconciliation checks, saga/workflow failure-path tests, event replay tests, Kafka contract/rebalance/retry tests, mobile platform/release tests, SBOM/signature/provenance verification, DAG/dbt/data-quality/Spark checks, data-platform lineage/checkpoint/replay checks, etc.

### Phase 8 — Review & simplify

- `requesting-code-review` → `code-review` → `receiving-code-review` as relevant.
- **FILLED** `code-simplification` after correctness is established.
- **FILLED** `improve-codebase-architecture` when measured architecture friction justifies it.

### Phase 9 — Security review

- **FILLED** `security-review`.
- Add `k8s-security-policies` for Kubernetes policy scope.
- Add `software-supply-chain-security` when artifact/dependency/build trust is in scope.

### Phase 10 — Integrate & deliver

- **FILLED** `git-workflow-and-versioning`.
- **FILLED** `ci-cd-and-automation`.
- **FILLED** `finishing-a-development-branch`.
- **FILLED** `shipping-and-launch`.
- **WEAK** `release-management` → `changelog-automation`.
- Add `software-supply-chain-security` for release SBOM/signing/provenance controls and `mobile-testing-and-release` for app-store/OTA release work.

### Phase 11 — Operate & learn

- **FILLED** `observability-and-instrumentation`.
- **FILLED** `documentation-and-adrs`.
- **WEAK** `incident-response` → `incident-runbook-templates`.
- **WEAK** `production-diagnosis` → `diagnosing-bugs`.
- **WEAK** `postmortems` → `postmortem-writing`.
- Specialized systems require their own runtime signals: consumer lag/DLQ/rebalances, workflow/saga stuck states, lineage/freshness/checkpoint health, mobile crash/update signals, and artifact-verification policy failures as applicable.

### Phase 12 — Maintain & evolve

- **FILLED** `deprecation-and-migration`.
- **FILLED** `dependency-upgrade` when external dependencies are being modernized.
- **FILLED** `code-simplification`.
- **FILLED** `improve-codebase-architecture`.
- **FILLED** `source-driven-development` for external technology migration guidance.

Maintenance may start a new lifecycle loop for the replacement system.

## Meta capabilities

- `writing-skills` — create/modify/test Skill World skills.
- `using-superpowers` — upstream Superpowers conventions when specifically relevant.

## Selection algorithm

1. Identify the current lifecycle phase.
2. Check whether an earlier unresolved phase is a real prerequisite.
3. Identify relevant specialization track(s), if any.
4. Read `skills/skill-loader/index/software-development.md`.
5. Select the smallest sufficient lifecycle + specialization leaf set; prefer FILLED over WEAK for equivalent coverage.
6. Add cross-cutting skills only when their actual condition applies.
7. Order selected skills by lifecycle and technical dependency.
8. Reassess after each phase; do not continue mechanically.
9. Failures/findings loop back to the earliest affected phase.
10. Before any completion claim, require fresh verification evidence.

## Fast paths

```text
Secure release pipeline
→ dependency-upgrade as needed → software-supply-chain-security → CI/CD → verify attestations/signatures → shipping

Kafka integration
→ domain/event definition → kafka-event-streaming → implementation → contract/reliability tests → observability

Kubernetes app packaging + GitOps
→ docker [weak] if image work is required → k8s-manifest-generator → helm-chart-scaffolding → k8s-security-policies when relevant → gitops-workflow → verify → delivery

Cross-service business transaction
→ domain-modeling → microservices-patterns only if distributed boundaries are justified → saga-orchestration → observability/failure-path verification

Long-running durable business process
→ workflow-orchestration-patterns → activity/idempotency tests → observability → verification

React Native feature and release
→ frontend-design when needed → react-native-architecture → TDD → mobile-testing-and-release → shipping

Analytics/data platform
→ data-platform-architecture when platform/storage/governance decisions are needed → airflow/dbt/data-quality/spark skills only for their actual workloads → verification/observability

Major dependency upgrade
→ source-driven-development → dependency-upgrade → test/verify → release
```

## Future expansion rule

Specialization tracks should grow by capability, not by collecting every framework. A `weak-skill` remains usable and is also an explicit replacement target. Every imported skill must keep provenance/license records; Skill World original skills should record authoritative sources when built from external standards/docs. Routing changes must update this orchestrator, the software-development index, `CATALOG.jsonl`, and `SKILL_REGISTRY.md` together.
