const rollup = require('rollup');
const clear = require('console-clear');
const chalk = require('chalk');

const {
  getInputConfig,
  getOutputConfig,
} = require('./rollup.js');


const logger = (string) => console.log(`\n\n${string}`);

const watchHandlers = {
  START: () => logger(chalk.yellow('📦 Bundling your Svelte app!')),
  END: () => logger(chalk.green('⚡️ Bundled your Svelte app!')),
  ERROR: ({ error }) => logger(chalk.red(`Error: ️${error.message}!\n${error.frame}`)),
};

const watch = async ({
  input, output, isDevelopmentMode,
}) => {
  const config = {

    ...await getInputConfig({
      input,
      output,
      isDevelopmentMode,
    }),
    output: getOutputConfig({
      output,
    }),
    watch: {
      chokidar: true,
      clearScreen: true,
      exclude: 'node_modules/**',
    },
  };
  const watcher = rollup.watch(config);
  watcher.on('event', event => {
    //  TODO [2019-09-30]: if --debug mode?
    // console.log('event', event);
    clear(true);
    const handler = watchHandlers[event.code];
    if (handler) {
      handler(event);
    }
  });

};

module.exports = watch;
