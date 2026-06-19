import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCollection } from '../Redux/features/collectionSlice'

const CollectionPages = () => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.collection.items)

  const handleRemove = (id) => {
    dispatch(removeCollection(id))
  }

  return (
    <section className='p-6 border-t border-gray-700'>
      <div className='flex items-center justify-between mb-4'>
        <div>
          <h2 className='text-2xl font-semibold'>Saved Collection</h2>
          <p className='text-sm text-gray-400'>{items.length} saved item{items.length === 1 ? '' : 's'}</p>
        </div>
      </div>

      {items.length === 0 ? (
        <div className='rounded-lg bg-gray-800 p-6 text-gray-300'>No saved items yet.</div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {items.map((item) => (
            <div key={item.id || item.src || item.thumbnail} className='bg-white rounded-lg overflow-hidden shadow-md text-black'>
              {item.type === 'video' ? (
                <video className='w-full h-64 object-cover' controls>
                  <source src={item.src} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={item.thumbnail || item.src} alt={item.title || 'saved item'} className='w-full h-64 object-cover' />
              )}
              <div className='p-4'>
                <h3 className='text-lg font-semibold mb-2'>{item.title || 'Untitled'}</h3>
                <p className='text-sm text-gray-700 mb-4'>Type: {item.type || 'photo'}</p>
                <button
                  onClick={() => handleRemove(item.id)}
                  className='bg-red-600 text-white px-3 py-2 rounded active:scale-95'>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default CollectionPages