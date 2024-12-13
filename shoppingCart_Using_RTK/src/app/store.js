import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/ShopCart/productSlice" 
const store = configureStore({
    reducer: {
        products:productReducer
    }
})
export default store;