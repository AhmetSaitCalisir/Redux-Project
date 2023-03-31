import { BiBasket } from "react-icons/bi";
import { IBasket } from "../../models/basket";
import { useSelector } from "react-redux";

const NavbarBasket = () => {
  const formatter = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  });
  const basket: IBasket[] = useSelector((state: any) => state.basket.basket);
  const total: number = basket.reduce((accumulator, basketProduct) => {
    return accumulator + basketProduct.price * basketProduct.quantity;
  }, 0);
  return (
    <div style={{ flex: 1 }} className="flex-center mx-2">
      <BiBasket /> {formatter.format(total)}
    </div>
  );
};

export default NavbarBasket;
