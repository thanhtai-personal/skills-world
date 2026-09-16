---
name: subagent-driven-development
description: Use when executing implementation plans with independent tasks in the current session
---

# Subagent-Driven Development

Execute a written implementation plan by delegating each meaningful task to a fresh implementation context, reviewing task output, fixing findings, and performing a final whole-branch review.

**Core principle:** Fresh implementation context + task-scoped review + final branch review.

## Preconditions

- A written implementation plan exists.
- Tasks are sufficiently separable to review independently.
- Work happens in an isolated workspace when possible; use `using-git-worktrees`.
- Do not start implementation on `main`/`master` without explicit human consent.

## Continuous execution

Once execution starts, do not pause between ordinary tasks merely to ask whether to continue. Stop only for destructive/irreversible work, security-sensitive actions, side effects outside the isolated workspace that normally require approval, or a plan so broken that proceeding would be guessing.

## Per-task loop

1. Read the task and the plan/spec constraints it depends on.
2. Record the task base commit.
3. Give the implementer only the task-specific requirements, interfaces, constraints, and expected report.
4. Implement, test, commit, and self-review the task.
5. Review the complete task diff for both spec compliance and code quality.
6. If Critical/Important findings exist, enter a bounded fix/re-review loop.
7. Record rulings and deferred findings in a persistent progress ledger.
8. Mark the task complete only when blocking findings are fixed or explicitly adjudicated at the loop cap.

Do not let implementers spawn their own parallel reviewers; the coordinator owns the review gate.

## Review discipline

- Review the whole task range, not just `HEAD~1` when a task has multiple commits.
- Give reviewers the task requirements and diff, not the full conversation history.
- A task review must address both requirement/spec compliance and implementation quality.
- Minor findings may be deferred to the final review; Critical/Important findings may not be silently discarded.
- Re-reviews should focus on the fix diff and previously open findings.

## Fix-loop discipline

Use a bounded number of fix rounds. Early rounds may reuse the implementer's context; later rounds should use fresh eyes and stronger reasoning if the same findings persist. At the cap, adjudicate remaining findings explicitly and record the ruling. Never loop indefinitely.

## Persistent progress

Keep a plan-specific ledger under a git-ignored workspace such as `.superpowers/sdd/<plan>/progress.md`. The ledger is the recovery map after context compaction and should record completed tasks, commit ranges, fix rounds, deferred findings, and rulings.

## Final review

After all tasks:

1. Review the complete branch diff from the merge base.
2. Include deferred/parked findings from the ledger.
3. If findings remain, perform one coordinated fix wave and one scoped re-review.
4. Surface all rulings made on the user's behalf in the final report.
5. Use `finishing-a-development-branch` for integration/PR/cleanup decisions.

## Model/context discipline

Use the least costly model that can reliably handle each role. Mechanical implementation can use a fast model; integration/debugging needs stronger reasoning; architecture and final broad review should use the most capable suitable model. Never omit relevant task context just to save tokens, and never dump unrelated session history into subagents.
