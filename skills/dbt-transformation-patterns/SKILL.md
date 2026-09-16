---
name: dbt-transformation-patterns
description: Build maintainable dbt analytics transformations with staging/intermediate/mart layers, tests, documentation, lineage, incremental models, and version-controlled analytics engineering.
---

# dbt Transformation Patterns

Organize transformations so source cleanup, reusable business logic, and consumption models stay distinct and testable.

## Rules

- Define sources explicitly and monitor freshness for business-critical feeds.
- Use staging models for source-aligned cleanup/renaming rather than embedding raw-source quirks everywhere.
- Put reusable joins/business logic in intermediate models.
- Expose curated dimensions/facts/marts for consumers.
- Add schema/data/relationship tests around real data contracts and business invariants.
- Document model/column meaning and ownership; preserve lineage.
- Use incremental models only when data scale/latency justifies them and define unique keys/late-arriving data behavior explicitly.
- Avoid repeated SQL by using reusable models/macros where they increase clarity.
- Validate in development/CI before production runs.
- Pair with `data-quality-frameworks` for broader contracts/quality gates.
