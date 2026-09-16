---
name: security-review
description: 'AI-powered codebase security scanner that reasons about code like a security researcher — tracing data flows, understanding component interactions, and catching vulnerabilities that pattern-matching tools miss. Use this skill when asked to scan code for security vulnerabilities, find bugs, check for SQL injection, XSS, command injection, exposed API keys, hardcoded secrets, insecure dependencies, access control issues, or any request like "is my code secure?", "review for security issues", "audit this codebase", or "check for vulnerabilities". Covers injection flaws, authentication and access control bugs, secrets exposure, weak cryptography, insecure dependencies, and business logic issues across JavaScript, TypeScript, Python, Java, PHP, Go, Ruby, and Rust.'
---

# Security Review

An AI-powered security scanner that reasons about your codebase the way a human security researcher would — tracing data flows, understanding component interactions, and catching vulnerabilities that pattern-matching tools miss.

## When to Use This Skill

Use this skill when the request involves:
- Scanning a codebase or file for security vulnerabilities
- Running a security review or vulnerability check
- Checking for SQL injection, XSS, command injection, or other injection flaws
- Finding exposed API keys, hardcoded secrets, or credentials in code
- Auditing dependencies for known CVEs
- Reviewing authentication, authorization, or access control logic
- Detecting insecure cryptography or weak randomness
- Performing a data flow analysis to trace user input to dangerous sinks
- Any request phrasing like "is my code secure?", "scan this file", or "check my repo for vulnerabilities"

## How This Skill Works

Unlike traditional static analysis tools that match patterns, this skill:
1. Reads code like a security researcher — understanding context, intent, and data flow.
2. Traces across files — following how user input moves through the application.
3. Self-verifies findings — re-examines each result to filter false positives.
4. Assigns severity ratings — CRITICAL / HIGH / MEDIUM / LOW / INFO.
5. Proposes targeted patches — every finding includes a concrete fix.
6. Requires human approval — nothing is auto-applied.

## Execution Workflow

Follow these steps in order every time.

### Step 1 — Scope Resolution
Determine what to scan. If a path was provided, scan only that scope; otherwise scan the project root. Identify languages/frameworks and read `references/language-patterns.md`.

### Step 2 — Dependency Audit
Inspect relevant manifests/lockfiles for known vulnerable packages. Read `references/vulnerable-packages.md` as a watchlist, but verify time-sensitive CVE/version claims against current authoritative advisory data before reporting them as current facts.

### Step 3 — Secrets & Exposure Scan
Scan code/config/CI/IaC for hardcoded secrets, credentials, committed env files, connection strings, or secret leakage. Read `references/secret-patterns.md`. Never expose discovered real secrets in the report; redact them.

### Step 4 — Vulnerability Deep Scan
Read `references/vuln-categories.md`. Review injection flaws, auth/access control, sensitive data handling, crypto, SSRF/path traversal, business logic, and other applicable categories. Reason about actual exploitability rather than reporting pattern matches blindly.

### Step 5 — Cross-File Data Flow Analysis
Trace user-controlled input from entry points to sinks and inspect trust boundaries across modules/services.

### Step 6 — Self-Verification Pass
For each finding, re-read the relevant code, check for sanitization/framework protections, discard false positives, then assign final severity and confidence.

### Step 7 — Generate Security Report
Use `references/report-format.md` as the output structure.

### Step 8 — Propose Patches
For CRITICAL/HIGH findings, present concrete patches for review. Do not auto-apply patches as part of a review unless the user separately asks to remediate after reviewing findings.

## Severity Guide

| Severity | Meaning | Example |
|---|---|---|
| CRITICAL | Immediate exploitation risk, severe impact | RCE, auth bypass, exploitable SQLi |
| HIGH | Serious vulnerability with practical exploit path | XSS, IDOR, exposed real secret |
| MEDIUM | Exploitable under conditions or through chaining | CSRF, weak crypto in reachable path |
| LOW | Low direct impact hardening issue | verbose errors, missing non-critical header |
| INFO | Observation, not a vulnerability | maintenance note with no exploit path |

## Output Rules

- Produce a findings summary first.
- Never auto-apply patches during review.
- Include confidence per finding.
- Group findings by category.
- Include file/line evidence where available.
- Explain attacker impact in plain language.
- If no vulnerabilities are found, state what was actually scanned and the limits of the review.

## Reference Files

- `references/vuln-categories.md`
- `references/secret-patterns.md`
- `references/language-patterns.md`
- `references/vulnerable-packages.md`
- `references/report-format.md`
