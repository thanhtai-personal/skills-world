---
name: deprecation-and-migration
description: Plan and execute safe deprecations and migrations for APIs, systems, features, libraries, and production schemas. Use when replacing/removing legacy behavior or moving consumers/data safely.
---

# Deprecation and Migration

Removal is an engineering lifecycle, not a delete operation. Deprecate only with an understood consumer set, replacement path, verification strategy, and rollback/compatibility plan.

## Workflow

1. Quantify current users/consumers and ongoing maintenance/risk.
2. Ensure a production-viable replacement exists before compulsory deprecation.
3. Publish scope, migration path, compatibility/deprecation window, and verification steps.
4. Migrate incrementally; use adapters, feature flags, strangler routing, or other coexistence mechanisms where appropriate.
5. For database shape changes, prefer expand → migrate/backfill → contract so old/new code can coexist during rollout.
6. Make destructive steps separate and late; require explicit approval when irreversible data changes are involved.
7. Verify zero active consumers before final removal.
8. Remove obsolete code/tests/config/docs after migration is complete, then verify again.

Coordinate with `api-and-interface-design`, database guidance, `shipping-and-launch`, and `documentation-and-adrs` when those concerns apply.
