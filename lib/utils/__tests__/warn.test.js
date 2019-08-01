const warn = require("../warn.js");

describe("utils/warn", () => {
  beforeEach(() => {
    console.log = jest.fn().mockImplementation(() => {});
  });
  afterAll(() => {
    console.log.clearMock();
  });
  it("logs the provided message with a ⚠️ emoji", () => {
    const mockMessage = "Hello world";
    warn(mockMessage);
    expect(console.log).toHaveBeenCalledWith(`⚠️  ${mockMessage}`);
  });
  it('defaults to "Uh oh! Something went wrong!" when no message is provided', () => {
    warn();
    expect(console.log).toHaveBeenCalledWith(
      `⚠️  Uh oh! Something went wrong!`
    );
  });
});
