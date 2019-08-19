const rollup = require("rollup");
const svelte = require("rollup-plugin-svelte");
const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const { terser } = require("rollup-plugin-terser");
const { BUNDLE_FILENAME } = require('./constants.js');

const template = require('./modules/template/index.js');

const build = async ({ input, output }) => {
  //  Handle the index.html stuff
  await template({ input, output });

  const inputOptions = {
    input,
    plugins: [
      svelte({
        // Extract any component CSS out into a separate file, as it is better for performance
        css: css => css.write(`${output}/${BUNDLE_FILENAME.CSS}`, false) // 2nd argument is for sourcemaps
      }),
      //	For resolve external NPM dependencies
      resolve({ browser: true }),
      //	For convert any CommonJS modules to ES6
      commonjs({
        include: "node_modules/**" // TODO: is this relative to svb/node_modules?
      }),
      //	For minification on the bundle
      terser()
    ]
  };
  const outputOptions = {
    format: "iife",
    name: "app",
    file: `${output}/${BUNDLE_FILENAME.JS}`
  };
  try {
    const bundle = await rollup.rollup(inputOptions);
    return bundle.write(outputOptions);
  } catch (err) {
    throw err;
  }
};

module.exports = build;
