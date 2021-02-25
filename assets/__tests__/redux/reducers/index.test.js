import { base } from "../../../js/redux/reducers";

test("returns default for bogus types", () => {
  expect(base(undefined, { type: "Skippity", payload: {} })).toStrictEqual({});
});
