const path = require("path");
const commander = require("commander");
const updateNotifier = require("update-notifier");

const pkg = require("../package.json");
const build = require("./build.js");
const getDaysInMS = require("./utils/get-days-in-ms.js");
const warn = require("./utils/warn.js");

// TODO: actually properly validate these and ensure they exist
const checkArgument = (arg, argName) => {
  if (!arg || arg.length === "") {
    warn(`Please provide an ${argName} value with the --${argName} flag!`);
    process.exit(1);
  }
};

// Update user if newer version exists
updateNotifier({
  pkg,
  updateCheckInterval: getDaysInMS(4) // 4 Days
}).notify();

const { input, output } = commander
  .version(pkg.version, "-v, --version")
  .option("-i, --input <input>", "Index/root file to be compiled")
  .option("-o, --output <output>", "Bundled file path/name")
  //   .option("--watch,-w", "Run in watch mode")
  .parse(process.argv);

const getPath = pth => path.resolve(process.cwd(), pth);

const main = async () => {
  checkArgument(input, "input");
  checkArgument(output, "output");

  try {
    await build({
      input: getPath(input),
      output: getPath(output)
    });
  } catch (e) {
    warn(e.message);

    process.exit(1);
  }
};

module.exports = main;
