---
name: performance-optimization
description: Measure-first performance optimization across frontend, backend, queries, databases, and runtime behavior. Use when performance requirements or measured regressions exist.
---

# Performance Optimization

**Measure before optimizing.** Performance work without evidence is guessing.

## Workflow

1. Establish a reproducible baseline with representative conditions.
2. Identify the actual bottleneck with profiling, traces, query plans, RUM/lab data, or runtime metrics.
3. Change one bottleneck at a time.
4. Re-measure using the same method and conditions.
5. Keep the change only when improvement exceeds normal variance and correctness checks remain green; otherwise revert.
6. Record failed experiments so they are not repeated.
7. Add a regression guard for the user-facing metric that justified the work.

Common domains include Core Web Vitals, bundle/loading behavior, React rendering, N+1 queries, indexing/query plans, connection pools, caching correctness, memory/CPU, latency, and high-volume data access.

Do not introduce caches, indexes, memoization, or concurrency changes merely because they are common optimizations; measurement must justify them.
