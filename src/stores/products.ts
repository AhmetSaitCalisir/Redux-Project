import { productService } from "../services/product.service";
import { createSlice } from "@reduxjs/toolkit";

const productsData = await productService.getAll();

const products = createSlice({
  name: "products",
  initialState: {
    products: productsData.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    ),
    brands: [...new Set(productsData.map((product) => product.brand))],
    models: [...new Set(productsData.map((product) => product.model))],
  },
  reducers: {
    clearFilters: (state) => {
      state.products = productsData;
      state.models = [...new Set(productsData.map((product) => product.model))];
    },
    brandFilter: (state, action) => {
      const filters: string[] = action.payload;
      state.products = productsData.filter((product) =>
        filters.includes(product.brand)
      );
      state.models = [
        ...new Set(state.products.map((product) => product.model)),
      ];
    },
    modelFilter: (state, action) => {
      const filters: string[] = action.payload;
      state.products = state.products.filter((product) =>
        filters.includes(product.model)
      );
    },
    sort: (state, action) => {
      switch (action.payload) {
        case "old":
          state.products = state.products.sort(
            (a, b) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
          break;
        case "new":
          state.products = state.products.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
          break;
        case "high":
          state.products = state.products.sort((a, b) => +b.price - +a.price);
          break;
        case "low":
          state.products = state.products.sort((a, b) => +a.price - +b.price);
          break;
        default:
          break;
      }
    },
  },
});

export const { brandFilter, clearFilters, modelFilter, sort } =
  products.actions;

export default products.reducer;
