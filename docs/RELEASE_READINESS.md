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

The private `skills-world-mcp` source implementation has now been merged as an MVP and is pinned to public Skill World commit `af9aede1e79acabe02362971da73c969a39d920f`. It includes source-level implementations for snapshot sync/validation, deterministic routing, REST/OpenAPI, Remote MCP v2, a React catalog/routing UI, GPT/MCP integration kits, and container deployment.

Source-complete is **not** the same as runtime-verified. This chat environment cannot run npm installation, builds, the full vendored sync, a real MCP client, or browser validation, so those release gates remain open.

Before the first promoted release:

- [x] MCP source exposes stable discovery/retrieval primitives: snapshot identity, domain listing, skill listing/search, task routing, skill/bundle retrieval, and provenance retrieval.
- [x] GPT/MCP setup documentation exists and follows the same canonical routing semantics as the public repository.
- [x] Landing/catalog source distinguishes imported/adapted skills, Skill World originals, provenance/source records, and `weak-skill` status.
- [x] Private runtime tests are wired to consume the public `tests/routing/ROUTING_EVALS.jsonl` contract from the pinned snapshot.
- [ ] Run `skills-world-mcp` full exact-commit sync and validate all indexed skill paths, provenance/source records, licenses, duplicate IDs, and weak-skill metadata.
- [ ] Install dependencies and generate/commit reproducible package lockfiles for server and web.
- [ ] Run server/web typecheck, tests, and production builds successfully.
- [ ] Verify at least one end-to-end Remote MCP client flow against the pinned public repository snapshot.
- [ ] Verify the web product in a browser, including deep links, responsive layout, keyboard navigation, and source/provenance presentation.
- [ ] Deploy the MCP/web product over HTTPS and verify Host/origin configuration plus streaming behavior.
- [ ] Update the public README with the finished public MCP/integration URL once that endpoint is actually available.

## Release decision

When every required gate is satisfied, create a release candidate from a known public `main` commit, rerun repository validation plus routing evaluations, verify the deployed MCP product reports that same commit through its snapshot metadata, then tag the first public version (for example `v0.1.0`).

Until then, treat `main` as public-but-prelaunch development rather than a formally launched compatibility contract.
