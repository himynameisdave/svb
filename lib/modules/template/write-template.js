//  Utils
const { write } = require('../../utils/fs.js')
const pathCwdResolve = require('../../utils/path-cwd-resolve.js');

const INDEX = 'index.html';

/**
 * Function for writing the compiled template HTML file to disk
 *
 * @param {object} props
 * @param {string} props.output The output directory
 * @param {string} props.compiled The compiled template
 */
const writeTemplate = async ({ output, compiled }) => await write(
    pathCwdResolve(output, INDEX),
    compiled,
    'utf8'
);

module.exports = writeTemplate;