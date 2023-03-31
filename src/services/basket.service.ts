import { IBasket } from "../models/basket";

export const basketService = { get, set };

function get(): IBasket[] {
  let basketItem = localStorage.getItem("X-Basket");
  if (!basketItem) {
    localStorage.setItem("X-Basket", JSON.stringify([]));
    return [];
  }
  return JSON.parse(basketItem);
}

function set(basket: IBasket[]) {
  localStorage.setItem("X-Basket", JSON.stringify(basket));
}
