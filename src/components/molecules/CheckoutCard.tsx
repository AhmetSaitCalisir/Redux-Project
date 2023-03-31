import { IBasket } from "../../models/basket";
import { useDispatch, useSelector } from "react-redux";
import { checkout } from "../../stores/basket";

const CheckoutCard = () => {
  const dispatch = useDispatch();
  const basket: IBasket[] = useSelector((state: any) => state.basket.basket);
  const total: number = basket.reduce((accumulator, basketProduct) => {
    return accumulator + basketProduct.price * basketProduct.quantity;
  }, 0);
  const formatter = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  });
  return (
    <div className="basket-card">
      <p>
        Total Price:{" "}
        <span style={{ color: "#2a59fe" }}>{formatter.format(total)}</span>
      </p>
      <div className="d-grid gap-2">
        <button
          className="btn btn-primary card-button"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(checkout());
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CheckoutCard;
