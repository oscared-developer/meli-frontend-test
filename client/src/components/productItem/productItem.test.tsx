import { render, screen } from "@testing-library/react";
import { ProductItem } from "..";

describe("<ProductItem/> test", () => {
  test("should be render in the screen", () => {
    render(
      <ProductItem
        description={{ plain_text: "descripcion" }}
        details={{
          condition: "",
          pictures: [{ url: "" }],
          price: 0,
          sold_quantity: 0,
          title: "Product Test",
        }}
      />
    );

    expect(screen.getByText("Product Test")).toBeDefined();
  });
});
