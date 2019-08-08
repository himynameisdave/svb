<div align="center" margin="0 auto 20px">
    <h1>svelte-bundler</h1>
    <p style="font-style: italic;">📦 A zero-config CLI to bundle Svelte apps.</p>
    <div>
        <a href='https://travis-ci.org/himynameisdave/svb'>
            <img src="https://api.travis-ci.org/himynameisdave/svb.svg?branch=master" alt="Travis Badge" />
        </a>
        <!-- <a href='https://coveralls.io/github/himynameisdave/svb?branch=master'>
            <img src='https://coveralls.io/repos/github/himynameisdave/svb/badge.svg?branch=master' alt='Coverage Status' />
        </a> -->
        <a href="https://www.npmjs.com/package/svb">
            <img src="https://img.shields.io/npm/dt/svb.svg" alt="Downloads">
        </a>
    </div>
</div>

---

This is a (mildly) opinionated and very lightweight Svelte compiler/bundler, which is meant to take some of the headaches out of setting up and configuring simple [Svelte](https://svelte.dev/) projects.

Differs from [Sapper](https://sapper.svelte.dev), which is more of a fully baked solution which includes SSR, routing and other goodies. This is more akin to the [react-scripts](https://github.com/facebook/create-react-app/tree/master/packages/react-scripts) used in `create-react-app`, where all of the config is hidden away so that you can just focus on building cool Svelte apps.

**Notice:** This is very much a work in progress right now, so [feel free to contribute](https://github.com/himynameisdave/svb/blob/master/.github/CONTRIBUTING.md)! We'd love to get some feedback and ideas!

### Installation

> _**Note:** Currently requires NodeJS >= 8.16.0

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

### Usage

```bash
npx svb -i [input] -o [output]

# Example
npx svb -i src/index.js -o dist/
```

You could also add something like this to the `"scripts"` section of your `package.json` file:

```json
{
  "build": "svb --input src/index.js --output dist/"
}
```

This allows you to simply run `yarn run build` to compile your project.

### Roadmap

This is a work in progress/the project is still in beta. Here's some stuff that I want to add/take care of:

- [ ] Handle generation of a root `index.html` file
- [ ] Watch/dev mode
- [ ] Flag to turn off minification (?)
- [ ] Allow some more custom configuration of rollup
