import React, { Fragment } from "react";
import { useGetGifs } from "../hooks/useGetGifs";
import GifItem from "./GifItem";
import PropTypes from "prop-types";

const GridGifs = ({ category }) => {
  const { gifs, load } = useGetGifs(category);

  return (
    <Fragment>
      {!load && (
        <svg
          className="mx-auto transition duration-150 ease-linear animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          height="52px"
          viewBox="0 0 24 24"
          width="52px"
          fill="#5333ed"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" />
        </svg>
      )}
      {/* gifs not found */}
      <p id="any-gif" className="text-color-primary text-2xl md:text-3xl font-bold text-center hidden">Can't find any gif.<br/>(;-;)</p>

      <article
        id="grid-card"
        className="grid justify-center grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 transition duration-300 ease-linear opacity-0"
      >
        {gifs.map(({ id, title, url }) => (
          <GifItem key={id} title={title} url={url} />
        ))}
      </article>
    </Fragment>
  );
};

GridGifs.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GridGifs;
