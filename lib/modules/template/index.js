const path = require('path');
const readPkgUp = require('read-pkg-up');
//  Local
const compile = require('./compile.js');
const getTemplateContents = require('./get-template-contents.js');
const writeTemplate = require('./write-template.js');


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
    const template = await getTemplateContents(inputFolder);
    //  Compile the template (inserting the variables)
    const compiled = compile({
        title: package.name || 'My App',
        template
    });
    //  Write the file to the output directory
    await writeTemplate({ output, compiled });
    console.log('✍️  Wrote index.html file');
};

module.exports = main;
