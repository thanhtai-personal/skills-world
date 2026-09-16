---
name: changelog-automation
description: Provisional release-management skill for Conventional Commits, semantic versioning, changelog generation, release notes, breaking-change documentation, and release automation.
metadata:
  skill-world-strength: weak-skill
---

# Changelog Automation

Use this as Skill World's provisional release-management capability for versioning, release notes, changelog discipline, and automatable release metadata. Pair it with `shipping-and-launch` for production rollout and rollback.

## Core practices

- Use Conventional Commits or another explicit change-classification convention that supports deterministic release automation.
- Follow Semantic Versioning when the project's public compatibility model supports it.
- Keep a structured changelog with clear Added/Changed/Deprecated/Removed/Fixed/Security or equivalent sections.
- Mark breaking changes explicitly and include an upgrade/migration guide when consumers must act.
- Generate release notes from verified commits/PRs rather than memory.
- Keep version bumps, tags, artifacts, and release notes consistent.
- Validate release metadata in CI where practical.
- Preserve issue/PR references and contributor attribution when available.

## Release workflow

1. Identify the last released version/tag and the change range.
2. Classify changes and breaking compatibility impact.
3. Determine the version bump according to the repository's versioning policy.
4. Generate/update changelog and release notes.
5. Validate migration/deprecation notes for breaking changes.
6. Ensure CI/build/artifact state matches the version being released.
7. Hand off to `shipping-and-launch` for staged rollout, production monitoring, and rollback.

## Weak-skill note

Marked `weak-skill` because it covers semantic versioning, changelog/release-note automation, and part of release governance, but not the full organizational discipline of release trains, approval policy, long-lived support branches, compatibility windows, artifact promotion governance, or cross-team release coordination.
