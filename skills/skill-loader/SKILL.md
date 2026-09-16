---
name: skill-loader
description: Mandatory skill router. Use before every other skill to identify and load the smallest sufficient set of skills for the user's current goal.
---

# Skill Loader

This is the exclusive entrypoint to the skills in this collection.

## Hard routing rule

No downstream skill may be read, invoked, or applied before this loader. Do not bypass this rule because a task looks simple, a skill name is already known, the user explicitly requests a downstream skill, or you remember a skill's contents.

## Routing procedure

1. Parse the user's actual goal, requested output, constraints, and task phase.
2. Read `skills/skill-loader/INDEX.md`.
3. Match the request against each entry's `use_when`, `triggers`, and `do_not_use_when`.
4. Select the smallest sufficient set of skills. Prefer the most specific skill over a broader overlapping skill.
5. Order selected skills as: process/workflow skills first, domain skills second, implementation/output skills last.
6. Load the selected skill files from their indexed locations.
7. Follow the selected skills while completing the task.
8. If the task materially changes, return here and route again.

## Re-routing

Downstream skills may identify that another skill is needed, but they must not load sibling skills directly. Return control to this loader, consult the index again, and then load the newly selected skill.

## No match

If no indexed skill materially helps the request, return `NO_MATCH` internally and continue without a downstream skill. Do not load skills merely because their keywords weakly overlap the prompt.

## Conflict handling

User requirements and higher-priority runtime instructions always win. If two selected skills conflict, prefer the more specific skill for its domain and use the more general skill only for non-conflicting process guidance.

## Context discipline

Do not load the whole collection. Load only the index plus the smallest sufficient downstream skill set.
