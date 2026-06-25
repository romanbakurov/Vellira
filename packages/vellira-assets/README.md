# @romanbakurov/vellira-assets

Shared static assets for the Vellira Design System.

This package contains reusable assets shared across the Vellira ecosystem, including applications, documentation, Storybook, and future design tooling.

## Installation

```bash
pnpm add @romanbakurov/vellira-assets
```

## Font styles

Import the bundled font stylesheet:

```ts
import '@romanbakurov/vellira-assets/styles';
```

or directly:

```ts
import '@romanbakurov/vellira-assets/styles/fonts.scss';
```

## Font files

Font files are available through the package exports:

```scss
src: url('@romanbakurov/vellira-assets/fonts/Inter-Regular.woff2')
  format('woff2');
```

## Package structure

```
fonts/
styles/
```

## Roadmap

This package is intended to become the shared home for static assets used across the Vellira ecosystem, including:

* Fonts
* Logos
* Brand assets
* Illustrations
* Documentation assets
* Future shared media resources

## License

MIT
