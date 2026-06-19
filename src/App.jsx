import React from 'react'
import SearchBar from './components/SearchBar'
import Tab from './components/Tab'
import ResultGrid from './components/ResultGrid'
import CollectionPages from './pages/CollectionPages'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, NavLink } from 'react-router-dom'

const App = () => {
  return (
    <div className='h-100% w-full text-white bg-gray-900'>

      <header className='flex flex-col gap-4 p-6 bg-gray-800'>
        <div className='flex flex-wrap gap-3 justify-between'>

          <h1 className='text-amber-500 text-3xl'>Image Explorer</h1>

          <div className="flex gap-5">

     <NavLink
            to='/'
            className={({ isActive }) =>
              `px-4 py-2 rounded ${isActive ? 'bg-amber-500 text-black' : 'bg-gray-700 text-white'}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to='/collection'
            className={({ isActive }) =>
              `px-4 py-2 rounded ${isActive ? 'bg-amber-500 text-black' : 'bg-gray-700 text-white'}`
            }
          >
            Collection
          </NavLink>

          </div>
     
        </div>
        <SearchBar />
      </header>

      <main>
        <Routes>
          <Route path='/' element={
            <>
              <Tab />
              <ResultGrid />
            </>
          } />
          <Route path='/collection' element={<CollectionPages />} />
        </Routes>
      </main>

      <ToastContainer />
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