const warn = require('../warn.js');


describe('utils/warn', () => {
  beforeEach(() => {
    console.warn = jest.fn().mockImplementation(() => { });
  });
  afterAll(() => {
    console.warn.clearMock();
  });
  it('logs the provided message with a ⚠️ emoji', () => {
    const mockMessage = 'Hello world';
    warn(mockMessage);
    expect(console.warn).toHaveBeenCalledWith(`⚠️  ${mockMessage}`, null);
  });
  it('defaults to "Uh oh! Something went wrong!" when no message is provided', () => {
    warn();
    expect(console.warn).toHaveBeenCalledWith(
      '⚠️  Uh oh! Something went wrong!',
      null,
    );
  });
  it('logs the rest of the error, if provided', () => {
    const mockMessage = 'Ya done goofed';
    const mockError = {
      code: 'ENOENT',
      message: mockMessage,
    };
    warn(mockMessage, mockError);
    expect(console.warn).toHaveBeenCalledWith(`⚠️  ${mockMessage}`, mockError);
  });
});
