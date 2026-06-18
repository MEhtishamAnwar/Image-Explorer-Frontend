import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PIXEL_KEY= import.meta.env.VITE_PIXEL_KEY
const TENOR_KEY = import.meta.env.VITE_TENOR_KEY
export async function fetchPhoto(query, page = 1, per_page = 30) {
  const response = await axios.get(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        query,
        page,
        per_page,
      },
      headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
    }
  );
//   console.log(response.data);
  return response.data.results;
}
export async function fectchVideo(query , per_page = 15) {
  const response = await axios.get("https://api.pexels.com/videos/search", {
    params: {
      query,
      per_page,
    },
    headers: { Authorization: PIXEL_KEY },
  });

  return response.data.videos;
}

export async function fetchGif(query = "funny", limit = 12) {
  const response = await axios.get("https://api.tenor.com/v1/search", {
    params: {
      q: query,
      key: TENOR_KEY,
      limit,
    },
  });

  return response.data.results;
}