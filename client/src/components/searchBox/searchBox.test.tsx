import { render, screen } from "@testing-library/react";
import { SearchBox } from "..";

describe("<SearchBox/> test", () => {
  test("should be render in the screen", () => {
    render(
      <SearchBox handleSubmit={() => null} onChange={() => null} value="hola" />
    );

    expect(screen.getByPlaceholderText("Nunca dejes de buscar")).toBeDefined();
  });
});
