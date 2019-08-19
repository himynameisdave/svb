const readTemplate = require('../read-template.js');
const { read } = require('../../../utils/fs.js');

jest.mock("../../../utils/fs.js");


describe('modules/template/readTemplate', () => {
    const mockFilename = 'some-template.html';
    it('should return an contents and fileName', async () => {
        const mockTemplateContents = 'template contents';
        read.mockImplementationOnce(() => Promise.resolve(mockTemplateContents));
        const results = await readTemplate(mockFilename);
        expect(results).toHaveProperty('contents', mockTemplateContents);
        expect(results).toHaveProperty('fileName', mockFilename);
    });
    it('should return an error if reading template fails', async () => {
        const error = 'Ya done goofed!';
        read.mockImplementationOnce(() => Promise.reject(new Error(error)));
        const results = await readTemplate(mockFilename);
        expect(results).toHaveProperty('error');
    });
});