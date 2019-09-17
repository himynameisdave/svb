const rollup = require('rollup');

const {
  getInputConfig,
  getOutputConfig,
} = require('./rollup.js');
const template = require('./modules/template');


const build = async ({
  input, output, isDevelopmentMode,
}) => {
  //  Handle the index.html stuff
  await template({
    input,
    output,
  });
  const bundle = await rollup.rollup(
    await getInputConfig({
      input,
      output,
      isDevelopmentMode,
    }),
  );
  return bundle.write(
    getOutputConfig({
      input,
      output,
      isDevelopmentMode,
    }),
  );

};

module.exports = build;
