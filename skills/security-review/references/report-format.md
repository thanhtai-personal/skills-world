# Security Report Format

Use this structure for security-review output.

## Header
Include project/scope, scan date, languages/frameworks, and explicit limitations.

## Findings Summary
Show counts by severity (CRITICAL/HIGH/MEDIUM/LOW/INFO), dependency findings, and secrets findings.

## Finding Card
For each finding include:
- severity and confidence;
- category;
- file/line evidence;
- vulnerable code or concise description;
- attacker-controlled source and exploit path;
- concrete impact;
- recommended remediation;
- relevant standard/reference when appropriate.

## Dependency Audit
List only dependency findings supported by current advisory evidence. Include package/version, advisory identifier, affected range, safe/fixed range when verified, and source.

## Secrets Scan
Never reproduce full real credentials. Use `<REDACTED>` and recommend rotation plus version-history review when exposure is plausible.

## Patch Proposals
For CRITICAL/HIGH findings, show before/after or a patch proposal. State clearly that patches are proposals and have not been applied unless the user separately requested remediation.

## Footer
State what was scanned, what was not, static-analysis limitations, and prioritized next steps.

Source snapshot: `github/awesome-copilot@9ce814859eaa473178a1463ee3aa0c54a8860b86`, `skills/security-review/references/report-format.md`.
