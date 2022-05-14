import index from "../index";

// TODO: add meaningful tests
describe("wellenplan", () => {
  describe("hook", () => {
    describe("index", () => {
      it("should define a hook", () => {
        expect(index).toMatchSnapshot();
      });
    });
  });
});
