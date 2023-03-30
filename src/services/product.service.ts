import { IProduct } from "./../models/product";
import axios from "axios";

export const productService = { getAll, get };

function getAll(): Promise<IProduct[]> {
  return axios
    .get(import.meta.env.VITE_MOCK_API)
    .then((response) => response.data);
}

function get(id: string): Promise<IProduct> {
  return axios
    .get(`${import.meta.env.VITE_MOCK_API}/${id}`)
    .then((response) => response.data);
}
