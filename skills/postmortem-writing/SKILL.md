---
name: postmortem-writing
description: Provisional blameless postmortem skill for incident timelines, systemic root-cause analysis, contributing factors, lessons, and owned follow-up actions.
metadata:
  skill-world-strength: weak-skill
---

# Postmortem Writing

Run after an incident is stabilized. The goal is organizational learning and recurrence prevention, not blame.

## Process

1. Reconstruct the evidence-backed timeline while context is fresh.
2. Quantify duration and user/business impact.
3. Ask what system/process conditions allowed the failure; avoid stopping at "human error".
4. Separate root causes from contributing factors.
5. Record what worked and what made response harder.
6. Produce specific action items with owner, due date, priority, and a verifiable outcome.
7. Track action items to completion and periodically look for recurring patterns across incidents.

Use 5 Whys or another RCA technique only as a tool; do not force a single-cause story when evidence supports multiple contributing factors.

## Weak-skill note

Marked `weak-skill` because it is a good standalone postmortem guide but does not yet integrate deeply with Skill World's incident telemetry, issue tracking, action-item lifecycle, or reliability metrics.
