import { IProduct } from "./../models/product";
import axios from "axios";

export const productService = { getAll };

function getAll(): Promise<IProduct[]> {
  return axios
    .get(import.meta.env.VITE_MOCK_API)
    .then((response) => response.data);
}
