const writeTemplate = require('../write-template.js');
const { write } = require('../../../utils/fs.js');

const mockBasePath = 'absolute/path/';

jest.mock("../../../utils/fs.js");
jest.mock("../../../utils/path-cwd-resolve.js", () => (path) => `${mockBasePath}${path}`);


describe('modules/template/writeTemplate', () => {
    it('calls write with the correct path & data', async () => {
        write.mockImplementationOnce(() => Promise.resolve());
        const mockOutput = 'some/dist/path';
        const mockCompiled = 'some compiled stuff';
        await writeTemplate({
            output: mockOutput,
            compiled: mockCompiled
        });
        expect(write).toHaveBeenCalledWith(`${mockBasePath}${mockOutput}`, mockCompiled);
    });
});
