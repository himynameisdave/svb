const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const { render } = require('mustache');
const readPkgUp = require('read-pkg-up');
const pathCwdResolve = require('../utils/path-cwd-resolve.js');
const {
    BUNDLE_FILENAME,
    HTML_TEMPLATE_NAME,
    DEFAULT_TEMPLATE_PATH
 } = require('../constants.js');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const reportTemplateUsage = (hasTemplate) => console.log(
    hasTemplate
    ? `📄 Using the ${HTML_TEMPLATE_NAME} template`
    : '📄 Using the default html template instead'
);

const getHTMLTemplate = async (input) => {
    const inputFolder = path.dirname(input);
    const htmlPath = pathCwdResolve(inputFolder, HTML_TEMPLATE_NAME);
    try {
        const templateContents = await readFile(htmlPath, 'utf8');
        reportTemplateUsage(true);
        return templateContents;
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log(`📇 No ${HTML_TEMPLATE_NAME} file found in "${inputFolder}"`);
            reportTemplateUsage(false);
            const templatePath = path.resolve(__dirname, DEFAULT_TEMPLATE_PATH);
            return await readFile(templatePath, 'utf8');
        }
        throw error;
    }
};

const getCSSMarkup = () => `<link rel="stylesheet" href="./${BUNDLE_FILENAME.CSS}">`;
const getJSMarkup = () => `<script src="./${BUNDLE_FILENAME.JS}" async defer></script>`;

const main = async ({ input, output }) => {
    //  Get the title to inject into the template (if neeeded)
    const { package } = await readPkgUp();
    const template = await getHTMLTemplate(input);
    const vars = {
        title: package.name,
        css: getCSSMarkup(),
        js: getJSMarkup(),
    };
    const compiled = render(template, vars);
    return await writeFile(
        pathCwdResolve(output, 'index.html'),
        compiled,
        'utf8'
    );
};

module.exports = main;