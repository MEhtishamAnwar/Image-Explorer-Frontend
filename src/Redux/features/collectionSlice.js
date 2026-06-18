import { createSlice } from "@reduxjs/toolkit";
const initiastate={
    item:JSON.parse(localStorage.getItem("collection"))||[]
}
const collectionSlice=createSlice({
    name:'collection',
    initialState,
})
