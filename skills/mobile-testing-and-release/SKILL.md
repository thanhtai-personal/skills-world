---
name: mobile-testing-and-release
description: Verify and release React Native/Expo mobile apps with layered mobile testing, real-device/platform validation, store build/submission workflows, staged releases, and safe OTA/EAS Update compatibility and rollback.
---

# Mobile Testing and Release

Mobile correctness includes native/platform behavior and release mechanics. Node-only component tests cannot prove that an iOS/Android app works for users. This skill covers **mobile testing, app-store release, and OTA/update strategy**.

## 1. Mobile testing strategy

Use the smallest useful test layer for each risk:

- static/type/lint checks for fast structural feedback;
- unit tests for pure business logic;
- component/integration tests for React Native interactions and orchestration;
- native integration tests where platform modules/permissions/background behavior are involved;
- E2E tests on simulator/emulator/device for critical user journeys.

Prioritize E2E coverage for authentication, onboarding, payments/purchases, permissions, deep links, offline/reconnect behavior, and other business-critical paths. Test both platforms when code/config/native dependencies can diverge.

For release-sensitive work, test a release-like build rather than relying only on development mode.

## 2. App-store release

- Treat bundle/application identifiers, signing credentials, entitlements, permissions, privacy metadata, version/build numbers, and store metadata as release inputs.
- Build production binaries through the project's existing EAS/native CI workflow.
- Use TestFlight / Play testing tracks or equivalent staged channels before broad production rollout when risk warrants it.
- Verify install/upgrade behavior from the previous production version, not only fresh install.
- Confirm backend/API compatibility with both the new app and still-active older app versions.
- Keep a rollback/containment plan for server-side feature flags and releases; app-store binary rollback is slower than web rollback.
- Do not publish store submissions or production releases without explicit user/operator approval when the action is external or irreversible.

## 3. OTA / EAS Update strategy

- OTA updates may change compatible JS/assets; native-code changes require a compatible new binary/runtime.
- Use `runtimeVersion`/project compatibility policy so incompatible updates cannot reach binaries with different native runtimes.
- Test updates on preview/internal builds that match the target runtime before production promotion.
- Use channels/branches/environments intentionally; avoid publishing to production by ambiguous defaults.
- Roll out gradually where supported and watch crash/error/analytics signals.
- Keep rollback to a known good update or embedded update ready and tested.
- Never use OTA to bypass platform/store requirements for changes that require native binary review.

## Release gate

Before declaring a mobile release ready, verify: critical tests pass, both relevant platforms were exercised, production configuration is correct, store credentials/metadata are valid, upgrade path works, OTA runtime compatibility is correct, telemetry/rollback exists, and release approval has been obtained.

Pair with `react-native-architecture`, `frontend-design`, `accessibility`, `security-and-hardening`, and `source-driven-development` as needed.
