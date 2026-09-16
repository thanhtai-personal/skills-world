---
name: webapp-testing
description: Provisional browser/E2E testing skill for validating local web applications with Playwright-style real-browser workflows.
metadata:
  skill-world-strength: weak-skill
---

# Web Application Testing

Use real-browser automation to verify frontend functionality, user flows, forms, navigation, responsive behavior, browser console errors, and network behavior. Prefer the runtime's existing browser/Playwright capability; do not install tooling silently.

## Workflow

1. Confirm the application/URL and test environment are available.
2. Choose a user-visible workflow and explicit assertions before automating.
3. Prefer accessible/role or stable test-id selectors over styling classes.
4. Exercise the workflow incrementally and wait for observable conditions rather than arbitrary sleeps.
5. Capture screenshots/console/network evidence on failure when useful.
6. Clean up browser/resources.
7. Record exactly what was tested and what remained untested.

## Weak-skill note

Marked `weak-skill` because it covers browser/E2E execution well but does **not** provide a complete integration/contract/E2E strategy across service boundaries. Skill World uses it as a provisional filler for that broader lifecycle slot.
