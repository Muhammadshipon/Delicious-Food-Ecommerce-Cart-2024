import { configureStore } from "@reduxjs/toolkit";
import cartSlice from'./Features/cartSlice';

// create store 
export const store = configureStore({
  reducer:{
   allCart:cartSlice 
  }
})