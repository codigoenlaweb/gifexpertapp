import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import GifExpertApp from "../../GifExpertApp";

describe("GridExpertApp", () => {
  // variables
  const categoriesData = ['one punch', 'dragon ball']

  test("render", () => {
    render(<GifExpertApp />);
    screen.getByText(/GifExpertApp/i)
    screen.getByText(/find the best gifs/i)
  });

//   test("gif list", () => {
//     render(<GifExpertApp defaultGifs={categoriesData} />);
//     expect(screen.queryAllByTestId('list-categories').length).toBe(categoriesData.length)
//   });
});
