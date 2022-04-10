import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

function AddCategories({ setCategories, categories }) {
  const [value, setValue] = useState("");
  
  const changeValue = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== "") {
      setCategories([{category:value, id:categories.length + 1}, ...categories]);
      setValue('');
    }
  };

  return (
    <Fragment>
      <form
        className="px-4 pt-2 pb-2 md:pt-4 flex flex-wrap justify-start"
        onSubmit={handleSubmit}
      >
        <input
          className="w-3/5 max-w-xs bg-color-secondary rounded-sm px-2 text-white font-bold focus:outline-color-primary placeholder:text-gray-300"
          type="text"
          placeholder="new category"
          onChange={changeValue}
          value={value}
          id="input-category"
        />
        <input
          className="bg-white px-2 rounded ml-2 text-color-secondary border-2 border-solid border-color-secondary font-bold transition duration-150 ease-linear hover:text-white hover:bg-color-secondary focus:outline-none focus:text-white focus:bg-color-secondary"
          type="submit"
          value="search"
        />
      </form>
    </Fragment>
  );
}

AddCategories.propTypes = {
  setCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
};

export default AddCategories;
