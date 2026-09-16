---
name: git-workflow-and-versioning
description: Maintain disciplined Git history, atomic commits, short-lived branches, release tags, semantic versioning, and human-readable changelogs. Use for Git/release workflow decisions beyond isolated worktrees/branch finishing.
---

# Git Workflow and Versioning

Treat Git history as a safety mechanism and an engineering artifact.

## Practices

- Follow the repository's existing branching strategy; prefer short-lived branches when no strategy is defined.
- Keep commits atomic and separate unrelated formatting/refactoring/behavior changes.
- Inspect staged diffs and run scope-appropriate verification before committing.
- Never commit secrets or generated/build artifacts unless the repository explicitly tracks them.
- Use worktrees when parallel isolated branches are useful (`using-git-worktrees`).
- Use semantic versioning when the product exposes a versioned compatibility contract.
- Treat release tags as immutable release points and keep artifact/version/changelog metadata consistent.
- Write changelogs for consumers by impact rather than dumping commit logs.
- Breaking changes require explicit migration/deprecation treatment.

`finishing-a-development-branch` remains the final branch-completion workflow; `shipping-and-launch` remains production rollout.
