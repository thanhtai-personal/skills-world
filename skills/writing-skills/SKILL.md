---
name: writing-skills
description: Use when creating new skills, editing existing skills, or verifying skills work before deployment
---

# Writing Skills

## Overview

Treat skill authoring as behavior engineering: define the failure you want to prevent, observe baseline behavior, write the minimum guidance that fixes it, then verify the agent follows it.

**Core principle:** A skill should be discoverable, focused, reusable, and tested against the behavior it is intended to shape.

## What is a skill?

A skill is a reusable technique, process, pattern, tool guide, or reference. Project-specific conventions belong in project instructions rather than being generalized into skills without evidence of reuse.

## Directory structure

```text
skills/
  skill-name/
    SKILL.md
    supporting-file.*   # only when needed
```

Keep a flat searchable skill namespace unless the runtime requires otherwise. Put heavy references, reusable scripts, or templates in supporting files; keep the core decision/process guidance in `SKILL.md`.

## Frontmatter and discovery

At minimum use `name` and `description`. Names should be lowercase letters/numbers/hyphens. Descriptions should describe **when to use the skill**, not summarize the whole workflow. Strong descriptions begin with concrete triggering conditions such as `Use when...`.

Why: an over-detailed description can become a shortcut that causes an agent to skip reading the skill body.

Use searchable terminology in the body: symptoms, error terms, task types, tools, and synonyms an agent would actually search for.

## Skill types

- **Technique**: a concrete method with steps.
- **Pattern**: a reusable mental model.
- **Reference**: APIs, syntax, commands, or tool documentation.
- **Discipline/process**: rules intended to resist shortcuts under pressure.

Match the guidance form to the failure. Discipline failures need explicit rules/red flags/rationalization counters. Output-shape failures need a positive structural recipe. Conditional behavior should be keyed to observable conditions.

## Authoring cycle

### RED — observe baseline failure
Create realistic scenarios without the new/changed skill. Record what the agent gets wrong and the rationalizations it uses.

### GREEN — write minimal guidance
Write only enough guidance to correct the observed failures. Keep examples concrete and avoid broad speculative rules.

### REFACTOR — close demonstrated loopholes
Re-run scenarios, identify new failure modes, tighten wording, and remove unnecessary text.

## Testing different skill types

- Discipline skills: pressure scenarios and rationalization resistance.
- Technique skills: application and edge-case scenarios.
- Pattern skills: recognition, application, and counter-examples.
- Reference skills: retrieval and correct application.

## Cross-referencing skills in this collection

Do not create direct sibling-loading chains. If one skill determines another may be needed, return routing control to `skill-loader`. References may name related skills, but `skill-loader` remains the single loading gateway.

## Token/context discipline

Frequently loaded skills should be especially concise. Move large references and reusable tools to supporting files. Avoid duplicating content that another selected skill already owns. One strong example is better than many repetitive examples.

## Provenance requirement for this repository

When importing a third-party skill into `my-collection-skills`, preserve:
- original author;
- original collection/repository;
- upstream path;
- snapshot commit;
- license;
- whether the local copy is verbatim or modified/adapted.

Keep this information in a sibling `PROVENANCE.md`. Never erase attribution when renaming, reorganizing, or adapting an imported skill.

## Deployment checklist

Before considering a skill ready:
- trigger conditions are clear;
- frontmatter is valid;
- the skill is discoverable through `skill-loader/INDEX.md`;
- referenced support files are present locally;
- provenance/license obligations are preserved;
- behavior has been tested when runtime tooling allows;
- changes are committed to the collection.
