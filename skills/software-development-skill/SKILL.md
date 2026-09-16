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

Treat software development as a lifecycle, not a bag of unrelated skills. Enter at the earliest phase genuinely required for the user's task, then move forward. Do not force every phase, but do not silently skip an unresolved dependency.

## Capability status legend

- **FILLED** — an accepted local skill provides a good fit for the capability.
- **WEAK** / **`weak-skill`** — a loadable provisional candidate fills a capability that would otherwise be empty/partial, but its scope, specialization, maturity, or fit is weaker than Skill World's preferred skills for that slot. This label describes **fit inside Skill World**, not a judgment that the upstream project is low quality. Replace it when a materially stronger candidate is verified.
- **EMPTY** — the lifecycle slot is represented but no loadable candidate exists yet.

When two candidates cover the same need, prefer **FILLED** over **WEAK**. A WEAK skill is still usable when it is the best exact capability match.

## Standard software-development lifecycle

### Phase 1 — Discover & clarify

Goal: understand the problem, users, domain, constraints, success criteria, and terminology before choosing a solution.

- **FILLED** `brainstorming` — intent/scope/approach discovery.
- **FILLED** `domain-modeling` — ubiquitous language, domain concepts, context boundaries, domain ADRs.
- **WEAK** `requirements-engineering` → `prd` — provisional requirements capture through a structured PRD.
- **WEAK** `acceptance-criteria-and-spec-writing` → `prd` — measurable acceptance criteria and non-goals; load once when both capabilities are needed.

Exit: outcome, domain language, constraints, and success criteria are sufficiently clear for design.

### Phase 2 — Design the solution

Goal: decide boundaries, interfaces, data shape, threat model, and user-facing design before implementation details dominate.

- **FILLED** `frontend-design` — visual/frontend design.
- **FILLED** `codebase-design` — deep modules, interfaces, seams, leverage, locality, testability.
- **WEAK** `software-architecture` → `architecture-patterns` — Clean/Hexagonal/DDD architecture patterns; useful for backend/application structure, but still weaker than a full solution-architecture capability.
- **FILLED** `supabase-postgres-best-practices` — Postgres schema, migrations, RLS, indexes, concurrency, diagnostics, query/connection concerns.
- **FILLED** `security-and-hardening` — threat-model-first secure design and implementation constraints.
- **WEAK** `api-design` → `api-and-interface-design` — contract-first API/interface design, compatibility, errors, pagination, validation, and idempotency.

Exit: relevant boundaries/contracts/data/security decisions are explicit enough to plan implementation.

### Phase 3 — Plan the implementation

- **FILLED** `writing-plans` — turn approved requirements/design into executable implementation steps.
- **FILLED** `documentation-and-adrs` — record significant decisions and contracts when warranted.

Exit: affected files/interfaces/tests and sequencing are sufficiently defined.

### Phase 4 — Prepare isolated execution

- **FILLED** `using-git-worktrees` — isolated workspace when useful/supported.

Exit: workspace, baseline, and working branch are known.

### Phase 5 — Implement

- **FILLED** `test-driven-development` — failing-test-first behavior changes.
- **FILLED** `security-and-hardening` — security constraints while building security-relevant features.
- **FILLED** `supabase-postgres-best-practices` — before Postgres changes.
- **FILLED** `observability-and-instrumentation` — production-facing instrumentation when relevant.
- **FILLED** `subagent-driven-development` — execution via separable agent tasks.
- **FILLED** `dispatching-parallel-agents` — parallel independent workstreams.
- **FILLED** `executing-plans` — direct plan execution when appropriate.

Orchestration skills are alternatives/complements, not a command to load all of them.

Exit: intended behavior exists and implementation-level checks are green.

### Phase 6 — Debug failures (loopback)

- **FILLED** `systematic-debugging` — root-cause investigation for failures/regressions/unexpected behavior.

After fixing, return to the phase that failed, then continue forward.

### Phase 7 — Verify quality

- **FILLED** `verification-before-completion` — fresh evidence before success claims.
- **FILLED** `performance-optimization` — evidence-led performance work when a performance requirement/regression exists.
- **WEAK** `test-strategy` → `test-gap-audit` — behavior-centered audit of missing/weak coverage; provisional because it is an audit rather than a complete organization-level test strategy.
- **WEAK** `integration-contract-e2e-strategy` → `webapp-testing` — real-browser/E2E workflow coverage; provisional because contract/service-integration strategy remains under-covered.

Exit: scope-appropriate tests/build/typecheck/lint/runtime/performance checks provide fresh evidence.

### Phase 8 — Review

- **FILLED** `requesting-code-review` — prepare/request review.
- **FILLED** `code-review` — standards + spec review.
- **FILLED** `receiving-code-review` — evaluate feedback before changing code.
- **FILLED** `improve-codebase-architecture` — optional maintenance/refactoring review for architecture friction; not mandatory for every change.

Findings can loop back to Design, Implement, or Debug; re-verify after material fixes.

### Phase 9 — Security review

- **FILLED** `security-review` — independent vulnerability/security audit.
- `security-and-hardening` belongs earlier in Design/Implement; do not replace independent review with self-hardening.

Exit: relevant findings are fixed, explicitly accepted, or documented out of scope.

### Phase 10 — Integrate & deliver

- **FILLED** `ci-cd-and-automation` — automated quality gates and deployment pipeline.
- **FILLED** `finishing-a-development-branch` — branch integration/PR/preservation/cleanup.
- **FILLED** `shipping-and-launch` — production-readiness, staged rollout, launch monitoring, rollback.
- **WEAK** `release-management` → `changelog-automation` — semantic versioning, Conventional Commits, changelog/release-note automation, breaking-change documentation; pair with `shipping-and-launch` for rollout/rollback.

Exit: requested integration/release action is verified or explicitly handed off.

### Phase 11 — Operate & learn

- **FILLED** `observability-and-instrumentation` — logs, metrics, traces, alerts, runbooks.
- **FILLED** `documentation-and-adrs` — durable operational/architecture knowledge.
- **WEAK** `incident-response` → `incident-runbook-templates` — severity/triage/mitigation/recovery/communication/runbook workflow.
- **WEAK** `production-diagnosis` → `diagnosing-bugs` — tight-reproduction-loop diagnosis for hard/production-like failures.
- **WEAK** `postmortems` → `postmortem-writing` — blameless timeline/RCA/action-item workflow.

Exit depends on the operational goal: restored service, understood incident, updated runbook/postmortem, or measured reliability improvement.

## Meta / maintenance capabilities

- `writing-skills` — create/modify/test Skill World skills.
- `using-superpowers` — upstream Superpowers conventions when specifically relevant.
- `improve-codebase-architecture` — existing-code architecture maintenance/refactoring.

## Selection algorithm

1. Identify the user's current lifecycle phase.
2. Check whether an earlier unresolved phase is a real prerequisite.
3. Read `skills/skill-loader/index/software-development.md`.
4. Select the smallest sufficient leaf set. Prefer **FILLED** over **WEAK** when both genuinely cover the same capability.
5. Use a **WEAK** skill when it is the best indexed exact capability match; retain awareness of the limitation stated in the index.
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

Design backend/service architecture
→ domain-modeling as needed → architecture-patterns [weak] → codebase-design → ADRs → plan

Prepare a versioned release
→ verification/review → changelog-automation [weak] → ci-cd-and-automation → shipping-and-launch → observability

Production incident
→ incident-runbook-templates [weak] → diagnosing-bugs [weak] as needed → observability → postmortem-writing [weak]
```

## Future expansion rule

A `weak-skill` is an explicit replacement target, not a permanent claim of best-in-class coverage. When a stronger verified candidate appears, compare source quality, adoption, license, scope fit, and overlap; then promote the stronger skill and preserve the old skill's registry/provenance history. Update this orchestrator, the software-development index, `CATALOG.jsonl`, `SKILL_REGISTRY.md`, and provenance/license records together.
