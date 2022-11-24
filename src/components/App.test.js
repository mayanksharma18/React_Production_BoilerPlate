import React from "react";
import { shallow } from "enzyme";
import App from "./App.tsx";

describe("renders without crashing", () => {
  it("renders correctly", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
