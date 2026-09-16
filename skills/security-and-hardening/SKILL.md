---
name: security-and-hardening
description: Security-first implementation guidance for untrusted input, auth, sensitive data, external integrations, dependencies, privacy, and AI/LLM features. Use during design and implementation, before final security review.
---

# Security and Hardening

Security is a constraint throughout development, not only a final audit.

## Threat-model first

Before hardening a security-relevant feature: map trust boundaries, name assets, run a quick STRIDE pass, and write abuse cases beside normal use cases.

## Non-negotiable practices

- Validate external input at system boundaries.
- Parameterize database queries and encode output appropriately.
- Enforce authentication and resource-level authorization server-side.
- Keep secrets out of source, logs, prompts, and client-readable storage.
- Use secure session/cookie settings and HTTPS.
- Restrict CORS, file uploads, server-side URL fetching, and destructive filesystem targets.
- Audit dependencies using the actual package manager/lockfile and review supply-chain changes.
- Treat model/LLM output as untrusted data; constrain tool permissions and destructive actions.
- Minimize PII, define retention/deletion paths, and avoid collecting data without a clear purpose.

Security findings discovered here route back to Design/Implementation; `security-review` remains the independent review phase.
