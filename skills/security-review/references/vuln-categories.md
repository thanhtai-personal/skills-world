# Vulnerability Categories — Deep Reference

Use this reference during deep review. Findings require code-path evidence and an attacker-controlled or otherwise realistic trigger.

## Injection
Review SQL/query construction, shell/process execution, template/HTML injection, LDAP/XPath/header/log injection, and dynamic code execution. Parameterization/escaping/framework protections may make apparent matches safe.

## XSS
Trace untrusted data into raw HTML/DOM/template sinks. React/Angular/Vue escaping defaults reduce risk except at explicit bypass/raw-html APIs.

## SSRF
Trace user-controlled URLs/hosts into server-side HTTP clients. Check redirects, DNS/IP validation, metadata/internal network reachability, and URL normalization.

## Authentication & Authorization
Review missing auth, BOLA/IDOR, role/ownership checks, JWT verification, session/cookie controls, CSRF where cookie auth is used, and privilege escalation paths.

## Secrets & Sensitive Data
Check source/config/logs/errors/API responses for credentials, tokens, PII, keys, sensitive internal details, or dangerous debug output.

## Cryptography
Flag security use of broken/deprecated algorithms, weak randomness, hardcoded/reused IVs or salts, insecure password hashing, or disabled TLS verification when reachable in real flows.

## Dependencies
Use package-manager/advisory tooling or authoritative current advisories. A static watchlist is only a lead and may age.

## Business Logic
Look for TOCTOU/race conditions, replay/double-spend style flows, missing rate limits on sensitive endpoints, predictable resource identifiers where secrecy is relied upon, and state-machine bypasses.

## Filesystem / Path Traversal
Trace user-influenced paths through normalization, joins, symlinks, and allowlisted roots. Check read/write/delete operations.

Source snapshot: `github/awesome-copilot@9ce814859eaa473178a1463ee3aa0c54a8860b86`, `skills/security-review/references/vuln-categories.md`.
