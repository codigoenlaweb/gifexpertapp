import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useGetGifs = (category) => {
  const [state, setState] = useState({ gifs: [], load: false });

  useEffect(() => {
    getGifs(category).then((dat) => setState({gifs:dat, load:true}));
  }, [category]);

  useEffect((state) => {
    if (state.load) {
      document.querySelector('#grid-card').classList.remove('opacity-0')
      document.querySelector('#grid-card').classList.add('opacity-100')
      console.log(state);
      if (state.gifs.length === 0) {
        document.querySelector('#any-gif').classList.remove('hidden')
      }
    }
  }, [state.load]);
  return state
};
