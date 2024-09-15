import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
      items: [],  
    },
    reducers: {
      addItems: (state, action) => {
        state.items.push(action.payload);  // Add a new item to the cart
      },
      removeItems: (state) => {
        state.items.pop();  // Remove the last item from the cart
      },
      clearCart: (state) => {
        state.items = [];  // Clear all items in the cart
      }
    }
  });
  
  export const { addItems, removeItems, clearCart } = cartSlice.actions;
  export default cartSlice.reducer;
  