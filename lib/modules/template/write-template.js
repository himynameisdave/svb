//  Utils
const { write } = require('../../utils/fs.js');
const pathCwdResolve = require('../../utils/path-cwd-resolve.js');
const { HTML_OUTPUT_INDEX } = require('../../constants.js');


/**
 * Function for writing the compiled template HTML file to disk
 *
 * @param {object} props
 * @param {string} props.output The output directory
 * @param {string} props.compiled The compiled template
 */
const writeTemplate = ({
  output, compiled,
}) => write(
  pathCwdResolve(output, HTML_OUTPUT_INDEX),
  compiled,
);

module.exports = writeTemplate;
