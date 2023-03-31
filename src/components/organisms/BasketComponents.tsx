import { useSelector } from "react-redux";
import { IBasket } from "../../models/basket";
import BasketCard from "../molecules/BasketCard";
import CheckoutCard from "../molecules/CheckoutCard";

const BasketComponents = () => {
  const basket: IBasket[] = useSelector((state: any) => state.basket.basket);
  return (
    <div style={{ display: basket.length > 0 ? "block" : "none" }}>
      <BasketCard />
      <CheckoutCard />
    </div>
  );
};

export default BasketComponents;
