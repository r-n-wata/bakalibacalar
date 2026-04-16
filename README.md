# Bakali Frontend

The Bakali frontend is a React application built with Vite and TypeScript.

## Stack

- React
- Vite
- TypeScript
- SCSS Modules
- React Query for server state
- Zustand for shared client state, only if needed
- Jest and React Testing Library for unit and component tests
- Atomic Design for reusable UI composition

## Project Structure

```text
src
├── app
│   ├── config
│   ├── providers
│   └── routes
├── components
│   ├── atoms
│   ├── molecules
│   ├── organisms
│   └── templates
├── features
├── hooks
├── pages
├── services
├── store
├── styles
└── tests
```

## Directory Responsibilities

- `src/app`: Application-level setup, providers, routing, and configuration.
- `src/components`: Shared UI components organized with Atomic Design.
- `src/components/atoms`: Smallest reusable UI elements.
- `src/components/molecules`: Small component groups composed from atoms.
- `src/components/organisms`: Larger interface sections composed from atoms and molecules.
- `src/components/templates`: Page-level layouts and reusable layout structures.
- `src/features`: Feature-specific UI, hooks, services, and state.
- `src/hooks`: Shared React hooks.
- `src/pages`: Route-level page components.
- `src/services`: API clients and external service integrations.
- `src/store`: Shared client state when component state is not enough.
- `src/styles`: Global styles, variables, mixins, and shared SCSS resources.
- `src/tests`: Shared test utilities and setup.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

Run TypeScript checks:

```bash
npm run typecheck
```

Run tests:

```bash
npm test
```

Run all code checks:

```bash
npm run check
```

Preview the production build:

```bash
npm run preview
```

## Development Guidelines

- Prefer component-local state until state needs to be shared.
- Use React Query for API data fetching, caching, synchronization, and mutation state.
- Add Zustand only for shared client state that does not belong in React Query.
- Keep styles scoped with SCSS Modules.
- Keep reusable UI components in the Atomic Design folders.
- Keep feature-specific code inside `src/features` when it belongs to one domain area.
- Keep API communication inside `src/services` or feature-specific service modules.

## CI Expectations

The frontend CI pipeline will run through GitHub Actions on pull requests and pushes to `main`.

Expected checks:

- ESLint
- TypeScript checks
- Unit and component tests with Jest and React Testing Library

## Deployment

Frontend deployment will be managed by Netlify.

Expected deployment behavior:

- Pull requests create deploy previews.
- The `main` branch deploys to production.
# bakalibacalar
