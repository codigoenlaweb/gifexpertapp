import React from "react";

const GifItem = ({ title, url }) => {
  return (
    <div>
      <img src={url} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default GifItem;
