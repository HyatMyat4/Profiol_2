import { configureStore } from "@reduxjs/toolkit";
import ActionsliceReducer from "./actionslice"

export const store = configureStore({
    reducer:{
        actionslice:ActionsliceReducer,        
    },   
})