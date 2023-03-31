import { createSlice } from "@reduxjs/toolkit";
import { basketService } from "../services/basket.service";
import { IProduct } from "../models/product";

const localBasket = basketService.get();

const basket = createSlice({
  name: "basket",
  initialState: {
    basket: localBasket,
  },
  reducers: {
    addToBasket: (state, action) => {
      const product: IProduct = action.payload;
      if (state.basket.filter((b) => b.productId == product.id).length > 0) {
        state.basket = state.basket.map((basketProduct) => {
          if (basketProduct.productId == product.id) {
            basketProduct.quantity++;
          }
          return basketProduct;
        });
      } else {
        state.basket.push({
          price: +product.price,
          productId: product.id,
          productName: product.name,
          quantity: 1,
        });
      }
      basketService.set(state.basket);
    },
    changeQuantity: (state, action) => {
      const payload: { id: string; quantity: number } = action.payload;
      state.basket = state.basket.map((basketProduct) => {
        if (basketProduct.productId == payload.id) {
          basketProduct.quantity = payload.quantity;
        }
        return basketProduct;
      });
      basketService.set(state.basket);
    },
    deleteFromBasket: (state, action) => {
      state.basket = state.basket.filter(
        (product) => product.productId != action.payload
      );
      basketService.set(state.basket);
    },
    checkout: (state) => {
      state.basket = [];
      basketService.set(state.basket);
    },
  },
});

export const { addToBasket, changeQuantity, checkout, deleteFromBasket } =
  basket.actions;

export default basket.reducer;
