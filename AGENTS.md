# Mandatory Skill Routing

This repository uses `skills/skill-loader/SKILL.md` as the mandatory entrypoint for every task that may use a skill.

## Invariant

1. Load `skills/skill-loader/SKILL.md` before reading, invoking, or applying any downstream skill.
2. Do not bypass the loader even when the user names a downstream skill directly or the correct skill appears obvious.
3. For any software-development request, `skill-loader` MUST load `skills/software-development-skill/SKILL.md` before any software-development leaf skill.
4. `software-development-skill` owns SDLC phase ordering and selects the smallest sufficient software leaf-skill set through `skills/skill-loader/index/software-development.md`.
5. Only downstream skills selected through this hierarchy may be loaded for the current task.
6. When the goal materially changes, return to the loader and route again.
7. A downstream leaf skill that discovers a need for another skill must return control to the loader/orchestrator; it must not route directly to a sibling skill.
8. If no indexed skill applies, the loader returns `NO_MATCH` and the task continues without a downstream skill.

Canonical software routing:

```text
user request
→ skill-loader
→ software-development-skill
→ software-development index
→ selected leaf skills in lifecycle order
```

The loader is global routing infrastructure. Group orchestrators control lifecycle/category routing. Leaf skills remain authoritative for their own domain instructions after selection.
