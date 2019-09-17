const commander = require('commander');
const updateNotifier = require('update-notifier');

const initialize = require('../initialize.js');


jest.mock('commander');
jest.mock('update-notifier');

describe('initialize', () => {
  const mockNotify = jest.fn();
  beforeEach(() => {
    updateNotifier.mockImplementation(() => ({
      notify: mockNotify,
    }));
    const getOption = (parse = () => { }) => () => ({
      option: getOption(),
      parse,
    });
    commander.version.mockReturnValue({
      option: getOption(),
    });
  });
  it('calls the update notifier', () => {
    initialize();
    expect(mockNotify).toHaveBeenCalledTimes(1);
  });
  //  TODO [>=1]: also assert that it calls commander...
});
