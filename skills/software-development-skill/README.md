# Software Development Skill

Group-level workflow orchestrator for Skill World's software-development collection.

It is intentionally not a replacement for individual leaf skills. Its job is to impose a professional lifecycle order on them:

```text
Discover
→ Design
→ Plan
→ Prepare workspace
→ Implement
↔ Debug when needed
→ Verify
→ Review
→ Security
→ Integrate & deliver
→ Operate & learn
```

The workflow supports fast paths: a focused bug fix can enter at Debugging; a PR review can enter at Review; a UI task can enter at Design. The rule is to preserve lifecycle dependencies without forcing irrelevant ceremony.
