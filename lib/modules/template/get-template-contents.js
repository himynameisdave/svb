const path = require('path');

//  Local
//  Utils
const { read } = require('../../utils/fs.js');
const pathCwdResolve = require('../../utils/path-cwd-resolve.js');
//  Constants
const {
  HTML_TEMPLATE_NAMES,
  DEFAULT_TEMPLATE_PATH,
} = require('../../constants.js');

const readTemplate = require('./read-template.js');
const reportTemplateUsage = require('./report-template-usage.js');


/**
 * Resolves the HTML template contents, either provided by the user,
 * or generated based on our template.
 *
 * @param {string} inputFolder The folder path of the input JS file (from path.dirname())
 */
const getTemplateContents = async (inputFolder = '') => { // TODO [>=0.5.0]: have a better/different default here
  const readTemplatesResults = await Promise.all(
    HTML_TEMPLATE_NAMES.map((templateName) => readTemplate(
      pathCwdResolve(inputFolder, templateName),
    )),
  );
  const localTemplate = readTemplatesResults.find(template => !template.error);
  if (!localTemplate) {
    console.log(`📇 No HTML template file found in "${inputFolder}"`);
    reportTemplateUsage(false); // "Using the default template"
    const templatePath = path.resolve(__dirname, DEFAULT_TEMPLATE_PATH);
    return read(templatePath);
  }
  reportTemplateUsage(true, localTemplate.fileName); // Using your file
  return localTemplate.contents;
};

module.exports = getTemplateContents;
