---
name: architecture-patterns
description: Provisional software-architecture skill for Clean Architecture, Hexagonal Architecture, Domain-Driven Design, bounded contexts, ports/adapters, dependency direction, and testable backend structure.
metadata:
  skill-world-strength: weak-skill
---

# Architecture Patterns

Use this as Skill World's provisional broad architecture capability when the problem is larger than a single module/interface but still centered on application/backend structure.

## Core patterns

### Clean Architecture
Keep business rules independent from frameworks and delivery mechanisms. Dependencies point inward: domain/entities → use cases/application → adapters → frameworks/drivers. Cross boundaries through explicit interfaces rather than concrete infrastructure dependencies.

### Hexagonal Architecture
Model external interactions as ports with concrete adapters. Keep the domain core framework-agnostic and inject implementations at the edge. This improves substitution, testing, and technology independence.

### Domain-Driven Design
Use bounded contexts, ubiquitous language, aggregates, value objects, repositories, domain events, and context relationships when the domain complexity justifies them. Avoid sharing one global model across unrelated subdomains.

## Architecture workflow

1. Identify the business/domain boundary and the deployable/service/module scope being designed.
2. Map core domain rules and external dependencies.
3. Choose dependency direction and ports at real seams.
4. Define bounded contexts/data ownership where applicable.
5. Keep framework/ORM/transport concerns outside the domain/application core.
6. Ensure core use cases can be tested without a real database/network where practical.
7. Record significant trade-offs through `documentation-and-adrs`.
8. For cross-system topology, availability, distributed consistency, capacity, migration/coexistence, and enterprise landscape concerns, treat this skill as incomplete and supplement with explicit reasoning rather than pretending those areas are fully covered.

## Weak-skill note

Marked `weak-skill` because the upstream skill is strong on backend/application architecture patterns but does not fully cover solution architecture across multiple systems, C4/system landscape, distributed consistency, capacity, failure/recovery topology, or enterprise transition architecture.
