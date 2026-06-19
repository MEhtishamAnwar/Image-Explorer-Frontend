import { useDispatch } from "react-redux"
import { addCollection, addToaster } from "../Redux/features/collectionSlice"
const ResultCard = ({ item }) => {
  const dispatch= useDispatch()
const  addToCollection=()=>{
  dispatch(addCollection(item))
  dispatch(addToaster())
} 
  if (!item) return null

  const { type, title, thumbnail, src } = item
  return (
    <div className='bg-white rounded-lg overflow-hidden shadow-md text-black'>
      {type === 'video' ? (
        <video className='w-full h-64 object-cover' controls>
          <source src={src} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      ) : (
        <a href={thumbnail || src}>
          <img
          src={thumbnail || src}
          alt={title || 'result'}
          className='w-full h-64 object-cover'
        />
        </a>
      )}
        <div className="flex justify-between" >



      <div className='p-4 '>
        <h2 className='text-lg font-semibold mb-2'>{title || 'Untitled'}</h2>
        <p className='text-sm text-gray-700'>Type: {type || 'photo'}</p>
        
      </div>
      <button
      onClick={addToCollection}
      className="bg-blue-700 rounded active:scale-95 p-1 mr-3 w-27 my-4 h-10">save</button>
        </div>


      
    </div>
  )
}

export default ResultCard