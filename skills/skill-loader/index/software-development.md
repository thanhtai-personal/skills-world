# Software Development Skills

All currently imported downstream skills belong to this group. Provenance remains attached to each leaf skill.

## design-ui

### frontend-design
- path: `skills/frontend-design/SKILL.md`
- author/source: Anthropic, PBC / `anthropics/skills`
- use_when: Creating/redesigning/restyling frontend UI, defining visual direction, typography, palette, layout, responsive presentation, or critiquing frontend visual quality.
- triggers: frontend design, UI design, redesign, restyle, landing page, dashboard, visual hierarchy, responsive UI

## planning-workflow

### brainstorming
- path: `skills/brainstorming/SKILL.md`
- author/source: Jesse Vincent / obra / `obra/superpowers`
- use_when: Exploring intent, requirements, design, or approaches before implementation.

### writing-plans
- path: `skills/writing-plans/SKILL.md`
- author/source: Jesse Vincent / obra / `obra/superpowers`
- use_when: Turning an approved spec/requirements into a concrete multi-step implementation plan.

### executing-plans
- path: `skills/executing-plans/SKILL.md`
- author/source: Jesse Vincent / obra / `obra/superpowers`
- use_when: Executing an existing implementation plan directly with validation checkpoints.

## implementation-orchestration

### dispatching-parallel-agents
- path: `skills/dispatching-parallel-agents/SKILL.md`
- author/source: Jesse Vincent / obra / `obra/superpowers`
- use_when: Multiple independent workstreams can proceed concurrently.

### subagent-driven-development
- path: `skills/subagent-driven-development/SKILL.md`
- author/source: Jesse Vincent / obra / `obra/superpowers`
- use_when: Executing a written plan through separable agent-owned tasks in the same session.

## debugging

### systematic-debugging
- path: `skills/systematic-debugging/SKILL.md`
- author/source: Jesse Vincent / obra / `obra/superpowers`
- use_when: Bugs, regressions, test failures, performance problems, or unexpected behavior require root-cause investigation.

## testing-verification

### test-driven-development
- path: `skills/test-driven-development/SKILL.md`
- author/source: Jesse Vincent / obra / `obra/superpowers`
- use_when: Implementing features/bug fixes/refactors with a failing-test-first cycle.

### verification-before-completion
- path: `skills/verification-before-completion/SKILL.md`
- author/source: Jesse Vincent / obra / `obra/superpowers`
- use_when: Before claiming work is complete, fixed, passing, ready, committed, or suitable for PR/merge.

## code-review

### code-review
- path: `skills/code-review/SKILL.md`
- author/source: Matt Pocock / `mattpocock/skills`
- use_when: Reviewing a branch/PR/diff against repository standards and an originating spec.

### requesting-code-review
- path: `skills/requesting-code-review/SKILL.md`
- author/source: Jesse Vincent / obra / `obra/superpowers`
- use_when: Preparing completed work for review and dispatching focused review.

### receiving-code-review
- path: `skills/receiving-code-review/SKILL.md`
- author/source: Jesse Vincent / obra / `obra/superpowers`
- use_when: Evaluating review feedback before implementing it.

## security

### security-review
- path: `skills/security-review/SKILL.md`
- author/source: GitHub, Inc. / `github/awesome-copilot`
- use_when: Security review/audit, vulnerability scanning, auth/access-control review, secrets exposure, injection flaws, insecure dependency review, or cross-file attacker-controlled data-flow analysis.
- triggers: security review, security audit, vulnerability, SQL injection, XSS, SSRF, IDOR, auth bypass, secrets, insecure dependencies
- do_not_use_when: The request is ordinary correctness/style code review with no security dimension; use `code-review` instead.

## git-delivery

### using-git-worktrees
- path: `skills/using-git-worktrees/SKILL.md`
- author/source: Jesse Vincent / obra / `obra/superpowers`
- use_when: Feature work/plan execution benefits from an isolated Git workspace.

### finishing-a-development-branch
- path: `skills/finishing-a-development-branch/SKILL.md`
- author/source: Jesse Vincent / obra / `obra/superpowers`
- use_when: Implementation is complete and branch integration/PR/preservation/cleanup must be decided.

## skill-authoring-meta

### writing-skills
- path: `skills/writing-skills/SKILL.md`
- author/source: Jesse Vincent / obra / `obra/superpowers`
- use_when: Creating, modifying, testing, indexing, or improving skills.

### using-superpowers
- path: `skills/using-superpowers/SKILL.md`
- author/source: Jesse Vincent / obra / `obra/superpowers`
- use_when: Upstream Superpowers bootstrap conventions themselves are relevant; it never replaces `skill-loader`.

## Provenance

Every leaf skill must keep a sibling `PROVENANCE.md` when imported from a third party. The source collection/author must remain visible even if this tree is reorganized.
