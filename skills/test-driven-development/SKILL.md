---
name: test-driven-development
description: Use when implementing any feature or bugfix, before writing implementation code
---

# Test-Driven Development (TDD)

## Overview

Write the test first. Watch it fail. Write minimal code to pass.

**Core principle:** If you didn't watch the test fail, you don't know if it tests the right thing.

**Violating the letter of the rules is violating the spirit of the rules.**

## When to Use

Always use for new features, bug fixes, refactoring, and behavior changes. Exceptions such as throwaway prototypes, generated code, or configuration-only changes require the human partner's approval.

## The Iron Law

```
NO PRODUCTION CODE WITHOUT A FAILING TEST FIRST
```

Write code before the test? Delete it and start over. Do not keep it as reference or adapt it while writing tests.

## Red-Green-Refactor

### RED - Write Failing Test
Write one minimal test demonstrating the desired behavior. Use clear names and test real behavior rather than mocks unless mocking is unavoidable.

### Verify RED - Watch It Fail
Run the specific test and confirm it fails for the expected reason because the behavior is missing. If it passes immediately, the test is not proving the new behavior. If it errors for an unrelated reason, fix the test setup until it fails correctly.

### GREEN - Minimal Code
Write the simplest production code that passes the failing test. Do not add speculative options, refactor unrelated code, or implement behavior the test does not require.

### Verify GREEN - Watch It Pass
Run the test again, then relevant surrounding tests. Fix production code rather than weakening the test.

### REFACTOR - Clean Up
Only after green, remove duplication and improve names while keeping tests green.

### Repeat
Write the next failing test for the next behavior.

## Good Tests

A good test is minimal, clearly named, and communicates the desired API. Before writing or changing tests, read `writing-good-tests.md` when available.

## Common Rationalizations

| Excuse | Reality |
|--------|---------|
| "Too simple to test" | Simple code breaks too. |
| "I'll test after" | A passing test written after the code does not prove it can catch the bug. |
| "Tests after have the same spirit" | Tests-first define what should happen; tests-after are biased by what was already built. |
| "I manually tested it" | Manual testing is not repeatable regression protection. |
| "Deleting work is wasteful" | Keeping unproven production code is the larger risk. |
| "Keep it as reference" | Reference code biases the test-first implementation. |
| "Need to explore first" | Exploration is fine if thrown away before beginning the TDD implementation. |
| "Test is hard" | Hard-to-test code often signals an unclear or over-coupled design. |

## Red Flags - STOP and Start Over

- Production code written before its failing test
- Test added only after implementation
- Test passes immediately
- You cannot explain why the test failed
- Rationalizing a one-time exception
- Keeping prewritten implementation as a reference

## Verification Checklist

Before marking work complete:
- Every new behavior has a test
- Each relevant test was observed failing before implementation
- Each failure was for the intended missing behavior
- Minimal production code made it pass
- Relevant tests are green
- Edge cases and errors are covered where required
- Mocks are used only when necessary

## Debugging Integration

When fixing a bug, write a failing test that reproduces it, then follow the same RED-GREEN-REFACTOR cycle.

## Final Rule

```
Production code → test exists and failed first
Otherwise → not TDD
```
