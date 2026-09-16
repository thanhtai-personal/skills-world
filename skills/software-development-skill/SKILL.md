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
- **WEAK** / **`weak-skill`** — a loadable provisional candidate fills a capability that would otherwise be empty/partial, but its scope, specialization, maturity, or fit is weaker than Skill World's preferred skills for that slot. This label describes fit inside Skill World, not a judgment that the upstream project is low quality.
- **EMPTY** — the lifecycle slot is represented but no loadable candidate exists yet.

Prefer FILLED over WEAK when both cover the same need. Load the smallest sufficient set rather than every skill in a phase.

## Cross-cutting engineering rules

These skills can participate in multiple lifecycle phases when their condition is present:

- **FILLED** `source-driven-development` — verify version-sensitive framework/library decisions against authoritative current documentation.
- **FILLED** `security-and-hardening` — security constraints during design and implementation.
- **FILLED** `documentation-and-adrs` — preserve important decisions/contracts.
- **FILLED** `observability-and-instrumentation` — production telemetry alongside relevant features.

## Standard software-development lifecycle

### Phase 1 — Discover & clarify

Goal: understand the problem, users, domain, constraints, success criteria, and terminology before choosing a solution.

- **FILLED** `brainstorming` — intent/scope/approach discovery.
- **FILLED** `domain-modeling` — ubiquitous language, domain concepts, context boundaries.
- **FILLED** `requirements-engineering` → `spec-driven-development` — assumptions, objective, scope, boundaries, capability decomposition, success criteria.
- **FILLED** `acceptance-criteria-and-spec-writing` → `spec-driven-development` — testable success criteria and living specifications.
- **WEAK supplemental** `prd` — product-oriented PRD format when explicitly useful; no longer the primary requirements skill.

Exit: outcome, domain language, constraints, and success criteria are sufficiently clear for design.

### Phase 2 — Design the solution

Goal: decide boundaries, interfaces, data shape, threat model, and user-facing design before implementation details dominate.

- **FILLED** `frontend-design` — visual/UX direction.
- **FILLED** `codebase-design` — deep modules, interfaces, seams, locality, testability.
- **WEAK** `software-architecture` → `architecture-patterns` — Clean/Hexagonal/DDD application architecture; broader system architecture remains a replacement target.
- **FILLED** `supabase-postgres-best-practices` — Postgres schema/migrations/RLS/indexes/concurrency/diagnostics.
- **FILLED** `security-and-hardening` — threat-model-first secure design.
- **WEAK** `api-design` → `api-and-interface-design` — contract-first API/interface design.
- **FILLED when version-sensitive** `source-driven-development` — verify current framework/platform design guidance before committing to external APIs.

Exit: relevant boundaries/contracts/data/security decisions are explicit enough to plan implementation.

### Phase 3 — Plan the implementation

- **FILLED** `writing-plans` — turn approved spec/design into executable implementation steps.
- **FILLED** `documentation-and-adrs` — record significant decisions and contracts when warranted.

Exit: affected files/interfaces/tests and sequencing are sufficiently defined.

### Phase 4 — Prepare isolated execution

- **FILLED** `using-git-worktrees` — isolated workspace when useful/supported.
- **FILLED** `git-workflow-and-versioning` — repository branching/commit/versioning discipline where relevant.

Exit: workspace, baseline, branch, and repository workflow are known.

### Phase 5 — Implement

- **FILLED** `test-driven-development` — failing-test-first behavior changes.
- **FILLED** `frontend-ui-engineering` — production frontend implementation for user-facing web changes; use after/with `frontend-design` when visual direction is involved.
- **FILLED** `source-driven-development` — framework/library implementation when correctness depends on current versions/docs.
- **FILLED** `security-and-hardening` — security constraints for security-relevant work.
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
- **FILLED** `performance-optimization` — evidence-led performance work for measured requirements/regressions.
- **FILLED** `accessibility` — WCAG 2.2 evidence-led accessibility audit/improvement for web UI.
- **FILLED** `browser-testing-with-devtools` — real-browser DOM/console/network/a11y/visual/performance verification when compatible tooling is available.
- **WEAK** `test-strategy` → `test-gap-audit` — behavior-centered gap audit, not a complete organization-level test strategy.
- **WEAK** `integration-contract-e2e-strategy` → `webapp-testing` — useful browser/E2E coverage; service contract strategy remains under-covered.

Exit: scope-appropriate tests/build/typecheck/lint/runtime/browser/accessibility/performance checks provide fresh evidence.

### Phase 8 — Review & simplify

- **FILLED** `requesting-code-review` — prepare/request review.
- **FILLED** `code-review` — standards + spec review.
- **FILLED** `receiving-code-review` — evaluate feedback before changing code.
- **FILLED** `code-simplification` — optional behavior-preserving clarity pass after correctness is established.
- **FILLED** `improve-codebase-architecture` — optional architecture-maintenance review.

Findings can loop back to Design, Implement, or Debug; re-verify after material fixes.

### Phase 9 — Security review

- **FILLED** `security-review` — independent vulnerability/security audit.
- `security-and-hardening` belongs earlier in Design/Implement; do not replace independent review with self-hardening.

Exit: relevant findings are fixed, explicitly accepted, or documented out of scope.

### Phase 10 — Integrate & deliver

- **FILLED** `git-workflow-and-versioning` — atomic history, tags/versioning/changelog contract where applicable.
- **FILLED** `ci-cd-and-automation` — automated quality gates and deployment pipeline.
- **FILLED** `finishing-a-development-branch` — branch integration/PR/preservation/cleanup.
- **FILLED** `shipping-and-launch` — production-readiness, staged rollout, monitoring, rollback.
- **WEAK** `release-management` → `changelog-automation` — dedicated release-note/changelog automation remains narrower than complete release governance; use with `git-workflow-and-versioning` and `shipping-and-launch`.

Exit: requested integration/release action is verified or explicitly handed off.

### Phase 11 — Operate & learn

- **FILLED** `observability-and-instrumentation` — logs, metrics, traces, alerts, runbooks.
- **FILLED** `documentation-and-adrs` — durable operational/architecture knowledge.
- **WEAK** `incident-response` → `incident-runbook-templates`.
- **WEAK** `production-diagnosis` → `diagnosing-bugs`.
- **WEAK** `postmortems` → `postmortem-writing`.

Exit depends on the operational goal: restored service, understood incident, updated runbook/postmortem, or measured reliability improvement.

### Phase 12 — Maintain & evolve

Goal: safely reduce complexity, replace aging systems, and remove obsolete contracts without destabilizing users/data.

- **FILLED** `deprecation-and-migration` — API/system/feature/library/schema deprecation and migration, including coexistence and expand/contract strategies.
- **FILLED** `code-simplification` — behavior-preserving maintainability improvements.
- **FILLED** `improve-codebase-architecture` — deeper architecture refactoring where measured friction justifies it.
- **FILLED** `source-driven-development` — verify migration/deprecation guidance against current upstream versions when external technologies are involved.

Maintenance findings may create a new lifecycle loop starting at Discover/Design for the replacement system.

## Meta capabilities

- `writing-skills` — create/modify/test Skill World skills.
- `using-superpowers` — upstream Superpowers conventions when specifically relevant.

## Selection algorithm

1. Identify the user's current lifecycle phase.
2. Check whether an earlier unresolved phase is a real prerequisite.
3. Read `skills/skill-loader/index/software-development.md`.
4. Select the smallest sufficient leaf set; prefer FILLED over WEAK for equivalent coverage.
5. Add cross-cutting skills only when their actual condition applies.
6. Order selected skills according to lifecycle/dependencies.
7. Reassess after each phase; do not continue mechanically.
8. Failures/findings loop back to the earliest affected phase.
9. Before any completion claim, require fresh verification evidence.

## Fast paths

```text
New substantial feature
→ brainstorming/domain-modeling as needed → spec-driven-development → design → writing-plans → implement → verify → review

Frontend feature
→ frontend-design when visual direction is needed → frontend-ui-engineering → TDD → browser-testing/accessibility → verification → review

Framework-version-sensitive feature
→ source-driven-development → relevant design/implementation skill → verification

Legacy migration
→ discover consumers → design replacement → deprecation-and-migration → incremental implementation → verify → staged release

Fix failing test
→ systematic-debugging → TDD → verification

Production incident
→ incident-runbook-templates [weak] → diagnosing-bugs [weak] as needed → observability → postmortem-writing [weak]
```

## Future expansion rule

A `weak-skill` is an explicit replacement target, not a permanent best-in-class claim. When a stronger verified candidate appears, compare source quality, adoption, license, scope fit, and overlap; preserve history and update the orchestrator, software-development index, `CATALOG.jsonl`, `SKILL_REGISTRY.md`, and provenance/license records together.
