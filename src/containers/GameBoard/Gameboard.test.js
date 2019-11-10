import React from "react";
import { shallow } from "enzyme";
import GameBoard from "./GameBoard";

describe("CreatePost tests", () => {
  let card;
  beforeEach(() => {
    gameboard = shallow(<GameBoard />);
  });

  test("should match the snapshot", () => {
    expect(gameboard).toMatchSnapshot();
  });
});