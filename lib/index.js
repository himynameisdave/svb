//  Core
const init = require("./initialize.js");
const build = require("./build.js");
//  Utils
const ensureArg = require("./utils/ensure-arg.js");
const pathCwdResolve = require("./utils/path-cwd-resolve.js");
const warn = require("./utils/warn.js");

const main = async () => {
  const { input, output } = init();

  //  Ensure the user has provided the arguments
  ensureArg(input, "input");
  ensureArg(output, "output");

  try {
    await build({
      input: pathCwdResolve(input),
      output: pathCwdResolve(output)
    });
  } catch (e) {
    warn(e.message);

    process.exit(1);
  }
};

module.exports = main;
