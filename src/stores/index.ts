import { configureStore } from "@reduxjs/toolkit";
import basket from "./basket";
import products from "./products";

const store = configureStore({
  reducer: {
    products,
    basket,
  },
});

export default store;
