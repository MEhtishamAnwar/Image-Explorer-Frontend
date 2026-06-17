import React, { useState } from "react";
import { fetchPhoto,fectchVideo} from "./Api/mediaApi";

const App = () => {
  const [photos, setPhotos] = useState([]);

  const handleSearchPhoto = async () => {
    try {
      const data = await fetchPhoto("cat");

      console.log(data);

      setPhotos(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleSearchVideo=async ()=>{
        try {
      const data = await fectchVideo("cat");
      console.log(data);

      // setPhotos(data.results);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  return (
    <div className="min-h-screen bg-gray-900 text-white p-5">
      <button
        onClick={handleSearchPhoto}
        className="bg-blue-500 px-4 py-2 rounded"
      >
        Get Photos
      </button>
      <button
        className="bg-blue-500 px-4 py-2 rounded"
        onClick={handleSearchVideo}
      >
        Get Video
      </button>

      {/* <h1>{photos}</h1> */}
    </div>
  );
};

export default App;