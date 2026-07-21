# Task 0 — Repository Audit and Implementation Plan

## Current repository state

- Repository path: `/workspace/Library`.
- Current branch: `work`.
- Existing tracked project content is limited to `README.md`.
- No application source directory exists yet (`app/`, `src/`, `pages/`, or equivalent).
- No framework configuration files are present.
- No package manager lockfile is present.
- No deployment configuration file is present.
- No test, lint, typecheck, or build scripts are currently defined.

## Framework and package manager identification

- Framework: not yet established. There is no `package.json`, Next.js config, application route directory, or framework-specific file.
- Package manager: not yet established. There is no `package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, or `bun.lockb`.

## Existing files reviewed

- `README.md` currently contains only the repository name and a short Indonesian description.
- Git history contains an initial commit only.
- No `AGENTS.md` file was found in or above the repository workspace.

## Existing scripts and dependencies

- No package scripts exist because `package.json` does not exist yet.
- No runtime dependencies or development dependencies are declared.
- No lint, TypeScript, test, formatting, or build configuration exists yet.

## Current routes and components

- No routes exist yet.
- No components exist yet.
- No content model exists yet.

## Deployment-related files

- No Vercel configuration is present.
- No Next.js configuration is present.
- No environment variable example file is present.

## PRD conflicts and risks

- The PRD expects a Next.js, React, TypeScript, App Router, and Tailwind CSS application, but the repository is currently an empty shell.
- Because no package manager is established, Task 1 must choose and document one before installing dependencies. `pnpm` is recommended for modern Next.js projects unless the project owner prefers another manager.
- Introducing the application scaffold in Task 1 will necessarily create foundational configuration files, lockfiles, and source directories.
- Since no existing app exists, there is minimal risk of breaking current runtime behavior, but the initial scaffold should still remain small and avoid implementing later product features.
- No automated validation commands can run successfully until Task 1 creates package scripts.

## Proposed target structure

The repository can safely adopt a `src`-based Next.js App Router layout:

```text
content/
  books/
public/
  covers/
  images/
  placeholders/
src/
  app/
    layout.tsx
    page.tsx
  components/
    book/
    content/
    layout/
    search/
    sections/
    ui/
  config/
    site.ts
  lib/
    books/
    content/
    search/
    seo/
  styles/
  types/
tests/
README.md
```

Task 1 should create only the portions needed for the visual foundation and leave content, search, catalog, authors, legal pages, and reading pages to later tasks.

## Likely Task 1 changes

Task 1 should likely create or modify:

- `package.json` and the selected lockfile.
- `next.config.ts` or `next.config.js`.
- `tsconfig.json`.
- `eslint.config.mjs` or equivalent lint configuration.
- `postcss.config.mjs` and Tailwind configuration as required by the chosen Tailwind version.
- `src/app/layout.tsx`.
- `src/app/page.tsx` with a minimal placeholder only, not the full homepage.
- `src/app/globals.css` or `src/styles/globals.css` for centralized design tokens.
- `src/config/site.ts` for site name, tagline, navigation, footer links, SEO defaults, and reading speed.
- `src/components/ui/button.tsx`.
- `src/components/ui/badge.tsx`.
- `src/components/ui/container.tsx`.
- `src/components/ui/section-heading.tsx`.
- `src/components/book/placeholder-book-cover.tsx`.
- `README.md` with initial development commands once scripts exist.

## Recommended next task

Proceed with Task 1: scaffold the minimal Next.js foundation, establish centralized theme variables and typography, create typed UI primitives, and add validation scripts. Do not implement MDX, search, catalog pages, or the full homepage in Task 1.
