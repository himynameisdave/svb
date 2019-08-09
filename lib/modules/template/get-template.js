const path = require('path');
//  Local
const reportTemplateUsage = require('./report-template-usage.js');
//  Utils
const { read } = require('../../utils/fs.js')
const pathCwdResolve = require('../../utils/path-cwd-resolve.js');
//  Constants
const {
    HTML_TEMPLATE_NAME,
    DEFAULT_TEMPLATE_PATH
 } = require('../../constants.js');

/**
 * Resolves the HTML template contents, either provided by the user,
 * or generated based on our template.
 *
 * @param {string} inputFolder The folder path of the input JS file (from path.dirname())
 */
const getHTMLTemplate = async (inputFolder) => {
    try {
        const htmlPath = pathCwdResolve(inputFolder, HTML_TEMPLATE_NAME);
        reportTemplateUsage(true);
        const templateContents = await read(htmlPath, 'utf8');
        return templateContents;
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log(`📇 No ${HTML_TEMPLATE_NAME} file found in "${inputFolder}"`);
            reportTemplateUsage(false);
            const templatePath = path.resolve(__dirname, DEFAULT_TEMPLATE_PATH);
            return await read(templatePath, 'utf8');
        }
        throw error;
    }
};

module.exports = getHTMLTemplate;