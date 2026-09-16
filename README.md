# Skill World

> **Standing on the shoulders of giants — and keeping their nameplates attached.**
>
> Skill World is built with a slightly shameless but very grateful idea: if brilliant people have already forged great skills, why pretend we need to rediscover fire? We collect, preserve, organize, and route excellent skills from respected open-source collections — while keeping their authors, source repositories, licenses, and history visible.

A self-contained world of reusable AI skills with mandatory routing, provenance, adoption history, and source-aware licensing.

## The idea

Skill World does not try to erase where a skill came from. Quite the opposite: **the giants are part of the map**. Imported skills keep their original author/collection, upstream path, snapshot commit, license, and local-modification status.

This repository adds its own value around those skills: a mandatory `skill-loader`, group-level orchestration, hierarchical indexing, local vendoring, provenance records, adoption metrics, and a retrieval-ready catalog so an AI can find the smallest useful skill set for a request instead of loading the whole universe.

## Mandatory routing

`skills/skill-loader/SKILL.md` is the exclusive global entrypoint. Software work then passes through `skills/software-development-skill/SKILL.md`, which maps the request onto a professional SDLC and orders the selected downstream skills.

```text
skill-loader
└── software-development-skill
    └── Software Development Skills
        ├── Discover
        ├── Design
        ├── Plan
        ├── Prepare
        ├── Implement
        ├── Debug (loopback)
        ├── Verify
        ├── Review
        ├── Security
        ├── Integrate & Deliver
        └── Operate & Learn
```

The lifecycle is an ordering model, not forced ceremony. Focused requests may enter at the relevant phase, but they must not silently bypass an unresolved earlier dependency.

Canonical route:

```text
request
→ skill-loader
→ software-development-skill
→ software-development leaf index
→ smallest sufficient leaf-skill set
```

`skills/skill-loader/CATALOG.jsonl` remains a RAG-ready metadata projection for future retrieval at larger scale.

## Software Development Skills

All current downstream skills are wrapped by **Software Development Skill**, including frontend design, planning/orchestration, debugging, testing, code review, security review, Git/delivery, and skill-authoring/meta workflows.

The orchestrator defines the standard process:

```text
Discover
→ Design
→ Plan
→ Prepare workspace
→ Implement
↔ Debug when needed
→ Verify
→ Review
→ Security
→ Integrate & Deliver
→ Operate & Learn
```

As new capabilities such as requirements engineering, architecture, API design, database design, CI/CD, observability, and incident response are imported, they should be inserted into the appropriate lifecycle phase rather than appended to a flat list.

## Self-contained collection

Every indexed downstream skill must live directly in this repository. Upstream repositories are used only for provenance, licensing, source comparison, and refreshes — never as runtime dependencies.

## Provenance policy

Every third-party skill keeps the original author/collection, upstream path, snapshot commit, license, and local modification status in a sibling `PROVENANCE.md`. Reorganization must never erase attribution.

`SKILL_REGISTRY.md` records each skill's import date, repository-star snapshot, skill-install snapshot, source author/collection, and original GitHub skill link. Snapshot metrics are historical metadata, not live counters.

## Licensing: ours where it is ours, theirs where it is theirs

Skill World uses a **source-aware licensing model**:

- Repository-original material created specifically for Skill World — such as the loader, orchestrators, indexes, catalog structure, registry format, and original documentation — is licensed under the root `LICENSE` (MIT).
- Imported or adapted third-party skills **remain governed by their original upstream licenses**. The root license does not relicense those works.
- Each imported skill keeps its own `PROVENANCE.md` and, where appropriate, a local copy/reference of its upstream license.
- `THIRD_PARTY_NOTICES.md` provides the repository-level map of third-party authors, source repositories, and licenses.
- If a local adaptation contains both upstream material and Skill World changes, use/distribution must satisfy the upstream license for the upstream-derived portion; Skill World does not claim ownership over the original author's work.

In short: **we can stand on giant shoulders; we do not get to rename the giants.**

See `LICENSE` and `THIRD_PARTY_NOTICES.md` for the licensing map.

## Retrieval strategy

Today the collection is small enough that deterministic tree routing is simpler and more reliable than deploying a vector database. The loader therefore uses:
1. root tree index;
2. group orchestrator;
3. group/leaf index;
4. retrieval-friendly JSONL metadata;
5. selected leaf skills only.

When Skill World grows to hundreds or thousands of skills, `CATALOG.jsonl` can feed lexical + embedding/hybrid retrieval. RAG should remain candidate discovery: final candidates must still resolve through `skill-loader` and the relevant group orchestrator before a leaf skill is loaded.

## Support Skill World ☕

If Skill World saves you time or helps you build something useful, the best support is to **star the repository, share it, and contribute**. If you would also like to support ongoing curation and expansion financially, you can use [PayPal](https://www.paypal.me/kaistudio6886) or see [`SUPPORT.md`](SUPPORT.md) for Vietnam QR support.

## Thanks to the giants

Current imported collections include work from:

- **Jesse Vincent / obra** — `obra/superpowers`
- **Anthropic, PBC** — `anthropics/skills`
- **Matt Pocock** — `mattpocock/skills`
- **GitHub, Inc. and contributors** — `github/awesome-copilot`

Their original work remains attributed and licensed under the terms recorded with each imported skill.
