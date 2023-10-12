import { configureStore } from "@reduxjs/toolkit";
import ratingSlice from "./ratingSlice";

//Congiguring store for redux
const store = configureStore({
    reducer:{
        rating : ratingSlice
    }
})

export default store;