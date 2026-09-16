# Skill Index

This file is routing metadata. It is not a replacement for downstream `SKILL.md` files.

## Provenance invariant

Every imported skill must preserve its original collection and author in this repository. Keep a `PROVENANCE.md` beside locally copied third-party skills. Index entries must name the original author/source collection; reorganizing a skill locally must never erase its origin.

## Local skills

### frontend-design
- category: frontend / design
- author: Anthropic, PBC
- original_collection: `anthropics/skills`
- path: `skills/frontend-design/SKILL.md`
- provenance: `skills/frontend-design/PROVENANCE.md`
- use_when: Creating a new UI, redesigning/restyling an existing UI, defining visual direction, typography, palette, layout, responsive presentation, or critiquing frontend visual quality.
- triggers: frontend design, UI design, redesign, restyle, landing page, dashboard, visual hierarchy, typography, responsive UI, web design
- do_not_use_when: Backend-only work, database-only work, non-visual refactors, or bug fixes with no UI/design dimension.

### code-review
- category: engineering / code review
- author: Matt Pocock
- original_collection: `mattpocock/skills`
- path: `skills/code-review/SKILL.md`
- provenance: `skills/code-review/PROVENANCE.md`
- use_when: Reviewing a branch, PR, work-in-progress changes, or a diff since a fixed commit/branch/tag against repository standards and the originating spec.
- triggers: code review, review PR, review branch, review diff, review since, standards review, spec compliance
- do_not_use_when: The user only wants feedback interpreted after a review; route to `receiving-code-review`.

## Vendored collection: obra/superpowers

All entries below are physically stored in this repository. No personal mirror or upstream checkout is required at runtime.

- original_author: Jesse Vincent / obra
- original_collection: `obra/superpowers`
- snapshot: `b36e0829c6d0140e93cfef2ca599b1b07d4a7797`
- collection_provenance: `skills/_sources/obra-superpowers/PROVENANCE.md`
- collection_license: `skills/_sources/obra-superpowers/LICENSE.txt`

### brainstorming
- category: process / design
- path: `skills/brainstorming/SKILL.md`
- provenance: `skills/brainstorming/PROVENANCE.md`
- use_when: Exploring intent, requirements, product ideas, designs, or approaches before implementation.

### dispatching-parallel-agents
- category: process
- path: `skills/dispatching-parallel-agents/SKILL.md`
- provenance: `skills/dispatching-parallel-agents/PROVENANCE.md`
- use_when: Multiple independent workstreams can proceed in parallel without shared mutable state.

### executing-plans
- category: process
- path: `skills/executing-plans/SKILL.md`
- provenance: `skills/executing-plans/PROVENANCE.md`
- use_when: Executing an already-written implementation plan with checkpoints.

### finishing-a-development-branch
- category: git / process
- path: `skills/finishing-a-development-branch/SKILL.md`
- provenance: `skills/finishing-a-development-branch/PROVENANCE.md`
- use_when: Implementation is complete and branch integration, PR, preservation, or cleanup must be decided.

### receiving-code-review
- category: code review
- path: `skills/receiving-code-review/SKILL.md`
- provenance: `skills/receiving-code-review/PROVENANCE.md`
- use_when: Evaluating and responding to code review feedback before changing code.

### requesting-code-review
- category: code review
- path: `skills/requesting-code-review/SKILL.md`
- provenance: `skills/requesting-code-review/PROVENANCE.md`
- use_when: Preparing completed work for review and checking it against requirements.

### subagent-driven-development
- category: process
- path: `skills/subagent-driven-development/SKILL.md`
- provenance: `skills/subagent-driven-development/PROVENANCE.md`
- use_when: Executing a written plan through separable agent-owned tasks in the current session.

### systematic-debugging
- category: debugging
- path: `skills/systematic-debugging/SKILL.md`
- provenance: `skills/systematic-debugging/PROVENANCE.md`
- use_when: Bugs, test failures, regressions, performance problems, or unexpected behavior require root-cause investigation.

### test-driven-development
- category: testing / process
- path: `skills/test-driven-development/SKILL.md`
- provenance: `skills/test-driven-development/PROVENANCE.md`
- use_when: Implementing a feature, bug fix, refactor, or behavior change through a failing-test-first workflow.

### using-git-worktrees
- category: git
- path: `skills/using-git-worktrees/SKILL.md`
- provenance: `skills/using-git-worktrees/PROVENANCE.md`
- use_when: Feature work or plan execution benefits from an isolated workspace.

### using-superpowers
- category: meta
- path: `skills/using-superpowers/SKILL.md`
- provenance: `skills/using-superpowers/PROVENANCE.md`
- use_when: Upstream Superpowers bootstrap conventions themselves are relevant. `skill-loader` still remains the mandatory top-level router.

### verification-before-completion
- category: verification
- path: `skills/verification-before-completion/SKILL.md`
- provenance: `skills/verification-before-completion/PROVENANCE.md`
- use_when: Before claiming a task is complete, fixed, passing, ready, committed, or suitable for PR/merge.

### writing-plans
- category: planning
- path: `skills/writing-plans/SKILL.md`
- provenance: `skills/writing-plans/PROVENANCE.md`
- use_when: A concrete multi-step implementation plan should be written from an existing spec or requirements.

### writing-skills
- category: meta / skill authoring
- path: `skills/writing-skills/SKILL.md`
- provenance: `skills/writing-skills/PROVENANCE.md`
- use_when: Creating, modifying, testing, indexing, or improving skills themselves.

## Routing notes

- `skill-loader` always runs first and is not listed as a downstream candidate.
- Every downstream skill in this index resolves to a local path in `my-collection-skills`.
- Downstream skills must return to `skill-loader` when another skill becomes necessary.
- Do not load the whole collection; choose the smallest sufficient set.
- Do not treat keyword overlap alone as sufficient evidence to load a skill.
