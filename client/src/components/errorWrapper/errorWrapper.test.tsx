import { render, screen } from "@testing-library/react";
import { ErrorWrapper } from "..";

describe("<ErrorWrapper /> test", () => {
  test("should show the correct text", () => {
    render(
      <ErrorWrapper>
        <h1>I'm a child</h1>
      </ErrorWrapper>
    );

    expect(screen.getByText("I'm a child")).toBeDefined();
  });
});
