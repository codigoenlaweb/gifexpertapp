import React from "react";
import PropTypes from "prop-types";

const GifItem = ({ title, url }) => {
  return (
    <article className="mt-2 md:mt-3 bg-gray-100 shadow-md w-60 xs:w-48 md:w-60 mb-2 md:mb-4 mx-auto border-2 border-solid border-gray-300 rounded-md">
      <img className="w-full mx-auto rounded-t-md" src={url} alt={title} />
      <h3 className="mx-1 md:mx-2 mt-2 md:mt-3 font-medium text-gray-500">{title}</h3>
    </article>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifItem;
