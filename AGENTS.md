# Mandatory Skill Routing

This repository uses `skills/skill-loader/SKILL.md` as the mandatory entrypoint for every task that may use a skill.

## Invariant

1. Load `skills/skill-loader/SKILL.md` before reading, invoking, or applying any downstream skill.
2. Do not bypass the loader even when the user names a downstream skill directly or the correct skill appears obvious.
3. Only downstream skills selected by the loader may be loaded for the current task.
4. When the goal materially changes, return to the loader and route again.
5. A downstream skill that discovers a need for another skill must return control to the loader; it must not route directly to a sibling skill.
6. If no indexed skill applies, the loader returns `NO_MATCH` and the task continues without a downstream skill.

The loader is routing infrastructure. Downstream skills remain authoritative for their own domain instructions after selection.
