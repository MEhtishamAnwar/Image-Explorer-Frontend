import { createSlice } from "@reduxjs/toolkit";
import { toast, Bounce } from 'react-toastify';
const initialState={
    items: JSON.parse(localStorage.getItem("collection")) || []
}
export const collectionSlice=createSlice({
    name:'collection',
    initialState,
    reducers:{

        addCollection:(state ,action)=>{
            
    const alreadyExists=state.items.find(
        item=>item.id==action.payload.id
    )
    if(!alreadyExists){
        state.items.push(action.payload);
            localStorage.setItem('collection',JSON.stringify(state.items))

    }
        },
        removeCollection:(state,action)=>{
            state.items=state.items.filter(
                item=>item.id!==action.payload
            )
            localStorage.setItem('collection',JSON.stringify(state.items))


        },
        clearCollection:(state,action)=>{
            state.items=[]
            localStorage.removeItem("collection")

        },
        addToaster:()=>{
            toast('Item is sucessfuly added ', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
        }

    }
})
export const  {addCollection,removeCollection,clearCollection,addToaster}=collectionSlice.actions;
export default collectionSlice.reducer;
