/**
 * Gets the <link stylesheet /> code for the CSS import
 *
 * @param {string} filename The name of the CSS file
 */
const getCSS = filename => `<link rel="stylesheet" href="./${filename}">`;

/**
 * Gets the <script /> for importing the JS
 *
 * @param {string} filename The name of the JS bundle file
 */
const getJS = filename => `<script src="./${filename}" async defer></script>`;

const markup = {
    getCSS,
    getJS,
};

module.exports = markup;