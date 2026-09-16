---
name: receiving-code-review
description: Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not performative agreement or blind implementation
---

# Code Review Reception

## Overview

Code review requires technical evaluation, not emotional performance.

**Core principle:** Verify before implementing. Ask before assuming. Technical correctness over social comfort.

## The Response Pattern

1. READ: Complete feedback without reacting
2. UNDERSTAND: Restate requirement in own words (or ask)
3. VERIFY: Check against codebase reality
4. EVALUATE: Technically sound for THIS codebase?
5. RESPOND: Technical acknowledgment or reasoned pushback
6. IMPLEMENT: One item at a time, test each

## Forbidden Responses

Never use performative agreement or implement before verification. Restate the technical requirement, ask clarifying questions, push back with technical reasoning if wrong, or start working once verified.

## Handling Unclear Feedback

If any item is unclear, stop and ask for clarification before implementing any related items.

## Source-Specific Handling

### From your human partner
- Trusted - implement after understanding
- Still ask if scope unclear
- No performative agreement

### From External Reviewers
Before implementing, verify the suggestion against this codebase, existing functionality, compatibility requirements, and the reviewer's context. Push back with evidence when needed.

## YAGNI Check

If a reviewer suggests broad "professional" additions, verify actual usage first. Avoid adding unused machinery.

## Implementation Order

For multi-item feedback:
1. Clarify unclear items first
2. Fix blocking issues
3. Fix simple issues
4. Fix complex issues
5. Test each fix and verify no regressions

## When To Push Back

Push back when the suggestion breaks behavior, lacks context, violates YAGNI, is technically wrong for the stack, conflicts with compatibility requirements, or conflicts with the human partner's architectural decisions.

## GitHub Thread Replies

When replying to inline review comments on GitHub, reply in the comment thread rather than as a top-level PR comment.
