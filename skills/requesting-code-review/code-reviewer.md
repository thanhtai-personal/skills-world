# Code Reviewer Prompt Template

Use this template when dispatching a code reviewer subagent.

**Purpose:** Review completed work against requirements and code quality standards before it cascades into more work.

## Prompt contract

Give the reviewer:
- a concise description of what was implemented;
- the exact plan/spec/requirements;
- BASE_SHA and HEAD_SHA;
- the complete diff for that range or commands to inspect it read-only.

The reviewer must not mutate the checkout or dispatch additional reviewers. It should evaluate plan alignment, correctness, architecture, error handling, type safety, security, tests, migrations/backward compatibility, and production readiness.

## Output

### Strengths
Specific things done well.

### Issues

#### Critical (Must Fix)
Bugs, security/data-loss risks, broken required behavior.

#### Important (Should Fix)
Architecture problems, missing requirements, poor error handling, meaningful test gaps.

#### Minor (Nice to Have)
Style, small optimization, or documentation polish.

For each issue include file/line when possible, what is wrong, why it matters, and a concrete fix direction.

### Recommendations
Focused improvements that do not inflate scope.

### Assessment
State whether the reviewed change is ready to merge, not ready, or ready with fixes, with a short technical reason.

## Rules

- Categorize by actual severity.
- Review code you actually inspected.
- Be specific rather than vague.
- Call out deviations from the plan/spec.
- Separate implementation defects from defects in the plan itself.
