---
name: using-git-worktrees
description: Use when starting feature work that needs isolation from current workspace or before executing implementation plans - ensures an isolated workspace exists via native tools or git worktree fallback
---

# Using Git Worktrees

## Overview

Ensure work happens in an isolated workspace. Prefer the runtime's native worktree mechanism; fall back to Git worktrees only when needed.

**Core principle:** Detect existing isolation first. Then use native tools. Then fall back to git. Never fight the harness.

## Step 0: Detect Existing Isolation

```bash
GIT_DIR=$(cd "$(git rev-parse --git-dir)" 2>/dev/null && pwd -P)
GIT_COMMON=$(cd "$(git rev-parse --git-common-dir)" 2>/dev/null && pwd -P)
BRANCH=$(git branch --show-current)
git rev-parse --show-superproject-working-tree 2>/dev/null
```

If `GIT_DIR != GIT_COMMON` and this is not a submodule, you are already in a linked worktree. Do not create another.

If not isolated, honor any existing user preference. Otherwise ask before creating a worktree.

## Step 1: Create Isolated Workspace

Prefer a native worktree tool if the environment provides one. Otherwise use git.

For git fallback, choose location in this order:
1. explicit user preference;
2. existing `.worktrees/`;
3. existing `worktrees/`;
4. default `.worktrees/`.

For project-local directories, verify the directory is ignored before creating the worktree:

```bash
git check-ignore -q .worktrees 2>/dev/null || git check-ignore -q worktrees 2>/dev/null
```

If it is not ignored, add it to `.gitignore` before proceeding.

Create the workspace:

```bash
git worktree add "$LOCATION/$BRANCH_NAME" -b "$BRANCH_NAME"
```

If the sandbox blocks worktree creation, report the limitation and work in place only when doing so is safe.

## Step 2: Project Setup

Detect the project's package/tooling files and run the appropriate dependency/setup command. Do not invent a package manager.

## Step 3: Verify Clean Baseline

Run the project-appropriate baseline tests before making changes. If they fail, report the pre-existing failures and ask whether to proceed or investigate.

## Safety rules

- Never create nested worktrees when already isolated.
- Never assume a worktree directory is ignored.
- Never force cleanup that can destroy uncommitted files.
- Never treat a submodule as a linked worktree.
- Prefer runtime-native isolation over manual git state.
