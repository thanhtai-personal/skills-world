---
name: spark-optimization
description: Optimize Apache Spark workloads using execution-plan evidence, partitioning, adaptive query execution, shuffle/skew reduction, memory tuning, efficient formats, and measured caching.
---

# Apache Spark Optimization

Optimize from evidence: Spark UI, stage/task metrics, query plans, skew/spill/GC signals, and dataset size. Do not cargo-cult executor/partition numbers.

## Rules

- Inspect the execution plan and Spark UI before tuning.
- Minimize unnecessary shuffles/wide transformations.
- Right-size partitioning from actual data volume/cluster resources; use adaptive query execution when supported.
- Handle skew explicitly through better partition keys, salting, skew-aware joins, or adaptive features.
- Broadcast only genuinely small dimensions and verify memory impact.
- Prefer built-in Spark SQL/DataFrame functions over row-wise UDFs where possible.
- Use efficient columnar formats and predicate/column pruning.
- Cache only reused expensive intermediates and unpersist them intentionally.
- Never `collect()` large datasets to the driver.
- Benchmark before/after with the same representative workload and record the metric changed.

Pair with `data-quality-frameworks` so faster jobs do not silently produce incorrect data.
