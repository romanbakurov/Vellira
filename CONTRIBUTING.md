# Contributing to Vellira

## Branch naming

- `feat/<name>` - new features
- `fix/<name>` - bug fixes
- `chore/<name>` - maintenance tasks
- `docs/<name>` - documentation
- `refactor/<name>` - code refactoring

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

- feat: add Button component
- fix: resolve Select keyboard navigation
- chore: update dependencies
- docs: add installation guide
- refactor: simplify utility functions

## Workflow

1. Create a branch from `main`
2. Make changes and commit
3. Push branch and create a Pull Request
4. Get review and merge to `main`
5. Release is created automatically

## Release

Uses semantic-release. Version bumps:

- `fix:` → patch (0.0.1)
- `feat:` → minor (0.1.0)
- `feat!:` or `BREAKING CHANGE:` → major (1.0.0)
