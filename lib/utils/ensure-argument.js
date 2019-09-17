const warn = require('./warn.js');


const ERROR_EXIT_CODE = 1;

/**
 * Verifies that the provided arguments are valid/not nullish.
 * Warns the user and exits with an error code if invalid.
 *
 * @param {string} arg The actual argument value
 * @param {string} argLabel A label for the argument (ie: what the argument is called)
 */
const ensureArgument = (argument, argumentLabel) => {
  if (!argument || argument.length === '') {
    warn(`Please provide an ${argumentLabel} value with the --${argumentLabel} flag!`);
    process.exit(ERROR_EXIT_CODE);
  }
};

module.exports = ensureArgument;
