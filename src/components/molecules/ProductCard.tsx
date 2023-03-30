import { IProduct } from "../../models/product";

type IProps = {
  product: IProduct;
};
const ProductCard = (props: IProps) => {
  return (
    <div className="product-card">
      <img className="card-image" src={props.product.image} />
      <p className="card-price">{props.product.price}₺</p>
      <p className="card-name">{props.product.name}</p>
      <div className="d-grid gap-2">
        <button className="btn btn-primary card-button" type="button">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
