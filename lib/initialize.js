const commander = require("commander");
const updateNotifier = require("update-notifier");
const pkg = require("../package.json");
const getDaysInMS = require("./utils/get-days-in-ms.js");

/**
 *  Initializes the program, by doing two things:
 *  1. Running updateNotifier
 *  2. Setting up commander and return the `program`
 */
const initialize = () => {
  // Update user if newer version exists
  updateNotifier({
    pkg,
    updateCheckInterval: getDaysInMS(4)
  }).notify();

  return (
    commander
      .version(pkg.version, "-v, --version")
      .option("-i, --input <input>", "Index/root file to be compiled")
      .option("-o, --output <output>", "Bundled file path/name")
      .option("-w, --watch", "Run in dev/watch mode")
      // .option("--no-maps", "Don't generate sourcemaps")
      .parse(process.argv)
  );
};

module.exports = initialize;
