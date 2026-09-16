# Software Development Skills

Canonical leaf index for `software-development-skill`. Lifecycle ordering and strength semantics live in `skills/software-development-skill/SKILL.md`.

`weak-skill` means provisional best available fit inside Skill World, not low upstream quality. The loader may use it, but should prefer a stronger accepted skill when equivalent coverage exists.

## Discover & clarify

- `brainstorming` → `skills/brainstorming/SKILL.md` — Jesse Vincent / obra / `obra/superpowers`
- `domain-modeling` → `skills/domain-modeling/SKILL.md` — Matt Pocock / `mattpocock/skills`
- **WEAK `weak-skill`:** `requirements-engineering` → `skills/prd/SKILL.md` — GitHub / `github/awesome-copilot`; PRD-oriented rather than full requirements engineering.
- **WEAK `weak-skill`:** `acceptance-criteria-and-spec-writing` → `skills/prd/SKILL.md` — same local skill; rigorous spec engineering remains a replacement target.

## Design

- `frontend-design` → `skills/frontend-design/SKILL.md` — Anthropic / `anthropics/skills`
- `codebase-design` → `skills/codebase-design/SKILL.md` — Matt Pocock / `mattpocock/skills`
- **WEAK `weak-skill`:** `software-architecture` → `skills/architecture-patterns/SKILL.md` — Seth Hobson / `wshobson/agents`; strong Clean/Hexagonal/DDD backend architecture patterns, incomplete for broad solution/system architecture.
- `supabase-postgres-best-practices` → `skills/supabase-postgres-best-practices/SKILL.md` — Supabase / `supabase/agent-skills`
- `security-and-hardening` → `skills/security-and-hardening/SKILL.md` — Addy Osmani / `addyosmani/agent-skills`
- **WEAK `weak-skill`:** `api-design` → `skills/api-and-interface-design/SKILL.md` — Addy Osmani / `addyosmani/agent-skills`; broad interface guidance rather than deep API governance.

## Plan

- `writing-plans` → `skills/writing-plans/SKILL.md` — Jesse Vincent / obra
- `documentation-and-adrs` → `skills/documentation-and-adrs/SKILL.md` — Addy Osmani / `addyosmani/agent-skills`

## Prepare

- `using-git-worktrees` → `skills/using-git-worktrees/SKILL.md` — Jesse Vincent / obra

## Implement / orchestration

- `test-driven-development` → `skills/test-driven-development/SKILL.md` — Jesse Vincent / obra
- `subagent-driven-development` → `skills/subagent-driven-development/SKILL.md` — Jesse Vincent / obra
- `dispatching-parallel-agents` → `skills/dispatching-parallel-agents/SKILL.md` — Jesse Vincent / obra
- `executing-plans` → `skills/executing-plans/SKILL.md` — Jesse Vincent / obra
- `security-and-hardening` → `skills/security-and-hardening/SKILL.md`
- `supabase-postgres-best-practices` → `skills/supabase-postgres-best-practices/SKILL.md`
- `observability-and-instrumentation` → `skills/observability-and-instrumentation/SKILL.md`

## Debug loop

- `systematic-debugging` → `skills/systematic-debugging/SKILL.md` — Jesse Vincent / obra

## Verify quality

- `verification-before-completion` → `skills/verification-before-completion/SKILL.md` — Jesse Vincent / obra
- `performance-optimization` → `skills/performance-optimization/SKILL.md` — Addy Osmani / `addyosmani/agent-skills`
- **WEAK `weak-skill`:** `test-strategy` → `skills/test-gap-audit/SKILL.md` — GitHub / `github/awesome-copilot`; strong gap audit, incomplete as an organization-wide test strategy.
- **WEAK `weak-skill`:** `integration-contract-e2e-strategy` → `skills/webapp-testing/SKILL.md` — GitHub / `github/awesome-copilot`; browser/E2E-heavy and does not fully cover service contract strategy.

## Review

- `requesting-code-review` → `skills/requesting-code-review/SKILL.md` — Jesse Vincent / obra
- `code-review` → `skills/code-review/SKILL.md` — Matt Pocock / `mattpocock/skills`
- `receiving-code-review` → `skills/receiving-code-review/SKILL.md` — Jesse Vincent / obra
- `improve-codebase-architecture` → `skills/improve-codebase-architecture/SKILL.md` — Matt Pocock / `mattpocock/skills`

## Security review

- `security-review` → `skills/security-review/SKILL.md` — GitHub / `github/awesome-copilot`

## Integrate & deliver

- `ci-cd-and-automation` → `skills/ci-cd-and-automation/SKILL.md` — Addy Osmani / `addyosmani/agent-skills`
- `finishing-a-development-branch` → `skills/finishing-a-development-branch/SKILL.md` — Jesse Vincent / obra
- **WEAK `weak-skill`:** `release-management` → `skills/changelog-automation/SKILL.md` — Seth Hobson / `wshobson/agents`; versioning/changelog/release-note automation, incomplete for full release governance.
- `shipping-and-launch` → `skills/shipping-and-launch/SKILL.md` — Addy Osmani / `addyosmani/agent-skills`

## Operate & learn

- `observability-and-instrumentation` → `skills/observability-and-instrumentation/SKILL.md` — Addy Osmani / `addyosmani/agent-skills`
- `documentation-and-adrs` → `skills/documentation-and-adrs/SKILL.md` — Addy Osmani / `addyosmani/agent-skills`
- **WEAK `weak-skill`:** `incident-response` → `skills/incident-runbook-templates/SKILL.md` — Seth Hobson / `wshobson/agents`; runbook-centric provisional response workflow.
- **WEAK `weak-skill`:** `production-diagnosis` → `skills/diagnosing-bugs/SKILL.md` — Matt Pocock / `mattpocock/skills`; strong hard-bug diagnosis, partial fit for production operations.
- **WEAK `weak-skill`:** `postmortems` → `skills/postmortem-writing/SKILL.md` — Seth Hobson / `wshobson/agents`; standalone blameless postmortem workflow, limited operational integration.

## Meta

- `writing-skills` → `skills/writing-skills/SKILL.md` — Jesse Vincent / obra
- `using-superpowers` → `skills/using-superpowers/SKILL.md` — Jesse Vincent / obra

Every imported leaf keeps a sibling `PROVENANCE.md`. Weak skills are fully loadable leaves but remain explicit replacement targets.
