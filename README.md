<div align="center" margin="0 auto 20px">
    <h1>svelte-bundler</h1>
    <p style="font-style: italic;">📦 A zero-config CLI to bundle Svelte apps.</p>
    <!-- <div>
        <a href='https://travis-ci.org/himynameisdave/svelte-bundler'>
            <img src="https://api.travis-ci.org/himynameisdave/svelte-bundler.svg?branch=master" alt="Travis Badge" />
        </a>
        <a href='https://coveralls.io/github/himynameisdave/svelte-bundler?branch=master'>
            <img src='https://coveralls.io/repos/github/himynameisdave/svelte-bundler/badge.svg?branch=master' alt='Coverage Status' />
        </a>
        <a href="https://www.npmjs.com/package/svelte-bundler">
            <img src="https://img.shields.io/npm/dt/svelte-bundler.svg" alt="Downloads">
        </a>
    </div> -->
</div>

---

This is a (mildly) opinionated and very lightweight Svelte compiler/bundler, which is meant to take some of the headaches out of setting up and configuring simple [Svelte](https://svelte.dev/) projects.

Differs from [Sapper](https://sapper.svelte.dev), which is a more fully baked solution including SSR, routing and other goodies. More akin to [react-scripts](https://github.com/facebook/create-react-app/tree/master/packages/react-scripts) used in `create-react-app`, where all of the config is hidden away so that you can just focus on building cool Svelte apps.

Very much a work in progress right now, so feel free to [file issues](https://github.com/himynameisdave/svelte-bundler/issues/new) and [open pull requests](https://github.com/himynameisdave/svelte-bundler/compare) if this tool doesn't quite solve your problems.

### Installation

```
yarn add -D svelte-bundler

npm i -D svelte-bundler
```

You could also install this globally:

```
yarn global add svelte-bundler

npm i -g svelte-bundler
```

This provides you with the global `svelte-bundler` binary (as well as a `svb` alias, to save your fingers some typing).

### Usage

```bash
npx svelte-bundler -i [input] -o [output]

# Example
npx svelte-bundler src/index.js dist/
```

You could also add something like this to the `"scripts"` section of your `package.json` file:

```json
{
  "build": "svg --input src/index.js --output dist/"
}
```

This allows you to simply run `yarn run build` to compile your project.

### Roadmap

This is a work in progress/the project is still in beta. Here's some stuff that I want to add/take care of:

- [ ] Handle generation of a root `index.html` file
- [ ] Watch/dev mode
- [ ] Flag to turn off minification (?)
- [ ] Allow some more custom configuration of rollup
- [ ] ...your great idea...?
