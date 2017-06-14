# eslint-config-better-standard

[![Greenkeeper badge](https://badges.greenkeeper.io/blakek/eslint-config-better-standard.svg)](https://greenkeeper.io/)

> A reasonable, extendable ESLint configuration (full config with dependencies)

I really enjoy [standard JS style](https://standardjs.com/), and I really enjoy their tools.  Without the enormous amount of work put into the [project](https://github.com/feross/standard), there is no way this one would exist.  However, there were things I also didn't particularly enjoy, so this is an attempt at a better version of standard that's like the coding styles actually being used.  For the foreseeable future, this will be fewer than 10 tweaks to standard.

The rules are essentially like [standard's](https://github.com/feross/standard#the-rules), but with some of the weird parts changed.  For example, this tweaks the parenthesis spacing that always drove me nuts.

The aim of this linting config is to be strict enough to keep you from shooting yourself in the foot while also not putting unnecessary burdens on you when you want to just get stuff done.

## Usage

This file is meant to be part of your [`.eslintrc*` file or package.json](http://eslint.org/docs/user-guide/configuring#configuration-file-formats).


To use this with your package, first install this package, then add the following to your `.eslintrc.json` file:

```json
{
  "extends": "better-standard"
}
```

**or** add this in your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "better-standard"
  }
}
```

You can override settings from this package by writing them in your own `.eslintrc`. (See [ESLint's rules](http://eslint.org/docs/rules/).)

## Install

With either [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/) installed, run one of the following:

```shell
# If using Yarn:
yarn add eslint-config-better-standard

# If using npm:
npm install --save eslint-config-better-standard
```

## See Also

- [`blakek/eslint-config-better-standard-react`](https://github.com/blakek/eslint-config-better-standard-react)
- [`feross/eslint-config-standard`](https://github.com/feross/eslint-config-standard)
- [ESLint docs](http://eslint.org/)

## License

MIT
