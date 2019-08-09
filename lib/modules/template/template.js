const path = require('path');
const pupa = require('pupa');
const readPkgUp = require('read-pkg-up');
//  Local
const getTemplate = require('./get-template.js');
const markup = require('./markup.js');
const writeTemplate = require('./write-template.js');
//  Constants
const { BUNDLE_FILENAME } = require('../../constants.js');

/**
 * Responsible for writing user-provided/generated
 * index HTML template to the output directory
 *
 * @param {object} param
 * @param {string} input The root/input file
 * @param {string} output The output directory
 */
const main = async ({ input, output }) => {
    const inputFolder = path.dirname(input);
    //  Get the title to inject into the template (if neeeded)
    const { package } = await readPkgUp();
    //  Get the <html> contents, either user-provided or generated
    const template = await getTemplate(inputFolder);
    //  Use pupa to compile the template
    const compiled = pupa(template, {
        SVB: {
            title: package.name,
            css: markup.getCSS(BUNDLE_FILENAME.CSS),
            js: markup.getJS(BUNDLE_FILENAME.JS),
        }
    });
    //  Write the file to the output directory
    return await writeTemplate({ output, compiled });
};

module.exports = main;