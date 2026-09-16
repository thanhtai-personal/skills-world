# Skill World

A self-contained world of reusable AI skills with mandatory routing, provenance, and adoption history.

> Intended repository name: `skill-world`. The current GitHub repository slug may remain `my-collection-skills` until it is renamed in GitHub repository settings.

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

## Adoption ledger

`SKILL_REGISTRY.md` records each skill's import date, repository-star snapshot, skill-install snapshot, source author/collection, and original GitHub skill link. Snapshot metrics are historical metadata, not live counters.

## Retrieval strategy

Today the collection is small enough that deterministic tree routing is simpler and more reliable than deploying a vector database. The loader therefore uses:
1. root tree index;
2. group index;
3. retrieval-friendly JSONL metadata;
4. leaf skill only after selection.

When Skill World grows to hundreds/thousands of skills, `CATALOG.jsonl` can feed lexical + embedding/hybrid retrieval without changing leaf skill layout. Add RAG only after measuring routing latency/recall problems rather than introducing infrastructure early.
