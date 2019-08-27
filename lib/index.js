//  Core
const init = require("./initialize.js");
const build = require("./build.js");
const dev = require("./dev.js");
//  Utils
const ensureArg = require("./utils/ensure-arg.js");
const pathCwdResolve = require("./utils/path-cwd-resolve.js");
const warn = require("./utils/warn.js");

const main = async () => {
  const { input, output, watch: isDevMode } = init();
  const config = {
    input: pathCwdResolve(input),
    output: pathCwdResolve(output),
    isDevMode,
  };
  //  Ensure the user has provided the arguments
  ensureArg(input, "input");
  ensureArg(output, "output");

  try {
    return isDevMode
      ? dev(config)
      : build(config);
  } catch (e) {
    warn(e.message, e);
    process.exit(1);
  }
};

module.exports = main;
