const pathCwdResolve = require("../path-cwd-resolve.js");

describe("utils/pathCwdResolve", () => {
  const mockCwd = "/some/file/path";
  beforeEach(() => {
    const mockProcessCwd = jest.spyOn(process, "cwd");
    mockProcessCwd.mockReturnValue(mockCwd);
  });

  it("returns the expected path", () => {
    const mockAdditionalPath = "folder/file.js";
    const actual = pathCwdResolve(mockAdditionalPath);
    const expected = `${mockCwd}/${mockAdditionalPath}`;
    expect(actual).toBe(expected);
  });
});
