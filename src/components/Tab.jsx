import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../Redux/features/searchSlice'

const Tab= () => {
   const dispatch= useDispatch()

   const activeTab= useSelector((state)=>state.search.activeTab)
    const tabs=['Photos', 'Videos','GIFs']
  return (
    <div className='flex gap-10 p-10'>
        {tabs.map((elem,idx)=>{
            return <button
            className={`
  ${activeTab === elem ? "bg-amber-600" : "bg-gray-700"}
  transition duration-300
  px-3 py-2
  text-sm sm:text-base md:text-lg lg:text-xl
  rounded
  outline-none
  cursor-pointer
  active:scale-95
  whitespace-nowrap
`}
            
            key={idx}
            onClick={()=>{

                dispatch(setActiveTab(elem))
            }}
            >{elem}</button>

        })}
    </div>
  )
}

export default Tab
