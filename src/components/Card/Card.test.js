import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

describe("CreatePost tests", () => {
  let card;
  beforeEach(() => {
    card = shallow(<Card />);
  });

  test("should match the snapshot", () => {
    expect(card).toMatchSnapshot();
  });
});
