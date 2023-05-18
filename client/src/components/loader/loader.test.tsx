import { render, screen } from "@testing-library/react";
import { Loader } from "..";

describe("<Loader /> test", () => {
  test("should be render in the screen", () => {
    render(<Loader />);

    expect(screen.getByRole("loader")).toBeDefined();
  });
});
