import { useNavigate } from "react-router-dom";
import { IProduct } from "../../models/product";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../stores/basket";

type IProps = {
  product: IProduct;
};
const ProductCard = (props: IProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="product-card" onClick={() => navigate(props.product.id)}>
      <img className="card-image" src={props.product.image} />
      <p className="card-price">{props.product.price}₺</p>
      <p className="card-name">{props.product.name}</p>
      <div className="d-grid gap-2">
        <button
          className="btn btn-primary card-button"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addToBasket(props.product));
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
