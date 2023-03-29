import axios from "axios";

export const productService = { getAll };

function getAll() {
  return axios.get(import.meta.env.VITE_MOCK_API);
}
