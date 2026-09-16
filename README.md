# Skill World

> **Standing on the shoulders of giants — and keeping their nameplates attached.**
>
> Skill World is built with a slightly shameless but very grateful idea: if brilliant people have already forged great skills, why pretend we need to rediscover fire? We collect, preserve, organize, and route excellent skills from respected open-source collections — while keeping their authors, source repositories, licenses, and history visible.

A self-contained world of reusable AI skills with mandatory routing, provenance, adoption history, and source-aware licensing.

> Intended repository name: `skill-world`. The current GitHub repository slug may remain `my-collection-skills` until it is renamed in GitHub repository settings.

## The idea

Skill World does not try to erase where a skill came from. Quite the opposite: **the giants are part of the map**. Imported skills keep their original author/collection, upstream path, snapshot commit, license, and local-modification status.

This repository adds its own value around those skills: a mandatory `skill-loader`, hierarchical indexing, local vendoring, provenance records, adoption metrics, and a retrieval-ready catalog so an AI can find the smallest useful skill set for a request instead of loading the whole universe.

## Mandatory routing

`skills/skill-loader/SKILL.md` is the exclusive entrypoint. Every downstream skill must be selected through `skill-loader` before being read or applied.

Routing is hierarchical:

```text
skill-loader
└── software-development
    ├── design-ui
    ├── planning-workflow
    ├── implementation-orchestration
    ├── debugging
    ├── testing-verification
    ├── code-review
    ├── security
    ├── git-delivery
    └── skill-authoring-meta
```

Start at `skills/skill-loader/INDEX.md`; then read only the selected group index. `skills/skill-loader/CATALOG.jsonl` is a RAG-ready metadata projection for future retrieval at larger scale.

## Current group: Software Development Skills

All current downstream skills are grouped under **Software Development Skills**, including frontend design, planning/orchestration, debugging, testing, code review, security review, Git/delivery, and skill authoring/meta workflows.

## Self-contained collection

Every indexed downstream skill must live directly in this repository. Upstream repositories are used only for provenance, licensing, source comparison, and refreshes — never as runtime dependencies.

## Provenance policy

Every third-party skill keeps the original author/collection, upstream path, snapshot commit, license, and local modification status in a sibling `PROVENANCE.md`. Reorganization must never erase attribution.

`SKILL_REGISTRY.md` records each skill's import date, repository-star snapshot, skill-install snapshot, source author/collection, and original GitHub skill link. Snapshot metrics are historical metadata, not live counters.

## Licensing: ours where it is ours, theirs where it is theirs

Skill World uses a **source-aware licensing model**:

- Repository-original material created specifically for Skill World — such as the loader, indexes, catalog structure, registry format, and original documentation — is licensed under the root `LICENSE` (MIT).
- Imported or adapted third-party skills **remain governed by their original upstream licenses**. The root license does not relicense those works.
- Each imported skill keeps its own `PROVENANCE.md` and, where appropriate, a local copy/reference of its upstream license.
- `THIRD_PARTY_NOTICES.md` provides the repository-level map of third-party authors, source repositories, and licenses.
- If a local adaptation contains both upstream material and Skill World changes, use/distribution must satisfy the upstream license for the upstream-derived portion; Skill World does not claim ownership over the original author's work.

In short: **we can stand on giant shoulders; we do not get to rename the giants.**

See `LICENSE` and `THIRD_PARTY_NOTICES.md` for the licensing map.

## Retrieval strategy

Today the collection is small enough that deterministic tree routing is simpler and more reliable than deploying a vector database. The loader therefore uses:
1. root tree index;
2. group index;
3. retrieval-friendly JSONL metadata;
4. leaf skill only after selection.

When Skill World grows to hundreds or thousands of skills, `CATALOG.jsonl` can feed lexical + embedding/hybrid retrieval without changing leaf skill layout. RAG should remain candidate discovery: final routing still resolves through the canonical tree before loading a skill.

## Thanks to the giants

Current imported collections include work from:

- **Jesse Vincent / obra** — `obra/superpowers`
- **Anthropic, PBC** — `anthropics/skills`
- **Matt Pocock** — `mattpocock/skills`
- **GitHub, Inc. and contributors** — `github/awesome-copilot`

Their original work remains attributed and licensed under the terms recorded with each imported skill.
