# Third-Party Notices

Skill World preserves the identity and licensing of the projects it vendors. Each imported skill's `PROVENANCE.md` is the precise source record.

## Jesse Vincent / obra — Superpowers
- Repository: https://github.com/obra/superpowers
- License: MIT
- Local license: `skills/_sources/obra-superpowers/LICENSE.txt`
- Imported/adapted workflow skills remain subject to upstream MIT terms.

## Anthropic, PBC — frontend-design
- Repository: https://github.com/anthropics/skills
- License: Apache License 2.0
- Local license: `skills/frontend-design/LICENSE.txt`
- Provenance: `skills/frontend-design/PROVENANCE.md`

## Matt Pocock — engineering skills
- Repository: https://github.com/mattpocock/skills
- License: MIT
- Shared local license: `skills/_sources/mattpocock-skills/LICENSE.txt`
- Imported skills currently include `code-review`, `domain-modeling`, `codebase-design`, and `improve-codebase-architecture`.
- Each skill keeps its own `PROVENANCE.md` and records whether the local copy was adapted.

## GitHub, Inc. and contributors — security-review
- Repository: https://github.com/github/awesome-copilot
- License: MIT
- Local license: `skills/security-review/LICENSE.txt`
- Provenance: `skills/security-review/PROVENANCE.md`

## Addy Osmani — agent-skills
- Repository: https://github.com/addyosmani/agent-skills
- License: MIT
- Shared local license: `skills/_sources/addyosmani-agent-skills/LICENSE.txt`
- Imported skills currently include `security-and-hardening`, `performance-optimization`, `ci-cd-and-automation`, `shipping-and-launch`, `observability-and-instrumentation`, and `documentation-and-adrs`.
- Local versions are adapted/condensed and remain subject to upstream MIT attribution requirements.

## Supabase — agent-skills
- Repository: https://github.com/supabase/agent-skills
- License: MIT
- Shared local license: `skills/_sources/supabase-agent-skills/LICENSE.txt`
- Imported skill: `supabase-postgres-best-practices`.
- Local version is adapted/condensed; upstream-derived material remains subject to Supabase's MIT license.

## Rule for future imports

Before merging a new third-party skill:
1. identify original author/owner and collection;
2. verify the license for the exact snapshot;
3. store sibling `PROVENANCE.md`;
4. preserve required license/NOTICE material;
5. record whether the local copy is verbatim or adapted;
6. record adoption metrics in `SKILL_REGISTRY.md`;
7. add new source collections here;
8. never assume Skill World's root MIT license overrides a third-party license.

This is a project-maintenance record, not legal advice. Upstream license terms control third-party material.
