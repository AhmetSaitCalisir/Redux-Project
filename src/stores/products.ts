import { productService } from "../services/product.service";
import { createSlice } from "@reduxjs/toolkit";

const productsData = await productService.getAll();

const products = createSlice({
  name: "products",
  initialState: {
    products: productsData,
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
  },
});

export const { brandFilter, clearFilters, modelFilter } = products.actions;

export default products.reducer;
