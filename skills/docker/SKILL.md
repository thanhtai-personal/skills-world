---
name: docker
description: Provisional Docker containerization skill for Dockerfiles, image hardening, Compose, build caching, runtime configuration, networking, and CI image workflows.
metadata:
  skill-world-strength: weak-skill
---

# Docker

Use Docker for reproducible packaging and local/runtime isolation. This is Skill World's current provisional Docker capability.

## Core rules

- Inspect the current Dockerfile/Compose/runtime version before changing behavior.
- Use multi-stage builds and copy only runtime artifacts into final images.
- Pin meaningful image versions; do not default to `latest`.
- Use `.dockerignore` and order layers to maximize safe cache reuse.
- Run production containers as non-root and drop unnecessary capabilities.
- Never bake secrets into images; prefer runtime secret/config mechanisms.
- Add health checks and explicit resource/runtime configuration where the deployment platform needs them.
- Use Compose for local multi-service orchestration; keep persistent data in explicit volumes.
- Build/tag/scan images in CI and preserve immutable image identity for releases.
- Ask before destructive cleanup such as removing persistent volumes or broad prune operations.

## Weak-skill note

Marked `weak-skill` because the candidate is useful and has the strongest adoption found among dedicated general Docker skills in this search, but its source repository/adoption is materially weaker than Skill World's stronger collections.
