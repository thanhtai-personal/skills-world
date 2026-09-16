---
name: frontend-ui-engineering
description: Build production-quality accessible, responsive frontend UI while preserving project design-system and state/data conventions. Use during implementation of user-facing web interfaces.
---

# Frontend UI Engineering

This skill complements `frontend-design`: design establishes visual/UX direction; this skill governs production implementation.

## Rules

- Read the existing design system/component patterns before changing UI.
- Prefer focused, composable components over configuration-heavy abstractions.
- Separate server/data orchestration from presentation where it materially improves clarity.
- Choose the simplest state location that matches existing architecture; do not duplicate server state into global client state without a reason.
- Implement responsive behavior, loading/error/empty states, keyboard access, focus management, semantic HTML, and meaningful accessible names.
- Use project spacing/color/typography tokens instead of arbitrary values.
- Preserve business logic, permissions, validation, API behavior, and side effects during visual redesigns unless requirements explicitly change them.
- Verify user-facing behavior in a real browser when tooling is available.

Avoid generic AI visual defaults, unrelated frontend rewrites, speculative state abstractions, and UI that only works at one viewport/state.
