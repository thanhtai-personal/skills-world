# Skill World — Root Index

This is the first routing index after `skills/skill-loader/SKILL.md`. It is deliberately small. Do not list every skill here once the collection grows.

## Tree

```text
skill-loader
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

### software-development
- display_name: Software Development Skills
- index: `skills/skill-loader/index/software-development.md`
- use_when: The user is designing, building, debugging, testing, reviewing, securing, planning, or delivering software, or maintaining development-agent skills.
- representative_triggers: code, software, frontend, UI, bug, test, review, security, git, implementation, architecture, development workflow

## Routing rules

1. `skill-loader` always runs first.
2. Select the narrowest matching group from this root index.
3. Read only that group's index.
4. Select the smallest sufficient leaf-skill set.
5. Load only those `SKILL.md` files.
6. If the goal materially changes, return to this root index.

## Scale / RAG readiness

The tree is the primary deterministic router. `CATALOG.jsonl` is a retrieval-friendly projection for future lexical/vector/RAG search. Do not introduce an embedding/vector database until catalog size or routing latency/accuracy demonstrates a real need.
