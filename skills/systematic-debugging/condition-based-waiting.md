# Condition-Based Waiting

Replace arbitrary sleeps with waiting on the real condition that makes the next step safe.

## Pattern

Instead of `sleep(1000)` and hoping work finished, poll or await an observable condition with a bounded timeout. The condition should describe the state you actually require, not elapsed time.

A good wait has:
- a clear success predicate;
- a bounded timeout;
- useful timeout diagnostics;
- cancellation when the surrounding operation is cancelled;
- no busy-spin.

Use fixed delays only when elapsed time itself is the behavior being tested.
