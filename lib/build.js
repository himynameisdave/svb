const rollup = require("rollup");
const svelte = require("rollup-plugin-svelte");
const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const { terser } = require("rollup-plugin-terser");

const { getInputConfig, getOutputConfig } = require('./rollup.js')
const template = require('./modules/template/index.js');
const { BUNDLE_FILENAME } = require('./constants.js');


const build = async ({ input, output, isDevMode }) => {
  //  Handle the index.html stuff
  await template({ input, output });
  try {
    const bundle = await rollup.rollup(
      getInputConfig({ input, output, isDevMode })
    );
    return bundle.write(
      getOutputConfig({ input, output, isDevMode })
    );
  } catch (err) {
    throw err;
  }
};

module.exports = build;
