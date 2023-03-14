import { createSlice } from "@reduxjs/toolkit";

var initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      //cartItem control
      let cartItem = state.cart.find((q) => q.id == action.payload.id);
      console.log(state.cart);
      if (cartItem == undefined) {
        let newCartItem = {
          _id: action.payload._id,
          title: action.payload.title,
          author: action.payload.author,
          category: action.payload.category,
          image: action.payload.image,
        };

        state.cart.push(newCartItem);
      } else {
        state.cart = state.cart.filter((q) => q.id != action.payload.id);
      }
    },
    remove: (state, action) => {
      state.cart = state.cart.filter((q) => q.id != action.payload.id);
    },
    empty: (state) => {
      state.cart = [];
    },
  },
});

export const { add, remove, empty, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
