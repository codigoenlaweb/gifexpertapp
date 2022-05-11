import React from "react";
import GridGifs from "./GridGifs";
import PropTypes from "prop-types";

const ContainerCategory = ({ category }) => {
  return (
    <section data-testid="list-categories" className="px-4 py-2 md:py-4 mb-2 max-w-screen-xl mx-auto">
      <h2 className="text-lg md:text-xl font-bold text-color-secondary">
        {category}
      </h2>
      <GridGifs category={category} />
    </section>
  );
};

ContainerCategory.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ContainerCategory;
