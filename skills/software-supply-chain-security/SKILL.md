---
name: software-supply-chain-security
description: Secure software artifacts and dependencies with SBOMs, software composition analysis, artifact signing/verification, provenance/attestations, and SLSA-oriented build controls. Use for release pipelines, dependency risk, artifact trust, SBOM, Sigstore/Cosign, SLSA, or provenance work.
---

# Software Supply Chain Security

Protect the path from source and dependencies to the artifact a consumer actually runs. This skill covers four connected capabilities: **SBOM, SCA, artifact signing, and provenance/SLSA**.

## 1. Inventory with SBOM

- Generate an SBOM for release artifacts, not just the source checkout.
- Prefer an established machine-readable format such as CycloneDX or SPDX according to ecosystem/tooling requirements.
- Include direct and transitive components where the generator supports them.
- Bind the SBOM to the exact artifact/version/digest it describes.
- Generate SBOMs in CI from reproducible release inputs; avoid hand-maintained dependency lists.
- Preserve component versions, package identifiers, licenses, hashes, and dependency relationships when available.

An SBOM is inventory evidence, not proof that dependencies are safe.

## 2. Analyze dependencies with SCA

- Scan lockfiles, resolved dependency graphs, container images, and/or generated SBOMs with the repository's approved SCA tooling.
- Match findings to the exact installed version and authoritative advisory where possible.
- Distinguish vulnerable-but-unreachable/unused findings from exploitable runtime exposure without dismissing either silently.
- Prioritize remediation by exploitability, reachability, privilege, exposure, and available fix rather than CVSS alone.
- Prefer upgrade/removal/feature isolation over indefinite suppression.
- Every suppression needs an owner, reason, scope, and expiry/review condition.

Use `dependency-upgrade` to execute non-trivial upgrades and `security-review` for broader application/security findings.

## 3. Sign and verify artifacts

- Sign the **release artifact digest** (container, package, binary, bundle), not a mutable tag/name alone.
- Prefer identity-based/keyless signing when the organization/platform supports it; otherwise use managed keys with clear rotation and access policy.
- Verification is mandatory: a signature that consumers never verify does not create an effective trust control.
- Verification policy should constrain expected identity/issuer/workflow/repository where tooling supports it.
- Keep signing credentials out of source and ordinary CI variables when OIDC/keyless flow is available.
- Treat transparency-log inclusion and timestamp/bundle evidence as part of verification where applicable.

## 4. Generate and verify provenance

- Produce provenance/attestations from the build system itself, binding artifact subject/digest to source revision and build identity.
- Prefer current SLSA/in-toto-compatible provenance mechanisms supported by the CI platform.
- Record the build inputs and builder identity accurately; do not fabricate provenance after the artifact leaves the build boundary.
- Consumers/deployers should verify provenance against policy before trusting high-value artifacts.
- Use hermetic/reproducible/isolated build techniques when required by the target assurance level; do not claim a SLSA level without validating its actual requirements.

## Recommended release path

```text
resolve/pin dependencies
→ SCA
→ build artifact
→ generate SBOM for artifact
→ generate provenance/attestation
→ sign/attest artifact digest
→ verify signature + provenance
→ publish
→ verify again at deploy/consumer boundary when risk warrants it
```

## CI/CD guardrails

- Pin third-party CI actions/tools to reviewed immutable versions/digests where practical.
- Grant CI tokens the minimum permissions required; OIDC permissions are security-sensitive.
- Separate build and release privileges where the threat model warrants it.
- Never auto-fix supply-chain findings by blindly updating every dependency.
- Never publish or deploy after failed artifact verification merely by adding an ignore flag.

## Validation

Before claiming the supply chain is protected, verify the actual release artifact: SBOM exists and maps to it, SCA ran on relevant inputs, signature/attestation verifies, expected identity/policy matches, and the release pipeline fails closed on required controls.
