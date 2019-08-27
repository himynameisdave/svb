const rollup = require('rollup');
const clear = require('console-clear');
const chalk = require('chalk');
const { getInputConfig, getOutputConfig } = require('./rollup.js');

const logger = (str) => console.log(`\n\n${str}`);

const watchHandlers = {
    START: () => logger(chalk.yellow('📦 Bundling your Svelte app!')),
    END: () => logger(chalk.green('⚡️ Bundled your Svelte app!')),
    ERROR: ({ error }) => logger(chalk.red(`Error: ️${error.message}!\n${error.frame}`)),
};

const watch = async ({ input, output, isDevMode }) => {
    const config = Object.assign(
        {},
        await getInputConfig({ input, output, isDevMode }),
        {
            output: getOutputConfig({ output }),
            watch: {
                chokidar: true,
                clearScreen: true,
                exclude: 'node_modules/**',
            }
        }
    );
    const watcher = rollup.watch(config);
    watcher.on('event', event => {
        //  TODO: if --debug mode?
        // console.log('event', event);
        clear(true);
        const handler = watchHandlers[event.code];
        if (handler) {
            handler(event);
        }
    });

};

module.exports = watch;
