import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { getGifs } from "../../helpers/getGifs";

describe("getGifs", () => {
  test("get endpoint", async () => {
    const gifs = await getGifs('one punch');
    expect(gifs.length).not.toBe(0)
  });
});
