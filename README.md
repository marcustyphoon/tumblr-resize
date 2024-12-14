Quick and easy repo template for creating a web extension.

What did I do to make this?

- Set up .gitignore using some of [GitHub's presets](https://github.com/github/gitignore)
- Created empty package.json (`{}`)
- Installed eslint and prettier
  - `pnpm add -D eslint` (or `pnpm dlx install-peerdeps --dev eslint-config-airbnb` or `pnpm dlx install-peerdeps --dev eslint-config-airbnb-base`)
  - `pnpm install -D prettier`
  - `pnpm install -D eslint-config-prettier` (possibly optional without a config, but good to know about)
- Added npmrc config to enforce pnpm package manager
- Added basic config files for:
  - editorconfig
  - eslint (`"es2022": true` allows top-level await, `??=`, etc)
  - prettier (my `printWidth` and `quoteProps`settings are kind of opinionated)
- Added eslint and prettier scripts
- Added basic automatic eslint + prettier GitHub workflow

Plus:

- Installed web-ext (`pnpm add -D web-ext`) and added package.json config
- Added web-ext scripts
- Created example MV2/MV3 web extension with one content script
  - note: at time of writing, in MV3, Firefox and Chrome have different formats for background scripts/pages

I also committed the VS Code workspace setting to format files on save, which seems like a good idea for a repository that checks for prettier style as part of its CI script.

_This work is marked with [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/?ref=chooser-v1)._
