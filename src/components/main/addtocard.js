import { createSlice } from "@redux/toolkit";

export const createSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducer: {
    addToCart(state, action) {},
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
