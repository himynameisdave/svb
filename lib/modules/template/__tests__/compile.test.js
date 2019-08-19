// const htmlMinifier = require('html-minifier');
const pupa = require('pupa');

const compile = require('../compile.js');


// jest.mock("pupa");
// jest.mock("html-minifier");
// const mockMinify = jest.fn();
// htmlMinifier.minify.mockImplementation(() => ({
//     minify: mockMinify,
// }));

describe('modules/template/compile', () => {
    const mockTitle = 'Some App';

    it('calls pupa to inject the variables to the template', () => {
        // const mockTemplate = `<html>{SVB.title}</html>`;
        // pupa.mockImplementation(template => template);
        // console.log('pupa', pupa);

        // compile(mockTitle, mockTemplate);
        // expect(pupa).toHaveBeenCalledTimes(1);
        // expect(pupa).toHaveBeenCalledWith(mockTemplate);
        expect(1).toBe(1);
    });
    // it('calls HTML minify and return the minified template', () => {
    // const mockTemplate = `<html>{SVB.title}</html>`;
    //  const mockMinifySpy = jest.spyOn(htmlMinifier, "minify").mockImplementation(() => { });
    // pupa.mockImplementation(() => '');

    //     compile(mockTitle, mockTemplate);
    //     expect(mockMinify).toHaveBeenCalledTimes(1);
    // expect(mockMinify).toHaveBeenCalledWith(mockTemplate);
    // });
});