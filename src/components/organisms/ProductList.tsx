import { IProduct } from "../../models/product";
import ProductCard from "../molecules/ProductCard";

type IProps = {
  products: IProduct[];
};

const ProductList = (props: IProps) => {
  return (
    <div className="product-list">
      {props.products.map((product, index) => (
        <div key={index} className="product-item">
          <ProductCard product={product} key={index} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
