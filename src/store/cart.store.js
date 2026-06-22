import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart-slice",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
