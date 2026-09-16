# Skill World — Root Index

This is the first routing index after `skills/skill-loader/SKILL.md`. It is deliberately small.

## Tree

```text
skill-loader
└── software-development-skill
    └── software-development
        ├── design-ui
        ├── planning-workflow
        ├── implementation-orchestration
        ├── debugging
        ├── testing-verification
        ├── code-review
        ├── security
        ├── git-delivery
        └── skill-authoring-meta
```

## Groups

### software-development-skill
- display_name: Software Development Skill
- orchestrator: `skills/software-development-skill/SKILL.md`
- index: `skills/skill-loader/index/software-development.md`
- use_when: The user is designing, building, debugging, testing, reviewing, securing, planning, integrating, delivering, or maintaining software or development-agent workflows.
- representative_triggers: code, software, frontend, UI, bug, test, review, security, git, implementation, architecture, development workflow
- lifecycle: Discover → Design → Plan → Prepare → Implement ↔ Debug → Verify → Review → Security → Integrate/Deliver → Operate/Learn

## Routing rules

1. `skill-loader` always runs first.
2. Select the narrowest matching group from this root index.
3. For software-development work, load `skills/software-development-skill/SKILL.md` before any software leaf skill.
4. The group orchestrator reads the software-development index and selects the smallest sufficient leaf-skill set in lifecycle order.
5. Load only those selected local `SKILL.md` files.
6. If the goal materially changes, return to the root loader and route again.

## Scale / RAG readiness

The tree is the primary deterministic router. `CATALOG.jsonl` is a retrieval-friendly projection for future lexical/vector/RAG candidate search. Retrieval may propose candidates, but final software routing still passes through `software-development-skill`.
