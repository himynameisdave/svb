//  Utils
const { read } = require('../../utils/fs.js')

/**
 * Actually reads the contents of a given HTML template file.
 * Like utils.read but with different outputs
 *
 * @param {string} path Absolute path to the HTML template file
 */
const readTemplate = async (path) => {
    try {
        return {
            contents: await read(path, 'utf8'),
            fileName: path.split(path.sep).pop(),
        };
    } catch (error) {
        return { error };
    }
};

module.exports = readTemplate;