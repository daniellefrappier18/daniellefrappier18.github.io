import React from "react";
import { Button } from "./button.component";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Button component", () => {
  // test component with props
  it("Button renders correctly Props", () => {
    const tree = renderer
      .create(
        <Button
          buttonType="primary"
          size="medium"
          href="https://www.daniellefrappier.com"
          target="_blank"
          isFullWidth={false}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Button renders correctly with small size and secondary", () => {
    const tree = renderer
      .create(
        <Button
          buttonType="secondary"
          size="small"
          href="https://www.daniellefrappier.com"
          target="_blank"
          isFullWidth={false}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Button renders correctly with no props", () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Button renders correctly at full width", () => {
    const tree = renderer.create(<Button isFullWidth={true}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  afterEach(cleanup);
});
