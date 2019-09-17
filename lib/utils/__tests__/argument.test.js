const ensureArg = require('../ensure-argument.js');
const warn = require('../warn.js');


jest.mock('../warn.js');

describe('utils/ensureArg', () => {
  beforeEach(() => {
    warn.mockImplementation(() => { });
  });

  describe('when the argument is invalid', () => {
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => { });
    afterAll(() => {
      mockExit.mockClear();
      warn.mockClear();
    });
    //  Run the fn
    ensureArg(undefined, 'input');
    it('warns with the proper warning', () => {
      expect(warn).toHaveBeenCalledWith(
        'Please provide an input value with the --input flag!',
      );
      expect(warn).toHaveBeenCalledTimes(1);
    });
    it('kills the process', () => {
      expect(mockExit).toHaveBeenCalledWith(1);
      expect(mockExit).toHaveBeenCalledTimes(1);
    });
  });

  describe('when the argument is valid', () => {
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => { });
    //  Run the fn
    ensureArg('some-input.js', 'input');
    it('does nothing', () => {
      expect(warn).not.toHaveBeenCalled();
      expect(mockExit).not.toHaveBeenCalled();
    });
  });
});
