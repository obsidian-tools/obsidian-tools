import { windowsToWSLPath } from "../utils";

describe("windowsToWSLPath", () => {
  it("converts a windows path to a WSL path", () => {
    expect(windowsToWSLPath("C:\\Users\\User\\notes")).toEqual(
      "/mnt/c/Users/User/notes"
    );
  });
});
