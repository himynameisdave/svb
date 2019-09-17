/**
 * Logs the template being used to the console
 *
 * @param {boolean} hasTemplate If a user-provided template was provided
 * @param {string} fileName Name of the user-provided file being used
 */
const reportTemplateUsage = (hasTemplate = false, fileName = 'the provided') => console.log(
  hasTemplate
    ? `📄 Using ${fileName} template`
    : '📄 Using the default HTML template instead',
);

module.exports = reportTemplateUsage;
