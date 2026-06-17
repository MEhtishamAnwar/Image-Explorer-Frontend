import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PIXEL_KEY= import.meta.env.VITE_PIXEL_KEY
export async function fetchPhoto(query, page = 1, per_page = 20) {
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
export async function fectchVideo(query = "nature", per_page = 15) {
  const response = await axios.get("https://api.pexels.com/videos/search", {
    params: {
      query,
      per_page,
    },
    headers: { Authorization: PIXEL_KEY },
  });

  return response.data.videos;
}

  