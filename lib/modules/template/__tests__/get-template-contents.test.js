const getTemplateContents = require('../get-template-contents.js');
const reportTemplateUsage = require("../report-template-usage.js");
const readTemplate = require("../read-template.js");
const { read } = require('../../../utils/fs.js');
const { HTML_TEMPLATE_NAMES } = require('../../../constants.js');


jest.mock("../../../utils/fs.js");
jest.mock("../read-template.js");
jest.mock("../report-template-usage.js");
reportTemplateUsage.mockImplementation(() => { });
jest.spyOn(console, 'log').mockImplementation(() => { });

describe('modules/template/getTemplateContents', () => {
    const mockTemplateContents = '<html>Custom Template</html>';
    describe('when a valid html template is provided', () => {
        const mockFileName = HTML_TEMPLATE_NAMES[0];
        it('should return the contents of the template file', async () => {
            readTemplate.mockImplementationOnce(() => Promise.resolve({
                contents: mockTemplateContents,
                fileName: mockFileName,
            }));
            const actual = await getTemplateContents('some/input/path/');
            expect(actual).toBe(mockTemplateContents);
        });
    });
    describe('when a no valid html template is provided', () => {
        it('should return the contents of the default template', async () => {
            readTemplate.mockImplementation(() => Promise.resolve({
                error: 'Ya done goofed!'
            }));
            read.mockImplementationOnce(() => Promise.resolve(mockTemplateContents));
            const mockTemplateContents = '<html>Custom Template</html>';
            const actual = await getTemplateContents('some/input/path/');
            expect(actual).toBe(mockTemplateContents);
        });
    });
});