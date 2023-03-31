import { useDispatch } from "react-redux";
import { IBasket } from "../../models/basket";
import { changeQuantity, deleteFromBasket } from "../../stores/basket";

type IProps = {
  basketProduct: IBasket;
};

const BasketCardItem = (props: IProps) => {
  const dispatch = useDispatch();
  const formatter = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  });

  const handleIncrease = () => {
    dispatch(
      changeQuantity({
        id: props.basketProduct.productId,
        quantity: props.basketProduct.quantity + 1,
      })
    );
  };

  const handleDecrease = () => {
    if (props.basketProduct.quantity <= 1) {
      dispatch(deleteFromBasket(props.basketProduct.productId));
      return;
    }
    dispatch(
      changeQuantity({
        id: props.basketProduct.productId,
        quantity: props.basketProduct.quantity - 1,
      })
    );
  };

  return (
    <div className="row">
      <div className="col">
        <p className="basketcard-name">{props.basketProduct.productName}</p>
        <span className="basketcard-price">
          {formatter.format(props.basketProduct.price)}
        </span>
      </div>
      <div className="col basketCard-quantityContainer">
        <button className="basketcard-button" onClick={handleDecrease}>
          -
        </button>
        <div className="basketcard-quantity">
          {props.basketProduct.quantity}
        </div>
        <button className="basketcard-button" onClick={handleIncrease}>
          +
        </button>
      </div>
    </div>
  );
};

export default BasketCardItem;
