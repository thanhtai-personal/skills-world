---
name: workflow-orchestration-patterns
description: Design durable long-running distributed workflows with Temporal-style workflow/activity separation, deterministic workflow code, idempotent activities, retries, timers, compensation, and recovery.
---

# Workflow Orchestration Patterns

Use a durable workflow engine for long-running or failure-sensitive processes spanning services/databases/humans where state must survive process restarts.

## Rules

- Keep workflows deterministic; external I/O belongs in activities.
- Make activities idempotent and configure explicit timeouts/retry policies.
- Use workflow state/timers/signals rather than ad-hoc sleeps/poll loops.
- Model compensation explicitly for partially completed business workflows.
- Distinguish retryable infrastructure failures from non-retryable validation/business failures.
- Use child workflows for decomposition when lifecycle/scale warrants it.
- Test with workflow-engine test facilities, including timer/time-skipping behavior where supported.
- Observe workflow duration, pending queues, activity failures, retries, and stuck workflows.

Do not use durable orchestration for simple CRUD, stateless request/response, batch analytics that belongs in Airflow, or real-time stream processing that belongs in a streaming system.
