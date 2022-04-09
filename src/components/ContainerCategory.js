import React, { Fragment } from "react";
import GridGifs from "./GridGifs";

const ContainerCategory = ({ category }) => {
  return (
    <section>
      <h2>{category}</h2>
      <GridGifs category={category} />
    </section>
  );
};

export default ContainerCategory;
