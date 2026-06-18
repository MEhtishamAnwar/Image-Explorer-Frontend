import React from 'react'
import SearchBar from './components/SearchBar'
import Tab from './components/Tab'
import ResultGrid from './components/ResultGrid'
import ResultCard from './components/ResultCard'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div className='h-full w-full text-white bg-gray-900'>


      <SearchBar/>
      <Tab/>
      <ResultGrid/>

    </div>
  )
}

export default App









// import React, { useState } from "react";
// import { fetchPhoto,fectchVideo} from "./Api/mediaApi";
// const App = () => {
//   const [photos, setPhotos] = useState([]);
//   const handleSearchPhoto = async () => {
//     try {
//       const data = await fetchPhoto("dog");
//       console.log(data);
//       setPhotos(data);
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   };
//   const handleSearchVideo=async ()=>{
//         try {
//       const data = await fectchVideo("cat");
//       console.log(data);
//       // setPhotos(data.results);
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   }
//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-5">
//       <button
//         onClick={handleSearchPhoto}
//         className="bg-blue-500 px-4 py-2 rounded m-2 cursor-pointer active:scale-95"
//       >
//         Get Photos
//       </button>
//       <button
//       className="bg-blue-500 px-4 py-2 rounded m-2 cursor-pointer active:scale-95"
//         onClick={handleSearchVideo}
//       >
//         Get Video
//       </button>

//       {/* <h1>{photos}</h1> */}
//     </div>
//   );
// };
// export default App;