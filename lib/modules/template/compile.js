const pupa = require('pupa');
const { minify } = require('html-minifier');

//  Local
const { BUNDLE_FILENAME } = require('../../constants.js');

const markup = require('./markup.js');
//  Constants

//  Options for html-minify package
//  https://github.com/kangax/html-minifier#options-quick-reference
const MINIFY_OPTIONS = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  minifyCSS: true,
  minifyJS: true,
  removeComments: true,
  sortAttributes: true,
  sortClassName: true,
  useShortDoctype: true,
};

/**
 * Responsible for compiling and minifying the template HTML
 *
 * @param {object} props
 * @param {object} props.title An optional title for the app
 * @param {string} props.template The template HTML string
 */
const compile = ({
  title = 'My App', template,
}) => {
  const compiledTemplate = pupa(template, {
    SVB: {
      title,
      css: markup.getCSS(BUNDLE_FILENAME.CSS),
      js: markup.getJS(BUNDLE_FILENAME.JS),
    },
  });
  return minify(compiledTemplate, MINIFY_OPTIONS);
};

module.exports = compile;
