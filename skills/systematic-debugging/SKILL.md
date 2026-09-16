---
name: systematic-debugging
description: Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes
---

# Systematic Debugging

## Overview

**Core principle:** ALWAYS find root cause before attempting fixes. Symptom fixes are failure.

**Violating the letter of this process is violating the spirit of debugging.**

## The Iron Law

```
NO FIXES WITHOUT ROOT CAUSE INVESTIGATION FIRST
```

If you haven't completed Phase 1, you cannot propose fixes.

## When to Use

Use for ANY technical issue:
- Test failures
- Bugs in production
- Unexpected behavior
- Performance problems
- Build failures
- Integration issues

Use this especially when under time pressure, a quick fix seems obvious, multiple fixes have already been tried, a previous fix failed, or the issue is not fully understood.

## The Four Phases

You MUST complete each phase before proceeding to the next.

### Phase 1: Root Cause Investigation

Before attempting any fix:

1. **Read Error Messages Carefully**
   - Read warnings and stack traces completely.
   - Note line numbers, file paths, and error codes.

2. **Reproduce Consistently**
   - Identify exact reproduction steps.
   - If it cannot be reproduced, gather more data instead of guessing.

3. **Check Recent Changes**
   - Review git diff and recent commits.
   - Check dependency, config, and environment changes.

4. **Gather Evidence in Multi-Component Systems**
   - At each boundary, log what enters and exits.
   - Verify configuration/environment propagation.
   - Run once to determine where the failure occurs, then investigate that component.

5. **Trace Data Flow**
   - Where does the bad value originate?
   - What called this with the bad value?
   - Keep tracing backward until you find the source.
   - Fix at the source, not at the symptom.

See `root-cause-tracing.md` for the complete backward tracing technique.

### Phase 2: Pattern Analysis

1. Find similar working examples in the same codebase.
2. Read reference implementations completely.
3. List every difference between working and broken behavior.
4. Understand dependencies, settings, configuration, and assumptions.

### Phase 3: Hypothesis and Testing

1. Form one explicit hypothesis: "I think X is the root cause because Y."
2. Make the smallest possible change to test it.
3. Verify the result before continuing. If it fails, form a new hypothesis rather than stacking fixes.
4. If you do not understand something, say so and investigate rather than pretending.

### Phase 4: Implementation

1. Create a failing test case reproducing the issue. Use `test-driven-development` for a proper failing-test-first cycle.
2. Implement a single fix addressing the identified root cause.
3. Verify the fix and regressions. Use `verification-before-completion` before claiming success.
4. If a fix fails, return to Phase 1 with the new evidence.
5. If three or more fixes fail, stop and question the architecture before attempting another fix.

## Red Flags - STOP and Follow Process

Stop and return to Phase 1 if you catch yourself thinking:
- "Quick fix for now, investigate later"
- "Just try changing X"
- "Add multiple changes and run tests"
- "Skip the test, I'll manually verify"
- "It's probably X"
- "I don't fully understand but this might work"
- proposing solutions before tracing data flow
- "one more fix attempt" after two or more failures

## Common Rationalizations

| Excuse | Reality |
|--------|---------|
| "Issue is simple" | Simple issues still have root causes. |
| "Emergency, no time" | Systematic debugging is faster than guess-and-check churn. |
| "Try this first" | The first guess often sets a bad debugging pattern. |
| "I'll test after" | A failing test first proves the regression exists and the fix matters. |
| "Multiple fixes save time" | They destroy causal information. |
| "Reference is too long" | Partial pattern understanding causes bugs. |
| "I see the problem" | Seeing a symptom is not proving a root cause. |

## Quick Reference

| Phase | Key Activities | Success Criteria |
|-------|---------------|------------------|
| **1. Root Cause** | Read errors, reproduce, check changes, gather evidence | Understand WHAT and WHY |
| **2. Pattern** | Find working examples, compare | Identify meaningful differences |
| **3. Hypothesis** | Form theory, test minimally | Confirmed or replaced hypothesis |
| **4. Implementation** | Create test, fix, verify | Bug resolved, tests pass |

## When Process Reveals "No Root Cause"

If systematic investigation shows the issue is truly environmental, timing-dependent, or external, document what was investigated, implement appropriate handling such as retry/timeout/error reporting, and add monitoring or diagnostics for future evidence.

## Supporting Techniques

- `root-cause-tracing.md`
- `defense-in-depth.md`
- `condition-based-waiting.md`
