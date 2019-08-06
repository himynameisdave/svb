const warn = require("./warn.js");

const ERROR_EXIT_CODE = 1;

/**
 * Verifies that the provided arguments are valid/not nullish.
 * Warns the user and exits with an error code if invalid.
 *
 * @param {string} arg The actual argument value
 * @param {string} argLabel A label for the argument (ie: what the argument is called)
 */
const ensureArg = (arg, argLabel) => {
  if (!arg || arg.length === "") {
    warn(`Please provide an ${argLabel} value with the --${argLabel} flag!`);
    process.exit(ERROR_EXIT_CODE);
  }
};

module.exports = ensureArg;
