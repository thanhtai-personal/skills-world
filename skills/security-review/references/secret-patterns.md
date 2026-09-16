# Secret & Credential Detection Patterns

Use during the secrets/exposure scan. Treat matches as leads, not proof. Never reproduce a full real credential in output.

## High-confidence families
Look for provider token prefixes, private-key blocks, authenticated database connection strings, passwords/secrets assigned to literals, cloud credentials, OAuth client secrets, webhook signing secrets, and service-account material.

## Context checks
- Distinguish real values from placeholders/examples.
- Inspect assignment context and nearby variable names.
- Consider high-entropy long literals as leads, while excluding UUIDs and known non-secret encoded content.
- Check tracked `.env*`, private key/cert files, credential JSON, and secrets/config files.
- Review CI, Docker, Terraform, and deployment configuration for values embedded directly rather than secret references.

## Reporting
Redact discovered secrets as `<REDACTED>` and report only enough prefix/context to identify the location safely. Recommend rotation when a real secret may have entered version history.

Source snapshot: `github/awesome-copilot@9ce814859eaa473178a1463ee3aa0c54a8860b86`, `skills/security-review/references/secret-patterns.md`.
