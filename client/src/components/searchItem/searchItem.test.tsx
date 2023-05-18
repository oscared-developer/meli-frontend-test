import { render, screen } from "@testing-library/react";
import { SearchItem } from "..";

describe("<SearchItem /> test", () => {
  test("should be render in the screen", () => {
    render(
      <SearchItem
        item={{
          address: { state_name: "" },
          id: "",
          price: 0,
          shipping: { free_shipping: true },
          thumbnail: "",
          title: "search item",
        }}
        onClick={() => null}
      />
    );

    expect(screen.getByText("search item")).toBeDefined();
  });
});
