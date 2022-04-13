import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import GifItem from "../../components/GifItem";

describe("GifItem", () => {
  const title = "hola";
  const url = "http:image";

  test("prop title", () => {
    let component = render(<GifItem title={title} url={url} />);

    // test 1 show prop title
    component.getByText(title);
  });

  test("prop img atributes", () => {
    const component = render(<GifItem title={title} url={url} />);
    // test 2 img src={url}
    expect(component.getByRole("img")).toHaveAttribute("src", url);

    // test 3i mg alt={title}
    expect(component.getByRole("img")).toHaveAttribute("alt", title);
  });
});
