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
→ selected leaf skills in lifecycle order
```

Treat software development as a lifecycle, not a bag of unrelated skills. Enter at the earliest phase that is genuinely required for the user's task, then move forward. Do not force every phase, but do not silently skip an unresolved dependency.

## Capability status legend

- **FILLED** — a selected local skill exists and is indexed.
- **PARTIAL** — a local skill covers part of the capability but not the full professional scope.
- **EMPTY** — the lifecycle slot is intentionally represented, but no candidate has been accepted yet. Do not improvise a nonexistent skill; use adjacent skills only for the parts they actually cover.

## Standard software-development lifecycle

### Phase 1 — Discover & clarify

Goal: understand the problem, users, domain, constraints, success criteria, and terminology before choosing a solution.

- **FILLED** `brainstorming` — intent/scope/approach discovery.
- **FILLED** `domain-modeling` — ubiquitous language, domain concepts, context boundaries, domain ADRs.
- **EMPTY** `requirements-engineering` — no accepted candidate yet. A previously considered `to-prd` candidate is not imported because the exact upstream GitHub source path was not verified in this pass.
- **EMPTY** `acceptance-criteria-and-spec-writing` — no accepted candidate yet.

Exit: outcome, domain language, constraints, and success criteria are sufficiently clear for design.

### Phase 2 — Design the solution

Goal: decide boundaries, interfaces, data shape, threat model, and user-facing design before implementation details dominate.

- **FILLED** `frontend-design` — visual/frontend design.
- **FILLED** `codebase-design` — deep modules, interfaces, seams, leverage, locality, testability.
- **PARTIAL** `software-architecture` — `codebase-design` covers module/interface architecture, but a broader system/solution-architecture candidate is still open.
- **FILLED** `supabase-postgres-best-practices` — Postgres schema, migrations, RLS, indexes, concurrency, diagnostics, query/connection concerns.
- **FILLED** `security-and-hardening` — threat-model-first secure design and implementation constraints.
- **EMPTY** `api-design` — no accepted general-purpose candidate yet.

Exit: relevant boundaries/contracts/data/security decisions are explicit enough to plan implementation.

### Phase 3 — Plan the implementation

- **FILLED** `writing-plans` — turn approved requirements/design into executable implementation steps.
- **FILLED** `documentation-and-adrs` — record significant decisions and contracts as they crystallize; use only when documentation is warranted.

Exit: affected files/interfaces/tests and sequencing are sufficiently defined.

### Phase 4 — Prepare isolated execution

- **FILLED** `using-git-worktrees` — isolated workspace when useful/supported.

Exit: workspace, baseline, and working branch are known.

### Phase 5 — Implement

- **FILLED** `test-driven-development` — failing-test-first behavior changes.
- **FILLED** `security-and-hardening` — apply security constraints while building security-relevant features.
- **FILLED** `supabase-postgres-best-practices` — apply before Postgres changes.
- **FILLED** `observability-and-instrumentation` — instrument production-facing behavior alongside implementation when relevant.
- **FILLED** `subagent-driven-development` — plan execution via separable agent tasks.
- **FILLED** `dispatching-parallel-agents` — parallel independent workstreams.
- **FILLED** `executing-plans` — direct plan execution when that mode is appropriate.

Orchestration skills are alternatives/complements, not a command to load all of them.

Exit: intended behavior exists and implementation-level checks are green.

### Phase 6 — Debug failures (loopback)

- **FILLED** `systematic-debugging` — root-cause investigation for failures/regressions/unexpected behavior.

After fixing, return to the phase that failed, then continue forward.

### Phase 7 — Verify quality

- **FILLED** `verification-before-completion` — fresh evidence before success claims.
- **FILLED** `performance-optimization` — evidence-led performance work when a performance requirement/regression exists.
- **EMPTY** `test-strategy` — no accepted candidate yet for test pyramid/coverage strategy.
- **EMPTY** `integration-contract-e2e-strategy` — no accepted dedicated candidate yet.

Exit: scope-appropriate tests/build/typecheck/lint/runtime/performance checks provide fresh evidence.

### Phase 8 — Review

- **FILLED** `requesting-code-review` — prepare/request review.
- **FILLED** `code-review` — standards + spec review.
- **FILLED** `receiving-code-review` — evaluate feedback before changing code.
- **FILLED** `improve-codebase-architecture` — optional maintenance/refactoring review for architecture friction; not mandatory for every change.

Findings can loop back to Design, Implement, or Debug; re-verify after material fixes.

### Phase 9 — Security review

- **FILLED** `security-review` — independent vulnerability/security audit.
- `security-and-hardening` belongs earlier in Design/Implement; do not replace the independent review with self-hardening.

Exit: relevant findings are fixed, explicitly accepted, or documented out of scope.

### Phase 10 — Integrate & deliver

- **FILLED** `ci-cd-and-automation` — automated quality gates and deployment pipeline.
- **FILLED** `finishing-a-development-branch` — branch integration/PR/preservation/cleanup.
- **FILLED** `shipping-and-launch` — production-readiness, staged rollout, launch monitoring, rollback.
- **PARTIAL** `release-management` — shipping-and-launch covers launch/reversibility; a dedicated versioning/changelog/release-governance candidate remains open.

Exit: requested integration/release action is verified or explicitly handed off.

### Phase 11 — Operate & learn

- **FILLED** `observability-and-instrumentation` — logs, metrics, traces, alerts, runbooks.
- **FILLED** `documentation-and-adrs` — durable operational/architecture knowledge when appropriate.
- **EMPTY** `incident-response` — no accepted vendor-neutral candidate yet.
- **EMPTY** `production-diagnosis` — no accepted dedicated candidate yet.
- **EMPTY** `postmortems` — no accepted dedicated candidate yet.

Exit depends on the operational goal: restored service, understood incident, updated runbook/ADR, or measured reliability improvement.

## Meta / maintenance capabilities

- `writing-skills` — create/modify/test Skill World skills.
- `using-superpowers` — upstream Superpowers conventions when specifically relevant.
- `improve-codebase-architecture` — existing-code architecture maintenance/refactoring.

## Selection algorithm

1. Identify the user's current lifecycle phase.
2. Check whether an earlier unresolved phase is a real prerequisite.
3. Read `skills/skill-loader/index/software-development.md`.
4. Select the smallest sufficient set of **FILLED** leaf skills.
5. Never load an **EMPTY** capability as though a skill existed.
6. Order selected skills according to this lifecycle.
7. After each phase, reassess whether the next selected phase is still necessary.
8. Findings/failures loop back to the earliest affected phase.
9. Before any completion claim, require fresh verification evidence.

## Fast paths

```text
Fix failing test
→ systematic-debugging → TDD → verification

Review PR
→ code-review → security-review if relevant/requested → receiving-code-review when acting on feedback

Design new Postgres-backed feature
→ discovery/domain-modeling as needed → codebase-design → security-and-hardening → supabase-postgres-best-practices → plan

Production launch
→ verification → review/security as required → ci-cd-and-automation → shipping-and-launch → observability
```

## Future expansion rule

When a new accepted skill fills an EMPTY/PARTIAL slot, update this orchestrator, the software-development index, `CATALOG.jsonl`, `SKILL_REGISTRY.md`, and provenance/license records. Do not append capabilities as a flat list.
