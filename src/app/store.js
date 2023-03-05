import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "@../features/slices/sliderSlice";
import productsReducer from "../components/features/slices/productsSlice";
import cartReducer from "../components/features/cartSlice";
export const store = configureStore({
  reducer: {
    slider: slideReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});
