/**
 * Log a warning message to the console
 *
 * @param {string} message The message to be logged to the console
 */
const warn = (message = "Uh oh! Something went wrong!", error = null) =>
  console.warn(`⚠️  ${message}`, error);

module.exports = warn;
