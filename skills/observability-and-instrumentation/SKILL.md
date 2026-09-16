---
name: observability-and-instrumentation
description: Instrument production code with structured logs, metrics, tracing, correlation, actionable alerts, and runbooks so behavior is visible and diagnosable.
---

# Observability and Instrumentation

Code that cannot be observed cannot be operated. Instrumentation is part of feature design, not a post-launch afterthought.

## Process

1. Write the concrete questions an on-call engineer would ask when the feature misbehaves.
2. Choose the right signal: metrics tell that something is wrong; traces show where time/work went; logs explain why a specific case failed.
3. Use structured logs with stable event names and correlation/request IDs; propagate context across HTTP, queues, jobs, and service boundaries.
4. Instrument RED metrics for request/dependency paths and USE metrics for resources; avoid high-cardinality labels.
5. Use vendor-neutral tracing where possible and preserve context across async boundaries.
6. Alert on user-visible symptoms/SLOs rather than noisy infrastructure causes. Every page-worthy alert needs an actionable runbook.
7. Verify telemetry itself by inducing representative events/failures in a safe environment.

Never log secrets, tokens, full request bodies, or unnecessary PII.
