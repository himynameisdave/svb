const path = require("path");

/**
 * Wrapper around path.resolve, with process.cwd() as the 1st argument
 *
 * @param {string | Array<string>} pth The path/path pieces which you want to resolve
 */
const pathCwdResolve = (...pth) => path.resolve(process.cwd(), ...pth);

module.exports = pathCwdResolve;
