# Defense-in-Depth Validation

After finding a root cause caused by invalid data/state, add proportionate checks at meaningful boundaries so the same class of failure cannot silently travel through the system.

Typical layers:
1. Entry/API validation — reject invalid external input.
2. Business/domain validation — enforce operation-specific invariants.
3. Environment/safety guards — prevent dangerous operations in sensitive contexts such as tests or production.
4. Diagnostic context — retain enough logging/telemetry to investigate future unexpected paths without exposing secrets.

Do not add redundant validation everywhere mechanically. Add checks where each layer owns a distinct invariant or safety responsibility.
