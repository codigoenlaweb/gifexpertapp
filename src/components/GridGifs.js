import React, { useEffect, useState } from "react";
import GifItem from "./GifItem";

const GridGifs = ({ category }) => {
  const [gif, setGif] = useState([]);

  const getGif = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?api_key=JnNlGSgY22n1Vdw89gDUUZjwR6zQqYXH&q=rickandmorthy";

    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map((gif) => {
      return {
        id: gif.id,
        title: gif.title,
        url: gif.images.fixed_width.url,
      };
    });

    setGif(gifs);
  };

  useEffect(() => {
    getGif();
  }, []);

  return (
    <article>
      {gif.map(({ id, title, url }) => (
        <GifItem key={id} title={title} url={url} />
      ))}
    </article>
  );
};

export default GridGifs;
