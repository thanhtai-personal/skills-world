---
name: react-native-architecture
description: Build production React Native/Expo apps with mobile navigation, native APIs, offline-first data, platform differences, performance, secure storage, and mobile release concerns.
---

# React Native Architecture

Mobile is not a narrow web viewport. Design for device constraints, native navigation/platform APIs, intermittent networks, backgrounding, and app-store delivery.

## Rules

- Inspect current Expo/React Native versions and project structure before choosing APIs.
- Prefer existing project navigation/state/data conventions; use `source-driven-development` for version-sensitive Expo/RN decisions.
- Store credentials/tokens only in appropriate secure storage, never plain source or ordinary AsyncStorage.
- Design offline/poor-network behavior explicitly: cache policy, mutation queue/retry, conflict handling, reconnection.
- Use virtualized lists and optimized image/media primitives for large feeds.
- Keep animations on performant/native-capable paths and test on real devices for performance-sensitive work.
- Respect safe areas, keyboard/input behavior, accessibility, permissions, and iOS/Android differences.
- Verify native-module/config changes on both target platforms when scope requires it.
- Treat EAS/OTA/app-store release behavior as part of the delivery design, not an afterthought.

This is the primary mobile architecture skill; visual UI direction may also use `frontend-design`.
