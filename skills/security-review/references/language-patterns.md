# Language-Specific Vulnerability Patterns

Load the relevant section after identifying the project language/framework.

## JavaScript / TypeScript
Review dangerous dynamic execution (`eval`, dynamic `Function`), shell/process execution, user-controlled filesystem paths, permissive CORS/proxy settings, untrusted HTML sinks, and server actions/routes missing authorization. Framework defaults matter: verify exploitability instead of flagging syntax alone.

## Python
Review raw/interpolated SQL, template injection, `eval`/`exec`, unsafe subprocess usage, path traversal, debug/secret configuration, unsafe deserialization, and missing auth dependencies.

## Java / Spring
Review SQL construction, unsafe XML parsing/XXE, native Java deserialization, overly broad Spring Security rules, exposed management endpoints, and unsafe reflection/process execution.

## PHP
Review direct request data in SQL, dynamic include/eval/exec, unsafe unserialize, loose comparisons in security-sensitive paths, and filesystem path handling.

## Go
Review shell invocation, SQL construction, filesystem paths, insecure TLS, auth middleware coverage, unsafe template usage, and resource/concurrency boundaries.

## Ruby / Rails
Review raw SQL interpolation, mass assignment/strong parameters, dynamic eval/send, open redirects, unsafe YAML/object deserialization, and authorization coverage.

## Rust
Review `unsafe` blocks, integer overflow in sensitive calculations, unsafe deserialization formats, command/process execution, path handling, and cryptographic randomness.

Source snapshot: `github/awesome-copilot@9ce814859eaa473178a1463ee3aa0c54a8860b86`, `skills/security-review/references/language-patterns.md`.
