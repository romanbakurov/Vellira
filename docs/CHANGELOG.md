# Changelog

All notable changes to this project will be documented in this file.

The format is based on **Keep a Changelog** and this project follows **Semantic Versioning**.

---

# Migration Notes

## Versioning

Vellira follows Semantic Versioning.

| Version             | Meaning                               |
| ------------------- | ------------------------------------- |
| **Patch (`x.y.Z`)** | Bug fixes and internal improvements   |
| **Minor (`x.Y.z`)** | New features without breaking changes |
| **Major (`X.y.z`)** | Breaking API changes                  |

---

## Migration Policy

Breaking changes are introduced **only in major releases**.

Whenever a major version is released, this changelog will include:

- migration instructions
- replacement APIs
- deprecated APIs
- code migration examples
- additional upgrade notes when required

---

## Deprecation Policy

Whenever possible, deprecated APIs remain available until the next major release.

Deprecated APIs are clearly documented in release notes to provide sufficient time for migration.

---

## Upgrade Checklist

Before upgrading between major versions:

- Read the release notes.
- Review the migration guide.
- Replace deprecated APIs.
- Run your project's test suite.
- Verify application behavior before deployment.

---

## Support Policy

- Patch releases are always backward compatible.
- Minor releases do not introduce breaking API changes.
- Major releases may require code changes.

---

## Future Migration Guides

Migration guides will be added here as the project evolves.

Examples:

- Migration to Vellira v3
- Migration to Vellira v4
- Migration to Vellira v5

---

## Release Notes

Each release documents:

- ✨ New features
- 🐛 Bug fixes
- ♻️ Refactoring
- ⚠️ Breaking changes (major releases only)
- 📖 Documentation updates
- 🚀 Performance improvements
- 🔒 Security fixes (when applicable)

---

<!-- semantic-release inserts releases below -->

## [Unreleased]

<!-- Generated automatically -->

<!-- semantic-release will append future releases here -->
