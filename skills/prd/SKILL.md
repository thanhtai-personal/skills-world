---
name: prd
description: Provisional requirements/acceptance-criteria skill for translating vague product ideas into scoped, measurable PRDs.
metadata:
  skill-world-strength: weak-skill
---

# Product Requirements Document

Use this as Skill World's **provisional** requirements-engineering and acceptance-criteria capability. It is useful, but broader/product-oriented rather than a complete requirements-engineering discipline.

## Workflow

1. Discover the core problem, users, success metrics, constraints, dependencies, and unknowns. Do not invent missing constraints.
2. Define scope and explicit non-goals.
3. Write measurable requirements rather than vague qualities.
4. Express user stories only when they clarify user value; do not let story format replace precise requirements.
5. Attach concrete acceptance criteria to each requirement/story.
6. Record technical constraints, integration points, security/privacy concerns, risks, and rollout assumptions separately from user requirements.
7. Present the draft for review and resolve contradictions/TBDs before treating it as an approved spec.

A useful PRD contains: problem statement, proposed outcome, measurable success criteria, personas/actors, functional requirements, non-functional requirements, acceptance criteria, non-goals, constraints, dependencies, risks, and unresolved decisions.

## Weak-skill note

Skill World marks this `weak-skill` because it is the best verified current candidate for two open lifecycle slots, but its upstream scope is PRD generation rather than rigorous end-to-end requirements engineering. Replace or demote it when a stronger dedicated candidate is accepted.
