---
name: data-quality-frameworks
description: Implement data quality validation, contracts, freshness checks, schema tests, relationship checks, and CI/monitoring gates for reliable data pipelines.
---

# Data Quality Frameworks

Test data behavior and contracts, not vanity coverage.

## Quality dimensions

Consider completeness, uniqueness, validity, consistency, accuracy against trusted references, and timeliness/freshness according to business risk.

## Workflow

1. Identify critical datasets/columns and downstream consumers.
2. Define explicit contracts and invariants close to the pipeline boundary where failures should be caught.
3. Add schema/column checks first, then relationship/cross-table and business-rule validations where needed.
4. Use tools already present (dbt tests, Great Expectations, SQL checks, warehouse constraints, etc.) rather than adding a framework without justification.
5. Make thresholds based on known distributions/SLOs rather than arbitrary constants.
6. Alert on actionable failures and distinguish hard failures from warnings.
7. Version data contracts/schema changes and coordinate breaking changes with consumers.
8. Monitor freshness/volume/drift where stale or malformed data can silently produce wrong decisions.

Data-quality failures should block or quarantine unsafe downstream promotion when the business impact warrants it.
