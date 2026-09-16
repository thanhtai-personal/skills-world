# Writing Good Tests

Good tests prove externally meaningful behavior and fail for a clear production reason.

Before writing a test, name the production change that would make the test fail. If you cannot, the test may be asserting implementation details rather than behavior.

Prefer:
- one behavior per test;
- descriptive names;
- real production paths over mocks;
- assertions on outputs/state/observable effects;
- the smallest setup that expresses intent;
- explicit edge/error cases when they are part of the contract.

Use mocks only at boundaries where using the real dependency is impractical or harmful. Do not assert that a mock was called when the actual requirement is about user-visible or domain behavior.

Keep test-only helpers in test support code rather than production classes. Understand a dependency's side effects before replacing it with a mock.
