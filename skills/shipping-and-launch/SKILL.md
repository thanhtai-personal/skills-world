---
name: shipping-and-launch
description: Prepare and execute safe production launches with pre-launch gates, observability, staged rollout, feature flags, success thresholds, and rollback strategy.
---

# Shipping and Launch

Every launch should be **reversible, observable, and incremental**.

## Pre-launch gate

Confirm code quality, security, performance, accessibility when applicable, production configuration, migrations, health checks, documentation, monitoring, and rollback readiness.

## Rollout process

1. Validate in staging/preview.
2. Deploy with risky behavior disabled behind a flag when appropriate.
3. Verify health, logs, errors, and latency.
4. Enable for internal/beta users, then canary/gradual cohorts.
5. Compare error, latency, client-error, and business metrics against baseline.
6. Advance only when thresholds remain healthy; otherwise hold or rollback.
7. After full rollout, remove temporary flags/dead paths and continue monitoring.

Define rollback triggers before deployment, including data/migration implications. Do not treat a successful deploy command as a successful release.
