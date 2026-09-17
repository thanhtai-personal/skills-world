# Contributing to Skill World

Thanks for helping improve Skill World. The project favors a smaller set of clear, source-aware, well-routed skills over indiscriminate collection growth.

## Before proposing a skill

1. Start from the user capability/problem, not a framework name.
2. Check whether an existing skill already covers the need.
3. Prefer strong, maintained upstream sources with a license we can preserve.
4. If no suitable upstream skill exists, an original Skill World skill is acceptable when it is grounded in authoritative standards/documentation.

## Required routing model

Every request enters through `skills/skill-loader/SKILL.md`. Software-development skills are routed through `skills/software-development-skill/SKILL.md`. Leaf skills must not bypass these orchestrators or route directly to sibling leaves.

## Imported third-party skills

Every imported/adapted skill must include a sibling `PROVENANCE.md` recording author/collection, repository, exact upstream path, pinned snapshot commit, license, import date, and local modification status. Preserve all applicable license/NOTICE requirements and update `THIRD_PARTY_NOTICES.md` when a new source collection is introduced.

## Skill World original skills

Original skills should use the root license and, when their technical guidance depends on external standards or product documentation, include a sibling `SOURCES.md` with authoritative references. Do not copy substantial third-party prose into an original skill.

## Required repository updates

When adding or materially rerouting a skill, update the relevant orchestrator/index, `skills/skill-loader/CATALOG.jsonl`, and `SKILL_REGISTRY.md`. Add or update routing-evaluation fixtures when the new capability changes selection behavior.

Run `node scripts/validate-repository.mjs` before opening a pull request. A contribution is not complete merely because the Markdown reads well; catalog, paths, provenance/source records, routing, and validation must stay consistent.
