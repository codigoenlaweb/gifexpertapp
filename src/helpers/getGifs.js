export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=JnNlGSgY22n1Vdw89gDUUZjwR6zQqYXH&q=${encodeURI(
    category
  )}`;

  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.fixed_width.url,
    };
  });
  return gifs;
};
