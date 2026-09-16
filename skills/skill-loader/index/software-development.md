# Software Development Skills

Canonical leaf index for the `software-development-skill` orchestrator. The lifecycle/order rules live in `skills/software-development-skill/SKILL.md`; this file describes leaf capabilities and locations.

## design-ui

### frontend-design
- phase: Design
- path: `skills/frontend-design/SKILL.md`
- author/source: Anthropic, PBC / `anthropics/skills`
- use_when: Creating/redesigning/restyling frontend UI, defining visual direction, typography, palette, layout, responsive presentation, or critiquing frontend visual quality.
- triggers: frontend design, UI design, redesign, restyle, landing page, dashboard, visual hierarchy, responsive UI

## planning-workflow

### brainstorming
- phase: Discover
- path: `skills/brainstorming/SKILL.md`
- author/source: Jesse Vincent / obra / `obra/superpowers`
- use_when: Exploring intent, requirements, design, or approaches before implementation.

### writing-plans
- phase: Plan
- path: `skills/writing-plans/SKILL.md`
- author/source: Jesse Vincent / obra / `obra/superpowers`
- use_when: Turning an approved spec/requirements into a concrete multi-step implementation plan.

### executing-plans
- phase: Implement
- path: `skills/executing-plans/SKILL.md`
- author/source: Jesse Vincent / obra / `obra/superpowers`
- use_when: Executing an existing implementation plan directly with validation checkpoints.

## implementation-orchestration

### dispatching-parallel-agents
- phase: Implement
- path: `skills/dispatching-parallel-agents/SKILL.md`
- author/source: Jesse Vincent / obra / `obra/superpowers`
- use_when: Multiple independent workstreams can proceed concurrently.

### subagent-driven-development
- phase: Implement
- path: `skills/subagent-driven-development/SKILL.md`
- author/source: Jesse Vincent / obra / `obra/superpowers`
- use_when: Executing a written plan through separable agent-owned tasks in the same session.

## debugging

### systematic-debugging
- phase: Debug (loopback)
- path: `skills/systematic-debugging/SKILL.md`
- author/source: Jesse Vincent / obra / `obra/superpowers`
- use_when: Bugs, regressions, test failures, performance problems, or unexpected behavior require root-cause investigation.

## testing-verification

### test-driven-development
- phase: Implement
- path: `skills/test-driven-development/SKILL.md`
- author/source: Jesse Vincent / obra / `obra/superpowers`
- use_when: Implementing features/bug fixes/refactors with a failing-test-first cycle.

### verification-before-completion
- phase: Verify
- path: `skills/verification-before-completion/SKILL.md`
- author/source: Jesse Vincent / obra / `obra/superpowers`
- use_when: Before claiming work is complete, fixed, passing, ready, committed, or suitable for PR/merge.

## code-review

### requesting-code-review
- phase: Review
- path: `skills/requesting-code-review/SKILL.md`
- author/source: Jesse Vincent / obra / `obra/superpowers`
- use_when: Preparing completed work for review and dispatching focused review.

### code-review
- phase: Review
- path: `skills/code-review/SKILL.md`
- author/source: Matt Pocock / `mattpocock/skills`
- use_when: Reviewing a branch/PR/diff against repository standards and an originating spec.

### receiving-code-review
- phase: Review / feedback loop
- path: `skills/receiving-code-review/SKILL.md`
- author/source: Jesse Vincent / obra / `obra/superpowers`
- use_when: Evaluating review feedback before implementing it.

## security

### security-review
- phase: Security
- path: `skills/security-review/SKILL.md`
- author/source: GitHub, Inc. / `github/awesome-copilot`
- use_when: Security review/audit, vulnerability scanning, auth/access-control review, secrets exposure, injection flaws, insecure dependency review, or cross-file attacker-controlled data-flow analysis.
- triggers: security review, security audit, vulnerability, SQL injection, XSS, SSRF, IDOR, auth bypass, secrets, insecure dependencies
- do_not_use_when: The request is ordinary correctness/style code review with no security dimension; use `code-review` instead.

## git-delivery

### using-git-worktrees
- phase: Prepare
- path: `skills/using-git-worktrees/SKILL.md`
- author/source: Jesse Vincent / obra / `obra/superpowers`
- use_when: Feature work/plan execution benefits from an isolated workspace.

### finishing-a-development-branch
- phase: Integrate & Deliver
- path: `skills/finishing-a-development-branch/SKILL.md`
- author/source: Jesse Vincent / obra / `obra/superpowers`
- use_when: Implementation is complete and branch integration/PR/preservation/cleanup must be decided.

## skill-authoring-meta

### writing-skills
- phase: Meta
- path: `skills/writing-skills/SKILL.md`
- author/source: Jesse Vincent / obra / `obra/superpowers`
- use_when: Creating, modifying, testing, indexing, or improving skills.

### using-superpowers
- phase: Meta
- path: `skills/using-superpowers/SKILL.md`
- author/source: Jesse Vincent / obra / `obra/superpowers`
- use_when: Upstream Superpowers bootstrap conventions themselves are relevant; it never replaces `skill-loader`.

## Lifecycle note

`phase` is an ordering/default-entry hint, not a command to load every earlier skill. The orchestrator decides which earlier phase is a true dependency for the user's current task.

## Provenance

Every imported leaf skill keeps its sibling `PROVENANCE.md`. Source identity must survive all regrouping/index changes.
