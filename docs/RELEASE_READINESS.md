# Public Release Readiness

Skill World is intentionally in **pre-launch hardening**. The repository can remain accessible while the project avoids a formal public launch, release tag, or promotional push until the client/runtime layer is ready.

## Launch gate

Do not announce/tag the first public release until all required gates below are satisfied.

### Repository quality
- [x] Mandatory root and software-development routing model documented.
- [x] Source-aware provenance and third-party notice model present.
- [x] Structural repository validator present.
- [x] Routing benchmark fixtures cover representative positive and negative selections.
- [x] Contribution, security, conduct, issue, and PR guidance present.
- [ ] Add/enable pull-request CI for `node scripts/validate-repository.mjs`.
- [ ] Run the validator in CI and confirm it passes.
- [ ] Execute model/runtime routing evaluations against `tests/routing/ROUTING_EVALS.jsonl`; structural fixtures alone do not prove routing quality.
- [ ] Review root licensing presentation/tooling behavior before the first tagged release; third-party licenses remain authoritative regardless of the root file.

### MCP / product integration — required before launch

The public collection should be launched together with a usable consumption path rather than asking users to reverse-engineer repository internals. Before the first promoted release:

- [ ] `skills-world-mcp` syncs the complete public repository at an exact pinned commit and validates all indexed skill paths, provenance/source records, licenses, duplicate IDs, and weak-skill metadata.
- [ ] MCP exposes stable discovery/retrieval primitives such as domain listing, skill listing/search, task routing, skill/bundle retrieval, and provenance retrieval.
- [ ] At least one end-to-end MCP client flow is verified against the public repository snapshot.
- [ ] GPT/Claude/MCP setup documentation exists and uses the same canonical routing semantics as the repository.
- [ ] The landing/catalog experience clearly distinguishes imported/adapted skills, Skill World originals, provenance, and `weak-skill` status.
- [ ] The public repo README points to the finished MCP/integration path.

## Release decision

When every required gate is satisfied, create a release candidate from a known `main` commit, rerun repository validation plus routing evaluations, verify the MCP product is pinned to that same commit, then tag the first public version (for example `v0.1.0`).

Until then, treat `main` as public-but-prelaunch development rather than a formally launched compatibility contract.
