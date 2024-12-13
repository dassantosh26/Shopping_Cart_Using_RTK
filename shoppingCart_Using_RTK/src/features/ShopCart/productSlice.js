import {createSlice} from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        status:"idle"
    },
    
})

export default productSlice.reducer;