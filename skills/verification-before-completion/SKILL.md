---
name: verification-before-completion
description: Use when about to claim work is complete, fixed, or passing, before committing or creating PRs - requires running verification commands and confirming output before making any success claims; evidence before assertions always
---

# Verification Before Completion

## Overview

**Core principle:** Evidence before claims, always.

## The Iron Law

```
NO COMPLETION CLAIMS WITHOUT FRESH VERIFICATION EVIDENCE
```

If you haven't run the verification command in this message, you cannot claim it passes.

## The Gate Function

Before claiming any status or expressing satisfaction:
1. IDENTIFY what command proves the claim
2. RUN the full command fresh
3. READ full output, exit code, and failures
4. VERIFY whether the output confirms the claim
5. ONLY THEN make the claim

## Common Failures

Tests pass requires test output with zero failures. Linter clean requires linter output. Build success requires a build exit code of zero. Bug fixed requires reproducing and testing the original symptom. Requirements met requires a requirement-by-requirement check.

## Red Flags

Stop if you are using "should", "probably", "seems to", expressing satisfaction before verification, committing/pushing/creating PR without verification, trusting agent reports, or relying on partial checks.

## Key Patterns

For regression tests, verify the red-green cycle. For builds, run the build. For delegated work, inspect the actual diff and run verification yourself.

## When To Apply

Always apply before completion claims, success language, commits, PR creation, task completion, moving to the next task, or delegating further work based on an unverified result.
