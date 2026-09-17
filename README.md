# Skill World

> **Standing on the shoulders of giants — and keeping their nameplates attached.**
>
> Skill World collects, adapts, organizes, and routes reusable AI skills while preserving upstream authorship, source snapshots, licenses, and local modification history.

A self-contained world of reusable AI skills with mandatory routing, lifecycle orchestration, provenance, historical adoption metadata, and source-aware licensing.

> **Status: pre-launch hardening.** The repository is accessible, but the first promoted/tagged public release is intentionally waiting for repository validation, routing evaluation, and the `skills-world-mcp` consumption layer to be ready. See [`docs/RELEASE_READINESS.md`](docs/RELEASE_READINESS.md).

## Why Skill World

A large folder of skills is not enough. An agent still needs to know **which skill to load, when to load it, what order to follow, and what not to load**. Skill World therefore adds a routing and orchestration layer around the skills themselves.

Imported skills keep their source author/collection, upstream path, pinned snapshot commit, license, and local modification status. Skill World original skills record authoritative technical sources when their guidance depends on external standards or product documentation.

## Mandatory routing

`skills/skill-loader/SKILL.md` is the exclusive global entrypoint. Software work then passes through `skills/software-development-skill/SKILL.md`. Leaf skills do not bypass these orchestrators.

```text
user request
→ skill-loader
→ domain orchestrator
→ domain index / catalog
→ smallest sufficient leaf-skill set
```

For software development:

```text
request
→ skill-loader
→ software-development-skill
→ lifecycle phase + relevant specialization track
→ selected leaf skills in dependency order
```

The lifecycle is an ordering model, not forced ceremony. A focused request can enter mid-lifecycle, but it should not silently skip a real unresolved prerequisite.

## Software Development World

The software-development orchestrator currently models this lifecycle:

```text
Discover & Clarify
→ Design
→ Plan
→ Prepare
→ Implement
↔ Debug when needed
→ Verify Quality
→ Review & Simplify
→ Security Review
→ Integrate & Deliver
→ Operate & Learn
→ Maintain & Evolve
```

Specialized engineering tracks are conditional overlays on that lifecycle:

```text
Software Development
├── Cloud / IaC
├── Containers / Kubernetes
├── Distributed Systems / Resilience
├── Supply Chain Security
├── Messaging / Streaming
├── Mobile
├── Data Engineering
└── Data Platform
```

Examples include Terraform/OpenTofu module design, Kubernetes/Helm/GitOps, distributed sagas and durable workflows, event sourcing, SBOM/SCA/signing/provenance, Kafka/schema/consumer contracts, React Native/Expo architecture and release, Airflow/dbt/Spark/data quality, and warehouse/lakehouse/lineage/stream-processing architecture.

`weak-skill` is a routing-quality label meaning **provisional best-current fit inside Skill World**. It is not a claim that the upstream project is poor quality, and weak skills remain fully loadable.

## How to use the repository today

Until the MCP/client layer is finished, treat the repository as a source collection and routing specification:

1. Start with `skills/skill-loader/SKILL.md`.
2. For software work, follow `skills/software-development-skill/SKILL.md`.
3. Use `skills/skill-loader/index/software-development.md` and `skills/skill-loader/CATALOG.jsonl` to resolve candidate leaves.
4. Load only the smallest sufficient set of selected `SKILL.md` files.
5. Preserve lifecycle/dependency order and re-evaluate after failures or review findings.

The planned `skills-world-mcp` product will provide a stable discovery/routing/retrieval interface so clients do not need to implement repository traversal themselves. Formal launch is gated on that integration.

## Repository validation

Structural validation is defined in:

```bash
node scripts/validate-repository.mjs
```

It checks catalog JSONL parsing, duplicate IDs/paths, indexed file existence, skill frontmatter names, index/catalog consistency, provenance/source records, routing-evaluation references, and required public-release files.

Representative routing expectations live in `tests/routing/ROUTING_EVALS.jsonl`. These fixtures define positive and negative skill-selection expectations; they still need to be executed against the real routing/runtime before a promoted release.

## Self-contained collection

Every indexed downstream skill lives directly in this repository. Upstream repositories are used for provenance, licensing, refresh comparison, and historical source records — never as runtime dependencies.

## Provenance policy

Every imported third-party skill keeps a sibling `PROVENANCE.md` describing its original author/collection, source repository/path, pinned snapshot, license, import date, and local modification status. Reorganization must not erase attribution.

`SKILL_REGISTRY.md` records adoption history and popularity snapshots. Those metrics are intentionally historical snapshots, not live counters.

Skill World original skills may keep a sibling `SOURCES.md` for authoritative standards/product documentation used to ground the skill.

## Licensing

Skill World uses a source-aware licensing model:

- repository-original Skill World material is offered under the root `LICENSE`;
- imported/adapted third-party material remains governed by its applicable upstream license;
- sibling provenance/source records and local source-collection licenses preserve attribution and scope;
- `THIRD_PARTY_NOTICES.md` provides the repository-level source/license map.

The root license does not relicense third-party works merely because they are vendored here. When in doubt, consult the skill's `PROVENANCE.md`, the corresponding local/upstream license, and `THIRD_PARTY_NOTICES.md`.

In short: **we can stand on giant shoulders; we do not get to rename the giants.**

## Retrieval strategy

Today deterministic hierarchical routing remains the canonical authority:

1. root loader;
2. domain orchestrator;
3. domain index/catalog;
4. selected leaf skills only.

`skills/skill-loader/CATALOG.jsonl` is also retrieval-friendly metadata for future lexical/embedding/hybrid search. Retrieval may propose candidates, but candidates must still resolve through the canonical loader/orchestrator before use.

## Contributing

Read [`CONTRIBUTING.md`](CONTRIBUTING.md) before proposing a skill. New skills should fill a real capability, preserve source/license history, integrate with routing, and add routing-evaluation coverage when selection behavior changes.

Security reports should follow [`SECURITY.md`](SECURITY.md). Community expectations are in [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).

## Source collections

Current imported/adapted collections include work from:

- **Jesse Vincent / obra** — `obra/superpowers`
- **Anthropic, PBC** — `anthropics/skills`
- **Matt Pocock** — `mattpocock/skills`
- **GitHub, Inc. and contributors** — `github/awesome-copilot`
- **Addy Osmani** — `addyosmani/agent-skills`, `addyosmani/web-quality-skills`
- **Supabase** — `supabase/agent-skills`
- **Seth Hobson / wshobson** — `wshobson/agents`
- **Mindrally** — `Mindrally/skills`

See `THIRD_PARTY_NOTICES.md` and each imported skill's `PROVENANCE.md` for exact source and license information.

## Support Skill World ☕

If Skill World is useful, the most valuable support is to **star the repository, share it, report issues, and contribute improvements**. Financial support options are listed in [`SUPPORT.md`](SUPPORT.md), including PayPal and Vietnam QR support.
