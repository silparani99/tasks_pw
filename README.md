# Playwright TypeScript Framework

This project provides a clean Playwright end-to-end testing framework using TypeScript and a lightweight page-object pattern.

## Prerequisites

- Node.js 18+ (Playwright supports the latest LTS releases).

## Install

```bash
npm install
```

This installs Playwright, TypeScript, and the browser binaries needed to run the tests.

## Run Tests

- Run the full suite: `npx playwright test`
- Run a single spec: `npx playwright test tests/specs/invalid-gmail.spec.ts`
- Open the UI mode: `npx playwright test --ui`
- Debug a test: `npx playwright test tests/specs/invalid-gmail.spec.ts --debug`
- View the last HTML report: `npx playwright show-report`

## Project Layout

- `tests/specs/` – TypeScript test specs written with Playwright Test.
- `tests/pages/` – Page Object Model helpers that wrap page interactions.
- `tests/fixtures/` – Custom fixtures that compose reusable test context.
- `playwright.config.ts` – Central configuration for browsers, timeouts, and reporters.
- `tsconfig.json` – TypeScript compiler settings used by Playwright.

You can extend the framework by adding more fixtures for data setup, additional page objects, or custom reporters in `playwright.config.ts`.
