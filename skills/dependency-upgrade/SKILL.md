---
name: dependency-upgrade
description: Upgrade major dependencies safely through compatibility analysis, official migration guidance, incremental version changes, lockfile discipline, testing, and rollback planning.
---

# Dependency Upgrade

Treat dependency upgrades as compatibility migrations, not package-manager housekeeping.

## Workflow

1. Detect exact current versions, lockfile/package-manager/workspace structure, and dependency graph.
2. Read authoritative release notes/migration guides for the target versions (`source-driven-development`).
3. Identify breaking APIs, peer/runtime constraints, security motivation, and transitive risks.
4. Upgrade incrementally and in dependency-order rather than changing the entire ecosystem at once.
5. Keep lockfile and manifest changes reviewable; do not use force/legacy peer-dependency flags merely to silence incompatibility.
6. Run the repository's real typecheck/tests/build/integration/browser checks after each meaningful step.
7. Use supported codemods only after reviewing their scope/diff.
8. Keep rollback straightforward and preserve migration notes for major ecosystem changes.
9. Configure Renovate/Dependabot only according to repository ownership/review policy; do not auto-merge major/security-sensitive updates blindly.

A vulnerability advisory is a lead until verified against the exact package/version and an authoritative advisory source.
