import { Fragment, useState } from "react";
import AddCategories from "./components/AddCategories";
import ListCategories from "./components/ListCategories";

function GifExpertApp() {
  const [categories, setCategories] = useState([
    "Hunterxhunter",
  ]);

  return (
    <Fragment>
      <h2>GifExpertApp</h2>
      <AddCategories categories={categories} setCategories={setCategories} />
      <hr />
      <ListCategories categories={categories} />
    </Fragment>
  );
}

export default GifExpertApp;
