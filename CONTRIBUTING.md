# Contributing

Thanks for your interest in contributing to vivid. We're happy to have you here.

Please take a moment to review this document before submitting your first pull request. We also strongly recommend that you check for open issues and pull requests to see if someone else is working on something similar.

If you need any help, feel free to reach out to [@shadcn](https://www.instagram.com/psybitcoin).

This repository is a monorepo.

- We use [pnpm](https://pnpm.io) and [`workspaces`](https://pnpm.io/workspaces) for development.
- We use [Turborepo](https://turbo.build/repo) as our build system.
- We use [changesets](https://github.com/changesets/changesets) for managing releases.

## Structure

This repository is structured as follows:

```
apps
└── www
packages
└── vivid
```

| Path           | Description          |
| -------------- | -------------------- |
| `apps/www`     | The Nuxt website.    |
| `packages/cli` | The `vivid` package. |

## Development

### Start by cloning the repository:

```
git clone https://github.com/Psycarlo/vivid.git .
```

### Install dependencies

```
pnpm install
```

### Run a workspace

You can use the `pnpm --filter=[WORKSPACE]` command to start the development process for a workspace.

#### Examples

1. To run the `vivid` website:

```
pnpm --filter=www dev
```

2. To run the `shadcn-ui` package:

```
pnpm --filter=vivid dev
```

## Documentation

todo

## Components

todo

## Commit Convention

todo

## Requests for new components

If you have a request for a new component, please open a discussion on GitHub. We'll be happy to help you out.

## Testing

Tests are written using [Vitest](https://vitest.dev). You can run all the tests from the root of the repository.

```bash
pnpm test
```

Please ensure that the tests are passing when submitting a pull request. If you're adding new features, please include tests.
