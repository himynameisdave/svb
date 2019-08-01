const getDaysInMS = require("../get-days-in-ms.js");

describe("utils/getDaysInMS", () => {
  it("returns the correct number of days in MS", () => {
    const expected = 172800000; // two days
    const actual = getDaysInMS(2);
    expect(actual).toBe(expected);
  });
  it("defaults to 1 day if no day is provided", () => {
    const expected = 86400000; // one day
    const actual = getDaysInMS();
    expect(actual).toBe(expected);
  });
});
