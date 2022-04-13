import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import AddCategories from "../../components/AddCategories";

describe("AddCategories", () => {
  const setCategories = jest.fn();
  

  test("change input text event", () => {
    const value = "naruto";

    const component = render(
      <AddCategories
        categories={["onw punch", "HUnterXhunter"]}
        setCategories={setCategories}
      />
    );

    fireEvent.change(component.getByTestId("input-category"), {
      target: { value: value },
    });

    expect(component.getByTestId("input-category")).toHaveAttribute(
      "value",
      value
    );
  });

  test("submit not setcategorie called", () => {
    const component = render(
      <AddCategories
        categories={["onw punch", "HUnterXhunter"]}
        setCategories={setCategories}
      />
    );

    fireEvent.submit(component.getByTestId("form"), {});

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("submit call setcategorie", () => {
    const value = "naruto";

    const component = render(
      <AddCategories
        categories={["onw punch", "HUnterXhunter"]}
        setCategories={setCategories}
      />
    );

    fireEvent.change(component.getByTestId("input-category"), {
      target: { value: value },
    });

    fireEvent.submit(component.getByTestId("form"), {});

    expect(setCategories).toHaveBeenCalled();
  });
});
