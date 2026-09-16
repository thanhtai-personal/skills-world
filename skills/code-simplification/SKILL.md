---
name: code-simplification
description: Simplify working code for clarity and maintainability without changing behavior. Use after correctness is established or when review identifies avoidable complexity.
---

# Code Simplification

Simplify for comprehension, not line count. Preserve observable behavior exactly.

## Process

1. Understand responsibility, callers, tests, conventions, and historical constraints before removing structure.
2. Scope primarily to recently changed/review-target code unless broader refactoring is requested.
3. Look for deep nesting, misleading names, unnecessary wrappers, duplication, dead code, speculative abstractions, and complexity that adds no leverage.
4. Make one reviewable simplification at a time.
5. Run relevant tests/checks without weakening or rewriting tests merely to make the refactor pass.
6. Revert simplifications that reduce clarity, testability, performance where measured, or architectural intent.
7. Keep behavior-preserving refactors separate from feature changes when practical.

Do not simplify code you do not yet understand, and do not remove error handling or meaningful seams merely because fewer lines look cleaner.
