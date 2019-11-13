import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

describe("CreatePost tests", () => {
  let button;
  beforeEach(() => {
    button = shallow(<Button />);
  });

  test("should match the snapshot", () => {
    expect(button).toMatchSnapshot();
  });
});
