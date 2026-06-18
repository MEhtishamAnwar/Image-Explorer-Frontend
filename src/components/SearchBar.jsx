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
            
            <input
            value={text}
            onChange={(e)=>{
                
                setText(e.target.value)
            }}
            
            required
            className='border-2 px-4 py-2 text-xl rounded outline-none w-full '
            type="text" name=""placeholder='Seacrch anything' id="" />
            <button 
            
            className='border-2 px-4 py-2 text-xl rounded outline-none cursor-pointer active:scale-95' 

            >Search</button>
           
        </form>

       
    </div>
  )
}

export default SearchBar