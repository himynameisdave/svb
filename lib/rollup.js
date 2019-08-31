const svelte = require("rollup-plugin-svelte");
const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const livereload = require("rollup-plugin-livereload");
const serve = require("rollup-plugin-serve");
const sourcemaps = require("rollup-plugin-sourcemaps");
const { terser } = require("rollup-plugin-terser");
const getPort = require("get-port");
const { BUNDLE_FILENAME } = require('./constants.js');


const getPlugins = async ({ output, isDevMode }) => {
    const port = await getPort({ port: getPort.makeRange(3000, 3100) });
    return isDevMode
        //  Dev plugins
        ? [
            sourcemaps(),
            serve({
                // Launch in browser
                open: true,
                contentBase: output,
                port,
                verbose: true,
            }),
            livereload(output)
        ]
        //  Prod plugins
        : [
            terser()
        ];
}

const getInputConfig = async ({ input, output, isDevMode }) => ({
    input,
    plugins: [
        svelte({
            // Extract any component CSS out into a separate file, as it is better for performance
            css: css => css.write(`${output}/${BUNDLE_FILENAME.CSS}`, isDevMode) // 2nd argument is for sourcemaps
        }),
        //	For resolve external NPM dependencies
        resolve({ browser: true }),
        //	For convert any CommonJS modules to ES6
        commonjs({
            include: "node_modules/**" // TODO: is this relative to svb/node_modules?
        }),
    ].concat(
        await getPlugins({ input, output, isDevMode })
    ),
});

const getOutputConfig = ({ output, isDevMode }) => ({
    format: "iife",
    dir: output,
    sourcemap: isDevMode,
});

module.exports.getInputConfig = getInputConfig;
module.exports.getOutputConfig = getOutputConfig;
