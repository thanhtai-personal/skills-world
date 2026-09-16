# Root Cause Tracing

Trace a bug backward through the call/data chain until the original trigger is found. Do not stop at the location where the error merely becomes visible.

## Process

1. Observe the exact symptom and failure location.
2. Identify the immediate operation that fails.
3. Ask what caller supplied the bad state/value.
4. Repeat upward through callers and transformations.
5. Identify where the invalid state first became possible.
6. Fix that source and then add proportionate validation at downstream boundaries.

When manual tracing is unclear, temporarily instrument the dangerous operation with input values, relevant environment/config, and a stack trace. Run the smallest reproduction and use the evidence to move one level closer to the origin.

**Rule:** Fix the source, not just the symptom.
