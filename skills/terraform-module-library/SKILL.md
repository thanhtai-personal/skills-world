---
name: terraform-module-library
description: Build reusable Terraform/OpenTofu-style infrastructure modules with explicit inputs/outputs, provider/version constraints, validation, examples, and tests. Use for Infrastructure as Code design and reusable cloud provisioning.
---

# Terraform Module Library

Use reusable, composable infrastructure modules instead of copy-pasted cloud resources.

## Core rules

- Detect the current IaC tool/version/provider conventions before writing configuration.
- Keep modules focused around a coherent infrastructure capability.
- Define typed inputs with descriptions and validation; expose only useful outputs.
- Pin or constrain provider/module versions according to repository policy.
- Prefer `for_each`/composition over repeated near-duplicate resources.
- Keep environment-specific values outside reusable modules.
- Provide examples and tests for non-trivial modules.
- Tag/label resources consistently and make ownership/environment explicit.
- Treat plans as review artifacts; never apply destructive infrastructure changes without explicit approval.
- For cloud-provider-specific APIs that are version-sensitive, pair with `source-driven-development`.

Use this skill for reusable IaC design; use `multi-cloud-architecture` for provider/architecture decisions and `k8s-manifest-generator` for Kubernetes workload manifests.
