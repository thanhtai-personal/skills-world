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
- Imported skills include `code-review`, `domain-modeling`, `codebase-design`, `improve-codebase-architecture`, and provisional `diagnosing-bugs`.

## GitHub, Inc. and contributors — awesome-copilot
- Repository: https://github.com/github/awesome-copilot
- License: MIT
- Shared local license: `skills/_sources/github-awesome-copilot/LICENSE.txt`
- Imported skills include `security-review`, provisional `prd`, provisional `test-gap-audit`, and provisional `webapp-testing`.

## Addy Osmani — agent-skills
- Repository: https://github.com/addyosmani/agent-skills
- License: MIT
- Shared local license: `skills/_sources/addyosmani-agent-skills/LICENSE.txt`
- Imported skills include `security-and-hardening`, `performance-optimization`, `ci-cd-and-automation`, `shipping-and-launch`, `observability-and-instrumentation`, `documentation-and-adrs`, provisional `api-and-interface-design`, `spec-driven-development`, `frontend-ui-engineering`, `source-driven-development`, `deprecation-and-migration`, `code-simplification`, `browser-testing-with-devtools`, and `git-workflow-and-versioning`.
- Local versions are adapted/condensed and remain subject to upstream MIT attribution requirements.

## Addy Osmani — web-quality-skills
- Repository: https://github.com/addyosmani/web-quality-skills
- License: MIT
- Shared local license: `skills/_sources/addyosmani-web-quality-skills/LICENSE.txt`
- Imported skill: `accessibility`.
- Local version is adapted/condensed; detailed upstream references were not vendored in this pass.

## Supabase — agent-skills
- Repository: https://github.com/supabase/agent-skills
- License: MIT
- Shared local license: `skills/_sources/supabase-agent-skills/LICENSE.txt`
- Imported skill: `supabase-postgres-best-practices`.

## Seth Hobson / wshobson — agents
- Repository: https://github.com/wshobson/agents
- License: MIT
- Shared local license: `skills/_sources/wshobson-agents/LICENSE.txt`
- Imported provisional skills: `incident-runbook-templates`, `postmortem-writing`, `architecture-patterns`, and `changelog-automation`.

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
