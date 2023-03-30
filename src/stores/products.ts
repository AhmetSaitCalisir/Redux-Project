import { productService } from "../services/product.service";
import { createSlice } from "@reduxjs/toolkit";

const productsData = await productService.getAll();

const initialFilters: string[] = [];

const products = createSlice({
  name: "products",
  initialState: {
    products: productsData.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    ),
    brands: [...new Set(productsData.map((product) => product.brand))].sort(),
    models: [...new Set(productsData.map((product) => product.model))].sort(),
    brandFilters: initialFilters,
    modelFilters: initialFilters,
  },
  reducers: {
    clearFilters: (state) => {
      state.products = productsData;
      state.models = [...new Set(productsData.map((product) => product.model))];
    },
    filter: (state, action) => {
      console.log(action.payload);
      state.brandFilters =
        action.payload.brandFilters != undefined
          ? action.payload.brandFilters
          : state.brandFilters;

      state.modelFilters =
        action.payload.modelFilters != undefined
          ? action.payload.modelFilters
          : state.modelFilters;

      state.products = productsData.filter((product) => {
        let filtered = true;
        if (state.brandFilters.length > 0) {
          filtered = filtered && state.brandFilters.includes(product.brand);
        }
        if (state.modelFilters.length > 0) {
          filtered = filtered && state.modelFilters.includes(product.model);
        }
        return filtered;
      });
      const brandFiltered = productsData.filter((product) => {
        let filtered = true;
        if (state.brandFilters.length > 0) {
          filtered = filtered && state.brandFilters.includes(product.brand);
        }
        return filtered;
      });
      state.models = [
        ...new Set(brandFiltered.map((product) => product.model)),
      ].sort();
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

export const { clearFilters, filter, sort } = products.actions;

export default products.reducer;
