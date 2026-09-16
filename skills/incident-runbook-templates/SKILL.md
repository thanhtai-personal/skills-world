---
name: incident-runbook-templates
description: Provisional production incident-response skill for severity, triage, mitigation, recovery, communication, escalation, verification, and runbook structure.
metadata:
  skill-world-strength: weak-skill
---

# Incident Runbook Templates

Use during active production incidents or when preparing service-specific incident runbooks. Optimize for a responder operating under pressure.

## Response sequence

1. Declare severity and user/business impact.
2. Establish incident roles/communication channel and escalation path.
3. Detect/triage using observable evidence; note recent deploy/config changes.
4. Mitigate impact before pursuing a perfect root-cause explanation when the service is actively unhealthy.
5. Verify each mitigation step and keep a rollback/escape hatch.
6. Communicate status at a fixed cadence, even when there is no new information.
7. Resolve only after service health is confirmed.
8. Preserve timeline/evidence and route to `postmortem-writing` after stabilization.

Runbooks should include prerequisites, expected results, what to do when a command fails, warnings before destructive actions, owner/last-verified metadata, dashboards, and explicit escalation criteria.

## Weak-skill note

Marked `weak-skill` because it is primarily a runbook/template discipline rather than a full incident-command system with tooling, ownership model, SLO/error-budget policy, and organization-specific escalation integration.
