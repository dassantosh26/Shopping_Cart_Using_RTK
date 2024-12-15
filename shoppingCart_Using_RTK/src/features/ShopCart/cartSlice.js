/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  tempItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //Action Creator
    addToCart(state, action) {
      // console.log(action.payload);
      const existingItems = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItems) {
        existingItems.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.tempItems = [...state.items];
      state.totalPrice = state.items.reduce((sum, item) => sum + item.price, 0);
    },
    removeFromCart(state, action) {
      // alert(action.payload)
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.tempItems = [...state.items];
      state.totalPrice = state.items.reduce((sum, item) => sum + item.price, 0);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
