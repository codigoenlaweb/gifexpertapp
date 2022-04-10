import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ContainerCategory from './ContainerCategory';

const ListCategories = ({ categories }) => {
  return (
    <Fragment>
      {categories.map(({category, id}) => (
        <ContainerCategory category={category} key={id} />
      ))}
    </Fragment>
  );
};

ListCategories.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default ListCategories;
