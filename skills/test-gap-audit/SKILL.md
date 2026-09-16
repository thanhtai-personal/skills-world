---
name: test-gap-audit
description: Provisional test-strategy capability that audits missing, weak, stale, or mis-scoped behavior coverage and recommends the smallest reliable test level.
metadata:
  skill-world-strength: weak-skill
---

# Test Gap Audit

Run a read-only, behavior-centered audit of test coverage. This is Skill World's provisional test-strategy skill.

## Process

1. Detect the repository's stack, test runners, CI checks, fixtures/mocks, naming conventions, and existing test levels.
2. Map the behavior under review: happy paths, failure paths, permissions, state transitions, migrations/config, integrations, retries/idempotency, and important user workflows.
3. Map existing coverage and inspect what assertions actually prove; do not use line/branch percentage as a substitute for behavior coverage.
4. Identify missing or weak tests, grounding every recommendation in a concrete behavior/risk.
5. Recommend the **smallest reliable test level** that proves the behavior: unit, integration, component, browser, contract, or E2E. Avoid E2E when a lower level proves the contract reliably.
6. Separate confirmed gaps from inferred gaps and state confidence.
7. If asked to implement tests, prioritize highest-risk gaps and follow existing test conventions.

## Weak-skill note

Marked `weak-skill` because it is primarily an audit/gap-analysis workflow, not a complete up-front organizational testing strategy covering environments, ownership, budgets, release policy, and test portfolio governance.
