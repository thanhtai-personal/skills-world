---
name: helm-chart-scaffolding
description: Package Kubernetes applications as reusable Helm charts with clear values, helpers, dependency/version management, validation, and release-friendly structure.
---

# Helm Chart Scaffolding

Use Helm when Kubernetes manifests need reusable templating and packaging across environments or consumers.

## Rules

- Start from the application's actual manifests/runtime requirements; do not template complexity that does not vary.
- Keep `values.yaml` documented and structured by responsibility.
- Centralize repeated labels/names through helpers rather than duplicating templates.
- Keep chart version and app version semantics explicit.
- Pin chart dependencies and review transitive chart changes.
- Validate with `helm lint` and render with `helm template`; use dry-run/install tests where environment access permits.
- Avoid storing plaintext secrets in values files.
- Keep environment overrides small; large environment forks are a design smell.
- Preserve a clear path from rendered manifests to `k8s-security-policies` and deployment verification.

Use `k8s-manifest-generator` for base resource design and `gitops-workflow` when deployment reconciliation is GitOps-driven.
