---
name: supabase-postgres-best-practices
description: Postgres best practices maintained by Supabase. Use before schema, migration, SQL, RLS, index, connection, concurrency, query-performance, or Postgres diagnostics work.
license: MIT
---

# Supabase Postgres Best Practices

Apply Postgres-specific guidance across eight areas, ordered by impact:

1. Query performance
2. Connection management
3. Security and RLS
4. Schema design
5. Concurrency and locking
6. Data-access patterns
7. Monitoring and diagnostics
8. Advanced Postgres features

Use this skill not only for performance tuning but also before changing schema, migrations, indexes, functions/triggers, RLS, queues/jobs, vector search, imports/restores, and SQL that affects production behavior.

For performance work, inspect actual query plans and workload characteristics before changing indexes or configuration. For security work, treat RLS and tenant visibility as correctness constraints, not optional hardening. For schema evolution, preserve data and rollout safety rather than rewriting applied history.

This local copy intentionally provides the high-level rules only; the upstream collection contains the detailed per-rule reference library.
