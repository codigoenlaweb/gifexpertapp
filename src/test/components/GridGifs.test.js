// import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import GridGifs from "../../components/GridGifs";
import { useGetGifs } from "../../hooks/useGetGifs";
jest.mock("../../hooks/useGetGifs");

describe("GridGifs", () => {
  // variables
  const categoryData = "one punch";
  const gitfItem = [{
    id: "5",
    url: "https://localhost/anything.jpg",
    title: "anything",
  }];

  test("render", () => {
    useGetGifs.mockReturnValue({
      gifs: [],
      load: false,
    });
    render(<GridGifs category={categoryData} />);
  });

  test("show loadin", async () => {
    useGetGifs.mockReturnValue({
      gifs: gitfItem,
      load: true,
    });
    render(<GridGifs category={categoryData} />);

    screen.getByText("anything");
    screen.getByAltText("anything");
    screen.getByText(/Can't/i);
    expect(
      screen.getByText("anything").parentElement.parentElement.childElementCount
    ).toBe(gitfItem.length);
    expect(screen.queryByTestId("load")).toBeNull();
  });
});
