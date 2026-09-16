---
name: accessibility
description: Audit and improve web accessibility using WCAG 2.2 principles and evidence-led automated/manual verification. Use for a11y, keyboard, screen-reader, focus, contrast, forms, motion, or accessibility compliance work.
license: MIT
---

# Accessibility (a11y)

Use WCAG 2.2's Perceivable, Operable, Understandable, Robust principles as the quality model. Automated scores are evidence, not proof of conformance.

## Workflow

1. Establish representative pages/states and target conformance level.
2. When possible, collect live automated evidence with Lighthouse/axe or equivalent and inspect the affected rendered nodes.
3. Test keyboard navigation, focus order/visibility, accessible names/roles/states, headings/landmarks, form labels/errors, zoom, reduced motion, and relevant screen-reader behavior.
4. Fix source using semantic/native elements before adding ARIA.
5. Check contrast and ensure information is not conveyed by color alone.
6. Re-run equivalent automated checks and affected manual flows.
7. Clearly separate verified issues from things requiring human/assistive-technology validation.

Target WCAG AA unless project/legal requirements specify otherwise. Avoid claiming conformance from Lighthouse/axe scores alone.
