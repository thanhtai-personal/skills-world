---
name: finishing-a-development-branch
description: Use when implementation is complete, all tests pass, and you need to decide how to integrate the work
---

# Finishing a Development Branch

## Overview

**Core principle:** Verify tests → Detect environment → Present options → Execute choice → Clean up.

**Announce at start:** "I'm using the finishing-a-development-branch skill to complete this work."

## Step 1: Verify Tests

Run the project's full test suite (`npm test` / `cargo test` / `pytest` / `go test ./...`).

**If tests fail**, report the failures and stop — the menu comes after a green suite.

**If tests pass:** continue to Step 2.

## Step 2: Detect Environment

```bash
GIT_DIR=$(cd "$(git rev-parse --git-dir)" 2>/dev/null && pwd -P)
GIT_COMMON=$(cd "$(git rev-parse --git-common-dir)" 2>/dev/null && pwd -P)
WORKTREE_PATH=$(git rev-parse --show-toplevel)
```

This determines which menu to show and how cleanup works.

| State | Menu | Cleanup |
|-------|------|---------|
| `GIT_DIR == GIT_COMMON` (normal repo) | Standard 3 options | No worktree to clean up |
| `GIT_DIR != GIT_COMMON`, named branch | Standard 3 options | Provenance-based |
| `GIT_DIR != GIT_COMMON`, detached HEAD | Reduced 2 options (no merge) | Externally managed — leave in place |

## Step 3: Determine Base Branch

The base branch is whatever this work forked from. If it is not already known, ask and confirm before merging.

## Step 4: Present Options

For a normal repo or named-branch worktree, present exactly:

```
Implementation complete. What would you like to do?

1. Merge back to <base-branch> locally
2. Push and create a Pull Request
3. Keep the branch as-is (I'll handle it later)

Which option?
```

For detached HEAD, present only push-as-new-branch or keep-as-is.

Discarding work happens only if the human partner explicitly asks.

## Step 5: Execute Choice

### Option 1: Merge Locally

```bash
MAIN_ROOT=$(git -C "$(git rev-parse --git-common-dir)/.." rev-parse --show-toplevel)
cd "$MAIN_ROOT"
git checkout <base-branch>
git pull
git merge <feature-branch>
<test command>
```

If tests fail on the merged result, stop and investigate. Once green, clean up the worktree and delete the branch.

### Option 2: Push and Create PR

```bash
git push -u origin <feature-branch>
```

Then create the pull/merge request against the base branch and keep the worktree for feedback.

### Option 3: Keep As-Is

Report the branch and preserved worktree path.

### If your human partner asks to discard the work

Confirm the exact branch, commits, and worktree that will be deleted and require the typed word `discard` before destructive cleanup.

## Step 6: Cleanup Workspace

Runs for local merge and confirmed discard. Do not clean up worktrees for PR or keep-as-is.

For normal repo, no worktree cleanup is needed. For worktrees under `.worktrees/` or `worktrees/`, use `git worktree remove` then `git worktree prune`. If removal is refused due to uncommitted/untracked files, show them and ask whether to commit, move, or delete them. Never force-remove on your own.

## Quick Reference

| Option | Merge | Push | Keep Worktree | Cleanup Branch |
|--------|-------|------|---------------|----------------|
| 1. Merge locally | yes | - | - | yes |
| 2. Create PR | - | yes | yes | - |
| 3. Keep as-is | - | - | yes | - |
| Discard (explicit request only) | - | - | - | yes (force) |

## Common Rationalizations

- Tests passed earlier → run them on the tree being integrated.
- They obviously want it merged → integration is the human partner's decision.
- The PR is up so the worktree is clutter → keep it for review fixes.
- Removal refused so `--force` is fine → refusal may protect unique uncommitted files.
- Base branch is obviously main → confirm the fork point.
- Push rejected → investigate; force-push only on explicit request.
