# Belajar Bareng Tux

**Belajar Bareng Tux** is the successor of [Tux Sanctuary](https://github.com/Anifyuli/tux_sanctuary). This project is a monorepo that integrates **NestJS** for the backend and **React with Vite** for the frontend, utilizing **Turborepo** for efficient project management.

## What's inside?

This monorepo includes the following applications and packages:

### Apps and Packages

```
.
├── apps
│   ├── api                       # NestJS backend application
│   └── web                       # React (Vite) frontend application
└── packages
    ├── @repo/api                 # Shared NestJS resources
    ├── @repo/eslint-config       # ESLint configurations (includes Prettier)
    ├── @repo/jest-config         # Jest configurations
    ├── @repo/typescript-config   # Shared TypeScript configurations
    └── @repo/ui                  # Shared UI components for React
```

Each package and application are 100% [TypeScript](https://www.typescriptlang.org/) compatible.

### Features

This **Turborepo** setup comes with various tools pre-configured:

- [TypeScript](https://www.typescriptlang.org/) for static type safety
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Jest](https://jestjs.io/) & [Playwright](https://playwright.dev/) for testing

### Commands

#### Build

```bash
# Builds all applications and packages
pnpm run build
```

#### Develop

```bash
# Runs development servers for all apps and packages
pnpm run dev
```

#### Test

```bash
# Runs test suites for all apps and packages
pnpm run test

# Run e2e tests
pnpm run test:e2e
```

#### Lint

```bash
# Runs ESLint for all applications and packages
pnpm run lint
```

#### Format

```bash
# Formats all code files
pnpm run format
```

### Remote Caching

Turborepo supports [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching), which speeds up builds by sharing cache artifacts across environments. To enable it:

```bash
npx turbo login
npx turbo link
```

## Useful Links

Learn more about the technologies used in this project:

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [NestJS](https://nestjs.com/)
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

---

### License

This project is open-source and available under the MIT license.