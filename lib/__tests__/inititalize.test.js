const updateNotifier = require("update-notifier");
const initialize = require("../initialize.js");

jest.mock("update-notifier");

describe("initialize", () => {
  const mockNotify = jest.fn();
  beforeEach(() => {
    updateNotifier.mockImplementation(() => ({
      notify: mockNotify
    }));
  });
  it("calls the update notifier", () => {
    initialize();
    expect(mockNotify).toHaveBeenCalledTimes(1);
  });
  //  TODO: also assert that it calls commander...
});
