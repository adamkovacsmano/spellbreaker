import React from "react";
import { shallow } from "enzyme";
import Monster from "./Monster";

describe("CreatePost tests", () => {
  let monster;
  beforeEach(() => {
    monster = shallow(<Monster />);
  });

  test("should match the snapshot", () => {
    expect(monster).toMatchSnapshot();
  });
});
