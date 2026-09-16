---
name: k8s-security-policies
description: Secure Kubernetes workloads/clusters with Pod Security Standards, NetworkPolicy, least-privilege RBAC, security contexts, admission policy, and cluster security verification.
---

# Kubernetes Security Policies

Apply defense in depth at Kubernetes boundaries.

## Rules

- Prefer namespace-level Pod Security Standards appropriate to the workload.
- Start network policy from explicit traffic requirements; default-deny is useful only when required paths are understood and tested.
- Grant RBAC to the smallest namespace/resources/verbs required.
- Use dedicated service accounts; avoid broad/default permissions.
- Run containers non-root, deny privilege escalation, use RuntimeDefault seccomp, read-only filesystems where practical, and drop capabilities by default.
- Use admission policy (for example Gatekeeper/Kyverno) only with tested constraints and rollout strategy.
- Encrypt/protect secrets according to platform capability; never encode plaintext secrets merely because Kubernetes accepts base64.
- Verify CNI/network-policy support and effective authorization before claiming a policy works.
- Pair cluster security with image/dependency/security review; Kubernetes policy is not a substitute for application security.

Changes that can lock operators/workloads out require staged rollout and rollback planning.
