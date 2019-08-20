<div align="center" margin="0 auto 20px">
    <h1 style="color: #ea6f5a;">svelte-bundler</h1>
    <p style="font-style: italic;">📦 A zero-config CLI to bundle Svelte apps.</p>
    <div>
        <a href='https://travis-ci.org/himynameisdave/svb'>
            <img src="https://api.travis-ci.org/himynameisdave/svb.svg?branch=master" alt="Travis Badge" />
        </a>
        <a href='https://coveralls.io/github/himynameisdave/svb?branch=master'>
            <img src='https://coveralls.io/repos/github/himynameisdave/svb/badge.svg?branch=master' alt='Coverage Status' />
        </a>
        <a href="https://www.npmjs.com/package/svb">
            <img src="https://img.shields.io/npm/v/svb/beta?color=%23ea6f5a" alt="Version">
        </a>
        <a href="https://www.npmjs.com/package/svb">
            <img src="https://img.shields.io/npm/dw/svb" alt="Downloads">
        </a>
    </div>
</div>

---

This is a (mildly) opinionated and very lightweight Svelte compiler/bundler, which is meant to take some of the headaches out of setting up and configuring simple [Svelte](https://svelte.dev/) projects.

Differs from [Sapper](https://sapper.svelte.dev), which is more of a fully baked solution which includes SSR, routing and other goodies. This is more akin to the [react-scripts](https://github.com/facebook/create-react-app/tree/master/packages/react-scripts) used in `create-react-app`, where all of the config is hidden away so that you can just focus on building cool Svelte apps.

**Notice:** This is very much a work in progress right now, so [feel free to contribute](https://github.com/himynameisdave/svb/blob/master/.github/CONTRIBUTING.md)! We'd love to get some feedback and ideas!


## Installation

> _**Note:** Currently requires NodeJS >= 8.16.0_

```
yarn add -D svb

npm i -D svb
```

You could also install this globally:

```
yarn global add svb

npm i -g svb
```

This provides you with the global `svb` binary (as well as a `svelte-bundler` alias, in case you like typing).

## Usage

### Building

The `svb` command allows you to bundle your Svelte apps. Most likely you will have this package installed in your `devDependencies`, and then include some kind of [npm script](https://css-tricks.com/why-npm-scripts/) which uses it, like so:

```json
{
  "build": "svb --input src/index.js --output dist/"
}
```

You'd then do one of the following to compile your project:

```bash
npm run build
yarn run build
```

Here's an example using npx instead:

```bash
npx svb -i src/index.js -o dist/
```

### Options

```
Options:
  -i, --input <input>    Index/root file to be compiled
  -o, --output <output>  Bundled file path/name
```

An example of what a project might look like can be [found here](https://github.com/himynameisdave/svb/tree/master/example). This is an overview:

```
my-svelte-app/
    |- package.json
    |- dist/
        # Your compiled project
    |- src/
        |- App.svelte
        |- index.js
        |- index.html
```

### HTML Template

`svb` will by default output a standard/bare bones `index.html` file for you. If you wish, you can customize this by including an `index.html` (or `template.html`) file in the src directory of your project, next to your `--input` file.

You can customize where `svb` injects the JS bundle and CSS stylesheets by using the following tags:

```
{SVB.js}
{SVB.css}
```

Example:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>My App</title>
        {SVB.css} <!-- Where the CSS bundle will be injected -->
    </head>
    <body>
        {SVB.js} <!-- Where the JS bundle will be injected -->
    </body>
</html>
```

## Project

### Goals

Three main goals for this project:

- Simplify Svelte projects; provide a solid default for building apps.
- Remain lightweight; this is not [Sapper](https://sapper.svelte.dev).
- Simple to use; [don't make users think](https://en.wikipedia.org/wiki/Don't_Make_Me_Think)!

### Roadmap

This is a work in progress/the project is still in beta. Here's some stuff that we want to add/take care of:

- [x] Handle generation of a root `index.html` file ([#13](https://github.com/himynameisdave/svb/issues/13))
- [ ] Watch/dev mode ([#4](https://github.com/himynameisdave/svb/issues/4))
- [ ] Sourcemaps ([#15](https://github.com/himynameisdave/svb/issues/15))
- [ ] ~Allow some more custom configuration of rollup~ This isn't aligned with the goals of this project.
- [ ] _Maybe_ add some kind of `eject` command, allow users to bump out if they choose. ([#18](https://github.com/himynameisdave/svb/issues/18))

### Contributing

We gladly welcome new issues and pull requests. Please see the [Contributing Guide](https://github.com/himynameisdave/svb/blob/master/.github/CONTRIBUTING.md) for more info!

---

_Created by [Dave](http://himynameisdave.com) in 2019 ✌️ Feel free to contact me [on Twitter](https://twitter.com/dave__lunny)._
