---
name: ci-cd-and-automation
description: Design or improve CI/CD pipelines, automated quality gates, test/build automation, preview/staged deployment, and rollback mechanics.
---

# CI/CD and Automation

CI/CD enforces the engineering bar consistently on every change. Shift checks left and keep delivery batches small.

## Pipeline principles

- Detect the project's real toolchain; do not invent commands.
- Run cheap/static checks before expensive runtime suites.
- Typical gates: formatting/lint → typecheck/static analysis → unit tests → build → integration/contract → E2E when justified → security/dependency checks → performance/bundle budgets where applicable.
- A failing required gate blocks promotion; fix the cause rather than disabling the check.
- Keep CI secrets in the platform secret store and separate test/staging/prod credentials.
- Use preview/staging environments and branch protection where appropriate.
- Make deployment reversible; feature flags and staged/canary rollout are preferred for riskier changes.
- Optimize slow pipelines with caching, parallel jobs, path-aware execution, sharding, and test-suite fixes rather than deleting validation.

CI failures route to `systematic-debugging`; successful pipeline setup must itself be verified.
