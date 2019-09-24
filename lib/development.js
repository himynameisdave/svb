const path = require('path');

const rollup = require('rollup');
const clear = require('console-clear');
const chalk = require('chalk');

const {
  getInputConfig,
  getOutputConfig,
} = require('./rollup.js');
const pathCwdResolve = require('./utils/path-cwd-resolve.js');
const template = require('./modules/template');


const logger = (string) => console.log(`\n\n${string}`);

const watchHandlers = {
  START: () => logger(chalk.yellow('📦 Bundling your Svelte app!')),
  END: () => logger(chalk.green('⚡️ Bundled your Svelte app!')),
  ERROR: ({ error }) => logger(chalk.red(`Error: ️${error.message}!\n${error.frame}`)),
};

const watch = async ({
  input,
  output,
  isDevelopmentMode,
}) => {
  const inputFolder = path.dirname(input);
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
      chokidar: {
        cwd: process.cwd(),
        paths: [
          `${inputFolder}/**`,
          `${inputFolder}/*.html`,
        ],
      },
      clearScreen: true,
      exclude: ['node_modules/**'],
      // paths:
    },
  };

  // Initial template build
  template({
    input,
    output,
  });

  const watcher = rollup.watch(config);
  watcher.on('change', (changedPath) => {
    /**
     * TODO [2019-10-01]: tech-debt This runs on every change event, which is not desirable
     * This is not desirable.
     *
     */
    template({
      input,
      output,
    });
    //  TODO [2019-10-10]: More logs if --debug mode?
    clear(true);
    logger(chalk.yellow(`📦 ${changedPath} changed!`));
  });

};

module.exports = watch;
