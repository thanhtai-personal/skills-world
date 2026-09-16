---
name: airflow-dag-patterns
description: Build production Apache Airflow DAGs with idempotent tasks, explicit dependencies, retries/timeouts, sensors, observability, tests, and safe deployment.
---

# Airflow DAG Patterns

Treat a DAG as orchestration metadata; keep heavy business/data logic in testable modules outside the DAG definition.

## Rules

- Tasks should be idempotent and safe to retry.
- Model dependencies explicitly; keep DAG topology understandable.
- Use execution/data intervals rather than wall-clock assumptions or hardcoded dates.
- Set bounded retries, retry delay/backoff, execution timeout, and concurrency limits appropriate to the workload.
- Prefer deferrable/reschedule behavior for long waits where supported.
- Keep credentials in the platform's connection/secret system, not DAG source.
- Avoid large payloads in XCom; pass references to durable data instead.
- Test DAG import/structure and unit-test underlying transformation/extraction logic.
- Add logs/metrics/alerts for pipeline failures and freshness/SLA requirements.
- Verify current Airflow/provider APIs before adopting version-sensitive patterns.

Use `data-quality-frameworks` for data assertions and `dbt-transformation-patterns` for analytics transformations.
