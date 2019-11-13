import React from "react";
import { shallow } from "enzyme";
import EmbarkPage from "./EmbarkPage";

describe("CreatePost tests", () => {
  let embarkpage;
  beforeEach(() => {
    embarkpage = shallow(<EmbarkPage />);
  });

  test("should match the snapshot", () => {
    expect(embarkpage).toMatchSnapshot();
  });
});