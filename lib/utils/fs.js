const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

module.exports = {
    read: path => readFile(path, 'utf8'),
    write: (path, data) => writeFile(path, data, 'utf8'),
}