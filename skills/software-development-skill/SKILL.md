---
name: software-development-skill
description: Mandatory orchestration skill for software-development requests. Runs after skill-loader, maps the request to the standard software-development lifecycle, and selects downstream software skills in lifecycle order.
---

# Software Development Skill

This is the **group-level orchestrator** for every software-development request in Skill World. It does not replace `skill-loader`; it is selected by `skill-loader` when the request belongs to the software-development world.

## Position in the routing hierarchy

```text
user request
  ↓
skill-loader
  ↓
software-development-skill
  ↓
software-development index
  ↓
selected downstream skills in lifecycle order
```

No software-development leaf skill should be loaded directly from the root loader. The loader first enters this wrapper, and this wrapper decides which software-development phases and leaf skills are relevant.

## Core rule

Treat software work as a lifecycle, not as a bag of independent skills.

Use the **earliest relevant phase first**, then move forward. Do not load every skill mechanically. Skip phases that are genuinely irrelevant to the user's goal, but never execute a later phase in a way that silently assumes an earlier unresolved decision.

When the user starts in the middle of the lifecycle (for example, "review this PR" or "debug this failing test"), enter at that phase, inspect enough upstream context to work safely, and continue only through phases relevant to the request.

## Standard software-development lifecycle

### Phase 1 — Discover & clarify

**Purpose:** understand the problem before choosing a solution.

Current skills:
1. `brainstorming` — clarify intent, scope, constraints, and candidate approaches before implementation when discovery/design work is needed.

Future capabilities expected here:
- requirements engineering
- acceptance criteria / specification writing

**Exit condition:** the requested outcome, constraints, and success criteria are clear enough for design/planning.

---

### Phase 2 — Design the solution

**Purpose:** decide what should be built and how the major parts fit together before implementation details dominate.

Current skills:
2. `frontend-design` — when visual/frontend design is part of the problem.

Future capabilities expected here:
- software architecture
- API design
- database/schema design
- threat modeling

**Exit condition:** relevant design decisions and boundaries are explicit enough to plan implementation.

---

### Phase 3 — Plan the implementation

**Purpose:** convert approved requirements/design into an executable change plan.

Current skills:
3. `writing-plans` — create a concrete multi-step implementation plan when the work is substantial enough to require one.

**Exit condition:** files/components/interfaces/tests and implementation sequence are sufficiently defined.

---

### Phase 4 — Prepare isolated execution

**Purpose:** create a safe working context before changing code.

Current skills:
4. `using-git-worktrees` — isolate feature/plan execution when useful and supported.

**Exit condition:** the implementation workspace and baseline are known.

---

### Phase 5 — Implement

**Purpose:** change the system while preserving correctness and traceability.

Current skills, selected by execution style:
5. `test-driven-development` — failing-test-first implementation for features, bug fixes, refactors, and behavior changes.
6. `subagent-driven-development` — execute a written plan through separable agent-owned tasks when subagents are appropriate.
7. `dispatching-parallel-agents` — parallelize genuinely independent workstreams.
8. `executing-plans` — directly execute an existing plan when subagent-driven execution is not the chosen mode.

These are not a requirement to load all four. `test-driven-development` governs implementation discipline; the orchestration skills determine how work is distributed/executed.

**Exit condition:** intended behavior is implemented and relevant implementation-level checks are green.

---

### Phase 6 — Debug failures

**Purpose:** investigate unexpected behavior by root cause rather than patching symptoms.

Current skills:
9. `systematic-debugging` — use whenever bugs, regressions, failing tests, performance anomalies, or unexpected behavior appear.

Debugging is a **loopback phase**: after root cause and fix, return to the phase whose work failed, then continue forward.

**Exit condition:** root cause is understood, the fix is implemented, and the original failure is reproducibly resolved.

---

### Phase 7 — Verify quality

**Purpose:** prove the change behaves as intended before review/release claims.

Current skills:
10. `verification-before-completion` — require fresh evidence before completion/fixed/passing claims.

Future capabilities expected here:
- test strategy
- integration/contract/E2E testing strategy
- performance engineering

**Exit condition:** appropriate tests/build/typecheck/lint/runtime checks have produced fresh evidence.

---

### Phase 8 — Review

**Purpose:** independently evaluate correctness, scope, standards, and feedback before integration.

Current skills:
11. `requesting-code-review` — prepare and request focused review.
12. `code-review` — review a branch/PR/diff against standards and specification.
13. `receiving-code-review` — evaluate review feedback rigorously before implementing it.

Review findings can loop back to Implementation, Debugging, or Design depending on root cause. Re-run verification after material fixes.

**Exit condition:** blocking review findings are resolved or explicitly adjudicated.

---

### Phase 9 — Security review

**Purpose:** evaluate the change/system for exploitable security weaknesses before release when security review is relevant.

Current skills:
14. `security-review` — inspect vulnerability classes, secrets, dependencies, access control, and cross-file attacker-controlled data flow.

Security findings loop back to Design or Implementation as appropriate, then require verification and re-review.

**Exit condition:** relevant security findings are fixed, accepted with explicit rationale, or recorded as out of scope.

---

### Phase 10 — Integrate & deliver

**Purpose:** safely integrate completed work into the repository delivery flow.

Current skills:
15. `finishing-a-development-branch` — verify branch state and choose merge, PR, preservation, or cleanup.

Future capabilities expected here:
- CI/CD
- release management
- deployment verification / rollback

**Exit condition:** the requested integration/delivery action is complete or explicitly handed off.

---

### Phase 11 — Operate & learn

**Purpose:** keep production software observable, recoverable, and improvable after delivery.

No dedicated leaf skills yet. Future capabilities expected here:
- observability engineering
- incident response
- production diagnosis
- postmortems
- technical documentation / runbooks

This phase is intentionally represented now so future operational skills have a correct place in the lifecycle.

## Meta capability

The following skills maintain the skill system itself rather than a product's SDLC:

- `writing-skills`
- `using-superpowers`

They live under the software-development group today because they support development-agent workflows, but they are **meta skills**, not lifecycle phases. Route them only when the task is about skills/process infrastructure itself.

## Selection algorithm

For each software request:

1. Identify the user's current lifecycle phase.
2. Identify any earlier unresolved phase that is required for safe progress.
3. Read `skills/skill-loader/index/software-development.md`.
4. Select only the leaf skills needed for the current task.
5. Order them according to the lifecycle above.
6. Execute the first selected skill.
7. After each phase, reassess whether the next selected phase is still necessary.
8. If a failure/finding changes the problem, loop back to the earliest affected phase instead of continuing mechanically.
9. Before any completion claim, ensure verification evidence exists.

## Fast paths

The standard lifecycle does **not** mean every request must begin at Phase 1.

Examples:

```text
"Design a dashboard"
→ Discover if requirements are unclear
→ frontend-design
→ planning/implementation only if requested

"Fix this failing test"
→ systematic-debugging
→ test-driven-development
→ verification-before-completion

"Review this PR"
→ code-review
→ security-review only if requested/relevant
→ receiving-code-review only when acting on feedback

"Implement this approved plan"
→ using-git-worktrees (when needed)
→ TDD + execution orchestration
→ verification
→ review
→ finish branch
```

## Quality gates

Do not advance past these gates without evidence appropriate to the task:

- **Discovery gate:** goal/constraints are sufficiently understood.
- **Design gate:** major boundaries/contracts relevant to the task are decided.
- **Implementation gate:** changed behavior has appropriate tests/checks.
- **Verification gate:** fresh validation supports completion claims.
- **Review gate:** blocking review/security findings are resolved or explicitly accepted.
- **Delivery gate:** integration/release action is explicit and verified.

## Future expansion rule

New software-development skills should be added to the lifecycle phase they strengthen, not appended as a flat list. When a new skill introduces a genuinely new SDLC capability, update:

1. this orchestrator;
2. `skills/skill-loader/index/software-development.md`;
3. `skills/skill-loader/CATALOG.jsonl`;
4. `SKILL_REGISTRY.md`;
5. provenance/license records when third-party.
