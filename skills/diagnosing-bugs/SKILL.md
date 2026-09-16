---
name: diagnosing-bugs
description: Provisional production-diagnosis skill for hard bugs and performance regressions, centered on building a tight reproducible feedback loop before hypotheses/fixes.
metadata:
  skill-world-strength: weak-skill
---

# Diagnosing Bugs

Use for difficult or production-like failures where the first task is to build a tight feedback loop. It complements `systematic-debugging`; it does not replace incident command.

## Workflow

1. Redact secrets from commands, logs, traces, HAR files, and captured artifacts.
2. Build the tightest agent-runnable pass/fail loop possible: focused test, curl/HTTP script, CLI fixture, browser automation, captured-trace replay, small harness, fuzz loop, bisection, or differential comparison.
3. Run it and prove it reproduces the user's exact symptom. Tighten for speed, determinism, and specificity.
4. Minimize the reproduction while preserving the failure.
5. Form several ranked, falsifiable hypotheses with predictions.
6. Instrument only where it distinguishes hypotheses; change one variable at a time.
7. Turn the minimal reproduction into the correct regression test when a meaningful seam exists, then fix the root cause.
8. Re-run the original reproduction and remove temporary instrumentation.

If no reliable feedback loop can be built, stop guessing and request the missing environment/artifact or permission for targeted instrumentation.

## Weak-skill note

Marked `weak-skill` for the **production-diagnosis** slot because the upstream skill is a general hard-bug diagnosis discipline and overlaps with `systematic-debugging`; it is not a complete production operations diagnosis framework.
