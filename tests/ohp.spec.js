const { ohp } = require("../lib");

describe("ohp", () => {
  it("should return only html props", () => {
    const props = {
      salutation: "hello",
      className: ".salutation",
      href: "/hello.html"
    };

    expect(ohp(props)).toEqual({
      className: ".salutation",
      href: "/hello.html"
    });
  });
});
