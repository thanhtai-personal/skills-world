---
name: requesting-code-review
description: Use when completing tasks, implementing major features, or before merging to verify work meets requirements
---

# Requesting Code Review

Dispatch a code reviewer subagent to catch issues before they cascade. The reviewer gets precisely crafted context for evaluation — never your session's history.

**Core principle:** Review early, review often.

## When to Request Review

**Mandatory:**
- After each task in subagent-driven development
- After completing major feature
- Before merge to main

**Optional but valuable:**
- When stuck
- Before refactoring
- After fixing complex bug

## How to Request

1. Get the base and head SHAs.
2. Dispatch a general-purpose code reviewer using `code-reviewer.md`.
3. Act on feedback: fix Critical issues immediately, fix Important issues before proceeding, note Minor issues for later, and push back with evidence if the reviewer is wrong.

## Red Flags

Never skip review because a change seems simple, ignore Critical issues, proceed with Important issues unfixed, or argue with valid technical feedback.

See template at: [code-reviewer.md](code-reviewer.md)
