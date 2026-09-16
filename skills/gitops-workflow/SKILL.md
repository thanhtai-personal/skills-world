---
name: gitops-workflow
description: Implement declarative Kubernetes delivery with Argo CD or Flux, continuous reconciliation, environment promotion, secret separation, drift control, and progressive delivery.
---

# GitOps Workflow

Use GitOps when Git should be the reviewed, versioned source of desired cluster state and a controller reconciles actual state toward it.

## Principles

- Desired state is declarative, versioned, and reviewable.
- Controllers pull/reconcile desired state; manual imperative changes are exceptions, not the normal deployment path.
- Separate application source from deployment/configuration repositories when that improves ownership and blast-radius control.
- Keep secrets out of Git unless they are encrypted/sealed with an approved mechanism.
- Use explicit environment promotion and production approval policy.
- Treat prune/self-heal carefully; understand what a controller may delete before enabling automatic pruning.
- Monitor reconciliation health, drift, failed syncs, and controller permissions.
- Prefer progressive delivery when rollout risk justifies canary/blue-green behavior.
- Validate rendered Helm/Kustomize output before reconciliation.

Changes that can delete production resources, rotate credentials, or alter cluster-wide policy require explicit approval and rollback planning.
