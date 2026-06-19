import React from 'react'
import {useDispatch} from 'react-redux'
import { useState } from 'react'

import { setQuery } from '../Redux/features/searchSlice'
const SearchBar = () => {
    const [text, setText] = useState("")
      
    const dispatch=useDispatch()

    const submitHandler=(e)=>{

        e.preventDefault()
        
        dispatch(setQuery(text))
   
        setText("")

    }
  return (
    <div>
        <form  className='flex p-10 gap-2 bg-gray-800' 
        onSubmit={(e)=>{
            submitHandler(e)
        }}>
            
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-3xl mx-auto">
  
  <input
    value={text}
    onChange={(e) => setText(e.target.value)}
    required
    type="text"
    placeholder="Search anything"
    className="border-2 px-4 py-2 text-lg sm:text-xl rounded outline-none w-full"
  />

  <button
    className="border-2 px-4 py-2 text-lg sm:text-xl rounded cursor-pointer active:scale-95 w-full sm:w-auto"
  >
    Search
  </button>

</div>
        </form>

       
    </div>
  )
}

export default SearchBar