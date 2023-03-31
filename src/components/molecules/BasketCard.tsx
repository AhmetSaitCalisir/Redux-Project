import { IBasket } from "../../models/basket";
import { useSelector } from "react-redux";
import BasketCardItem from "./BasketCardItem";

const BasketCard = () => {
  const basket: IBasket[] = useSelector((state: any) => state.basket.basket);
  return (
    <div className="basket-card">
      {basket.map((product, index) => (
        <BasketCardItem basketProduct={product} key={index} />
      ))}
    </div>
  );
};

export default BasketCard;
