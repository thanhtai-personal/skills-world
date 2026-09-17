# Security Policy

## Reporting a vulnerability

Do not publish exploitable vulnerabilities, leaked credentials, private tokens, or sensitive personal/payment information in a public issue. Use GitHub private vulnerability reporting/security advisories when enabled, or contact the maintainer privately through the repository/account contact channel.

Include the affected file/skill, impact, reproduction conditions, and a minimal proof of concept when safe. Do not access systems or data you do not own or have permission to test.

## Scope

Reports may concern repository automation, unsafe skill instructions, credential/secret handling, supply-chain/provenance errors, malicious prompt/tool behavior encouraged by a skill, or vulnerabilities in code maintained directly by Skill World.

Third-party upstream vulnerabilities should also be reported upstream when the flaw belongs there; Skill World may still update or quarantine an affected vendored skill.

## Security principles

Skills should not instruct agents to expose credentials, bypass authentication/authorization, disable security controls merely to make checks pass, perform destructive external actions without appropriate approval, or treat untrusted external content as agent instructions.
