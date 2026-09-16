---
name: skill-loader
description: Mandatory hierarchical skill router. Use before every other skill to identify the smallest sufficient skill set from Skill World.
---

# Skill Loader

This is the exclusive entrypoint to every downstream skill in Skill World.

## Hard routing rule

No downstream skill may be read, invoked, or applied before this loader. Do not bypass the loader because the task looks simple, the correct skill seems obvious, the user names a skill directly, or you remember its content.

## Hierarchical routing procedure

1. Parse the user's actual goal, output, constraints, and current task phase.
2. Read only the root index: `skills/skill-loader/INDEX.md`.
3. Select the narrowest matching skill group.
4. Read only that group's index. For software work today, use `skills/skill-loader/index/software-development.md`.
5. Match the request against leaf entries' `use_when`, triggers, exclusions, and task phase.
6. Select the smallest sufficient set of leaf skills. Prefer a specific domain skill over a broad overlapping skill.
7. Order selected skills: process/workflow first, domain/review second, implementation/output last.
8. Load only the selected local `SKILL.md` files.
9. If the user's goal materially changes or a downstream skill discovers another need, return control here and route again from the root.

## Directly named skill

A user naming a downstream skill is a strong routing signal, not permission to bypass the loader. Resolve it through the tree first, verify that its scope matches the request, then load it.

## No match

If no indexed leaf materially helps, return `NO_MATCH` internally and continue without a downstream skill. Do not load skills for weak keyword overlap.

## Conflict handling

User requirements and higher-priority runtime instructions always win. If selected skills conflict, prefer the more specific skill inside its domain and use broader workflow guidance only where non-conflicting.

## Context discipline

Never load the whole world. Load:

```text
root index
→ one matching group index
→ smallest sufficient leaf skill set
```

The routing indexes are summaries; leaf `SKILL.md` files remain authoritative after selection.

## Retrieval / future RAG

`skills/skill-loader/CATALOG.jsonl` is a retrieval-friendly projection of leaf metadata. At the current collection size, deterministic tree traversal is the default because it is cheap, inspectable, and reliable.

When the collection becomes large enough that routing recall or latency degrades, a retrieval layer may search `CATALOG.jsonl` using lexical, embedding, or hybrid retrieval to propose candidate leaves. RAG is **candidate discovery only**: final routing must still resolve candidates through the canonical tree index before loading a skill. This prevents an embedding result from bypassing category/provenance/routing rules.

## Provenance invariant

Routing must never erase source identity. Imported leaf skills keep their original author/collection in the group index and sibling `PROVENANCE.md`.
