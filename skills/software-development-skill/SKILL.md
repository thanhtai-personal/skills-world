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
- **FILLED** `k8s-security-policies` — Pod Security Standards, NetworkPolicy, RBAC, admission policy, cluster security.

Use Kubernetes skills only when the deployment target is Kubernetes. Docker alone does not imply Kubernetes.

### Distributed systems / resilience

- **FILLED** `microservices-patterns` — bounded service ownership, synchronous/asynchronous communication, event-driven workflows, sagas, eventual consistency, retries/timeouts/circuit breakers/bulkheads, and incremental decomposition.

Do not introduce microservices merely because the application is large. A modular monolith remains preferable when independent service boundaries are not justified.

### Dependency / supply chain

- **FILLED** `dependency-upgrade` — compatibility analysis, official migration guidance, staged major upgrades, lockfile discipline, testing, rollback, Renovate/Dependabot policy.
- **FILLED supporting skills** `security-and-hardening` + `security-review` — dependency/security review and supply-chain concerns.

Current dedicated coverage for SBOM, artifact signing/provenance, and full software-supply-chain governance is still limited; do not imply those capabilities are fully covered by `dependency-upgrade`.

### Mobile

- **FILLED** `react-native-architecture` — React Native/Expo architecture, navigation, native APIs, offline-first behavior, secure storage, performance, platform differences, EAS/app-store delivery.

For mobile visual direction, `frontend-design` may also be selected; for version-sensitive Expo/RN APIs, add `source-driven-development`.

### Data engineering

- **FILLED** `airflow-dag-patterns` — production DAG orchestration, idempotency, retries/timeouts, observability, testing.
- **FILLED** `dbt-transformation-patterns` — staging/intermediate/mart layers, incremental models, tests, documentation, lineage.
- **FILLED** `data-quality-frameworks` — data contracts, completeness/uniqueness/validity/consistency/freshness checks and CI/monitoring gates.

A common batch analytics path is:

```text
Airflow orchestration
→ dbt transformations
→ data-quality gates
→ observability
```

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
- Add specialization design skills such as `multi-cloud-architecture`, `microservices-patterns`, `react-native-architecture`, or data-engineering skills only when the task requires them.

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
- Add specialization implementation skills: IaC, Docker/Kubernetes, mobile, or data-engineering only when selected by the task.

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
- Specialization-specific validation must also run: Terraform plan/tests, Kubernetes validation/dry-run, mobile platform/device checks, DAG/dbt/data-quality checks, etc.

### Phase 8 — Review & simplify

- `requesting-code-review` → `code-review` → `receiving-code-review` as relevant.
- **FILLED** `code-simplification` after correctness is established.
- **FILLED** `improve-codebase-architecture` when measured architecture friction justifies it.

### Phase 9 — Security review

- **FILLED** `security-review`.
- Add `k8s-security-policies` for Kubernetes policy scope and relevant dependency/platform security skills for specialized systems.

### Phase 10 — Integrate & deliver

- **FILLED** `git-workflow-and-versioning`.
- **FILLED** `ci-cd-and-automation`.
- **FILLED** `finishing-a-development-branch`.
- **FILLED** `shipping-and-launch`.
- **WEAK** `release-management` → `changelog-automation`.
- Platform delivery may additionally use Docker/Kubernetes/IaC/mobile-specific skills.

### Phase 11 — Operate & learn

- **FILLED** `observability-and-instrumentation`.
- **FILLED** `documentation-and-adrs`.
- **WEAK** `incident-response` → `incident-runbook-templates`.
- **WEAK** `production-diagnosis` → `diagnosing-bugs`.
- **WEAK** `postmortems` → `postmortem-writing`.

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
Terraform infrastructure change
→ spec/design as needed → terraform-module-library → security → plan/verify → CI/CD/delivery

Kubernetes deployment
→ docker [weak] if image work is required → k8s-manifest-generator → k8s-security-policies when policy scope applies → verify → delivery

Distributed workflow
→ domain-modeling → microservices-patterns only if distributed boundaries are justified → implementation → resilience/observability verification

React Native feature
→ frontend-design when visual direction is needed → react-native-architecture → TDD → platform verification → release

Analytics pipeline
→ airflow-dag-patterns → dbt-transformation-patterns when analytics SQL is involved → data-quality-frameworks → observability → verification

Major dependency upgrade
→ source-driven-development → dependency-upgrade → test/verify → release
```

## Future expansion rule

Specialization tracks should grow by capability, not by collecting every framework. A `weak-skill` remains usable and is also an explicit replacement target. Every import must update this orchestrator when routing changes, the software-development index, `CATALOG.jsonl`, `SKILL_REGISTRY.md`, and provenance/license records.
