# Skill Index

This file is routing metadata. It is not a replacement for downstream `SKILL.md` files.

## Provenance invariant

Every imported skill must preserve its original collection and author in this repository. Keep a `PROVENANCE.md` beside locally copied third-party skills. Index entries must name the original author/source collection; reorganizing a skill locally must never erase its origin.

## Local skills

### frontend-design
- category: frontend / design
- author: Anthropic, PBC
- original_collection: `anthropics/skills`
- source: Anthropic `anthropics/skills`
- path: `skills/frontend-design/SKILL.md`
- provenance: `skills/frontend-design/PROVENANCE.md`
- use_when: Creating a new UI, redesigning/restyling an existing UI, defining visual direction, typography, palette, layout, responsive presentation, or critiquing frontend visual quality.
- triggers: frontend design, UI design, redesign, restyle, landing page, dashboard, visual hierarchy, typography, responsive UI, web design
- do_not_use_when: Backend-only work, database-only work, non-visual refactors, or bug fixes with no UI/design dimension.

### code-review
- category: engineering / code review
- author: Matt Pocock
- original_collection: `mattpocock/skills`
- source: Matt Pocock `mattpocock/skills`
- path: `skills/code-review/SKILL.md`
- provenance: `skills/code-review/PROVENANCE.md`
- use_when: Reviewing a branch, PR, work-in-progress changes, or a diff since a fixed commit/branch/tag against repository standards and the originating spec.
- triggers: code review, review PR, review branch, review diff, review since, standards review, spec compliance
- do_not_use_when: The user only wants feedback interpreted after a review; route to `receiving-code-review` for that workflow.

## External collection: obra/superpowers

- original_author: Jesse Vincent / obra
- original_collection: `obra/superpowers`
- source: `https://github.com/obra/superpowers`
- personal_mirror: `https://github.com/thanhtai-personal/superpowers/tree/main/skills`

### brainstorming
- category: process
- external_path: `skills/brainstorming/SKILL.md`
- use_when: Exploring requirements, product ideas, designs, or approaches before implementation.

### dispatching-parallel-agents
- category: process
- external_path: `skills/dispatching-parallel-agents/SKILL.md`
- use_when: Multiple independent workstreams can proceed in parallel.

### executing-plans
- category: process
- external_path: `skills/executing-plans/SKILL.md`
- use_when: Executing an already-written implementation plan with checkpoints.

### finishing-a-development-branch
- category: git / process
- external_path: `skills/finishing-a-development-branch/SKILL.md`
- use_when: Development is complete and the branch needs integration, PR, cleanup, or finalization.

### receiving-code-review
- category: code review
- external_path: `skills/receiving-code-review/SKILL.md`
- use_when: Evaluating and responding to review feedback before changing code.

### requesting-code-review
- category: code review
- external_path: `skills/requesting-code-review/SKILL.md`
- use_when: Preparing completed work for review and checking it against requirements.

### subagent-driven-development
- category: process
- external_path: `skills/subagent-driven-development/SKILL.md`
- use_when: Executing a plan through separable agent-owned tasks in the same session.

### systematic-debugging
- category: debugging
- external_path: `skills/systematic-debugging/SKILL.md`
- use_when: Bugs, test failures, regressions, or unexpected behavior require root-cause investigation.

### test-driven-development
- category: testing / process
- external_path: `skills/test-driven-development/SKILL.md`
- use_when: Implementing behavior through a failing-test-first workflow.

### using-git-worktrees
- category: git
- external_path: `skills/using-git-worktrees/SKILL.md`
- use_when: Isolated working trees are useful for parallel or protected development work.

### using-superpowers
- category: meta
- external_path: `skills/using-superpowers/SKILL.md`
- use_when: Upstream Superpowers bootstrap behavior is specifically needed. In this collection, `skill-loader` remains the mandatory top-level router.

### verification-before-completion
- category: verification
- external_path: `skills/verification-before-completion/SKILL.md`
- use_when: Before claiming a task is complete, fixed, passing, or ready.

### writing-plans
- category: planning
- external_path: `skills/writing-plans/SKILL.md`
- use_when: A multi-step implementation plan should be written before editing.

### writing-skills
- category: meta / skill authoring
- external_path: `skills/writing-skills/SKILL.md`
- use_when: Creating, modifying, testing, or improving skills themselves.

## Routing notes

- `skill-loader` always runs first and is not listed as a downstream candidate.
- External entries identify skills in the personal `superpowers` mirror. A runtime must have access to that source before it can load them.
- Do not treat keyword overlap alone as sufficient evidence to load a skill.
