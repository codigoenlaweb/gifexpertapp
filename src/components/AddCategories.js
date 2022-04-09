import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

function AddCategories({ setCategories, categories }) {
  const [value, setValue] = useState("");

  const changeValue = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value != "") {
      setCategories([...categories, value]);
    }
  };

  return (
    <Fragment>
      <h2>Add Categories</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="new category" onChange={changeValue} />
        <input type="submit" />
      </form>
    </Fragment>
  );
}

AddCategories.propTypes = {
  setCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
}

export default AddCategories;
