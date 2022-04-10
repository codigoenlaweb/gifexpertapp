import React, { Fragment } from "react";
import PropTypes from 'prop-types';

export const AnyCategory = ({ categories }) => {
  return (
    <Fragment>
      {categories.length < 1 && (
        <h2 className="mt-2 md:mt-4 animate-pulse text-center text-2xl md:text-3xl font-bold text-color-primary">
          find the best gifs
        </h2>
      )}
    </Fragment>
  );
};

AnyCategory.propTypes = {
  categories: PropTypes.array.isRequired
};
 