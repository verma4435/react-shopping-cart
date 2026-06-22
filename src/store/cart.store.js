import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart-slice",
  initialState: cartInitialState,
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
      state.totalQuantity++;
      state.totalPrice += action.payload.price;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
