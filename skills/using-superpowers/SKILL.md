---
name: using-superpowers
description: Use when upstream Superpowers bootstrap behavior or conventions need to be understood inside this collection
---

# Using Superpowers

This is the upstream Superpowers bootstrap concept adapted for this collection.

## Collection override

`skill-loader` is the mandatory top-level router in `my-collection-skills`. This skill must never bypass or replace `skill-loader`. It may be selected by the loader when upstream Superpowers conventions themselves are relevant.

## Core behavior

- Relevant skills should be considered before acting.
- Process/workflow skills run before implementation/domain skills.
- Do not assume remembered skill contents are current; read the local vendored skill.
- User and higher-priority runtime instructions override downstream skill guidance.
- If a downstream skill discovers another skill is needed, return to `skill-loader` for routing rather than loading the sibling directly.

## Common routing patterns

- Creative/build request → consider `brainstorming` before implementation skills.
- Bug or unexpected behavior → consider `systematic-debugging` before domain implementation skills.
- Feature/bug implementation → consider `test-driven-development`.
- Before completion claims → consider `verification-before-completion`.

## Red flags

These thoughts usually indicate bypassing the collection routing discipline:
- "This is too simple for a skill check."
- "I already know which skill applies."
- "I'll inspect files first and route afterward."
- "I remember the skill, so I don't need to read it."

In this repository, route through `skill-loader` first.
