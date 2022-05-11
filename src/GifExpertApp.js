import { Fragment, useState } from "react";
import AddCategories from "./components/AddCategories";
import ListCategories from "./components/ListCategories";
import {AnyCategory} from "./components/AnyCategory"

function GifExpertApp({defaultGifs = [] }) {
  const [categories, setCategories] = useState(defaultGifs);
  return (
    <Fragment>
      <header className="border-b-2 border-solid border-color-secondary">
        <nav className=" max-w-screen-xl">
          <h2 className="text-color-primary font-bold text-2xl md:text-3xl mt-2 ml-4 md:mt-4">
            GifExpertApp
          </h2>
          <AddCategories
            categories={categories}
            setCategories={setCategories}
          />
        </nav>
      </header>
      <AnyCategory categories={categories}/>
      <ListCategories categories={categories}/>
    </Fragment>
  );
}

export default GifExpertApp;
