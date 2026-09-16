---
name: k8s-manifest-generator
description: Create production-oriented Kubernetes workload manifests with resources, probes, security contexts, configuration separation, labels, storage, and validation.
---

# Kubernetes Manifest Generator

Generate Kubernetes manifests from the application's actual runtime requirements, not from boilerplate alone.

## Rules

- Detect Kubernetes/API versions and repository conventions first.
- Set resource requests/limits intentionally.
- Add readiness/liveness/startup probes where the workload needs them.
- Use immutable/specific image references according to release policy.
- Run as non-root and use restrictive security contexts by default.
- Separate configuration from code and avoid committing plaintext secrets.
- Use consistent labels/selectors and verify Service selectors match Pods.
- Model persistent storage explicitly for stateful workloads.
- Validate manifests/dry-run before applying.
- Store manifests in version control and pair with GitOps/Helm only when those abstractions materially help.

Cluster-wide policy and RBAC concerns route to `k8s-security-policies`.
