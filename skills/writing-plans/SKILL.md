---
name: writing-plans
description: Use when you have a spec or requirements for a multi-step task, before touching code
---

# Writing Plans

## Overview

Write an implementation plan that gives an engineer enough context to execute correctly without relying on unstated knowledge. Plans should be concrete, incremental, testable, DRY, YAGNI-conscious, and compatible with TDD.

## Before tasks

Map the files that will be created or modified and the responsibility of each. Follow the existing codebase structure unless the work itself requires a focused structural improvement.

If the spec spans independent subsystems, split it into separate plans when each can produce a meaningful independently testable result.

## Task sizing

A task should be the smallest unit that owns a coherent test cycle and can be meaningfully reviewed on its own. Fold setup/config/docs into the deliverable that needs them rather than creating ceremony-only tasks.

## Required plan header

Every plan should state:
- Goal
- Architecture/approach
- Tech stack
- Spec/design source
- Global constraints copied from the spec

## Task structure

For each task specify:
- exact files to create/modify/test;
- interfaces consumed and produced;
- failing test to add;
- exact command proving RED;
- minimal implementation;
- exact command proving GREEN;
- commit scope/message when relevant.

Avoid placeholders such as `TBD`, `TODO`, "add proper validation", "write tests", or "similar to Task N". The plan must contain the actual information needed to execute each step.

## Self-review

Before handing off the plan:
1. Check every spec requirement maps to a task.
2. Scan for placeholders/vague steps.
3. Check type/function/property names are consistent across tasks.
4. Check later tasks consume interfaces exactly as earlier tasks define them.
5. Check the plan remains narrowly scoped to the spec.

Fix discovered gaps inline.

## Execution handoff

After saving the plan, route execution back through `skill-loader`. Typical next choices are `subagent-driven-development` for independent tasks in the current session or `executing-plans` for direct plan execution.
