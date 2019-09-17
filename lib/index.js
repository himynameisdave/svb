//  Core
const init = require('./initialize.js');
const build = require('./build.js');
const development = require('./development.js');
//  Utils
const ensureArg = require('./utils/ensure-argument.js');
const pathCwdResolve = require('./utils/path-cwd-resolve.js');
const warn = require('./utils/warn.js');


const main = async () => {
  const {
    input,
    output,
    watch,
  } = init();
  const config = {
    input: pathCwdResolve(input),
    output: pathCwdResolve(output),
    isDevelopmentMode: !!watch,
  };
  //  Ensure the user has provided the arguments
  ensureArg(input, 'input');
  ensureArg(output, 'output');

  try {
    return config.isDevelopmentMode
      ? development(config)
      : build(config);
  } catch (error) {
    warn(error.message, error);
    process.exit(1);
  }
};

module.exports = main;
