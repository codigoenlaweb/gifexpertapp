import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import ContainerCategory from './ContainerCategory';

const ListCategories = ({ categories }) => {

  return (
    <Fragment>
      {categories.map((category) => (
        <ContainerCategory category={category} key={category}/>
      ))}
    </Fragment>
  );
};

ListCategories.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default ListCategories;
