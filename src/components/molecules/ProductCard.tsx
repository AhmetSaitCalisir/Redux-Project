import { useNavigate } from "react-router-dom";
import { IProduct } from "../../models/product";

type IProps = {
  product: IProduct;
};
const ProductCard = (props: IProps) => {
  const navigate = useNavigate();
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
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
