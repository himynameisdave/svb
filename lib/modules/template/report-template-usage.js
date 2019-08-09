const { HTML_TEMPLATE_NAME } = require('../../constants.js');

/**
 * Logs the template benig used to the console
 *
 * @param {boolean} hasTemplate If a user-provided template was provided
 */
const reportTemplateUsage = (hasTemplate) => console.log(
    hasTemplate
    ? `📄 Using the ${HTML_TEMPLATE_NAME} template`
    : '📄 Using the default html template instead'
);

module.exports = reportTemplateUsage;