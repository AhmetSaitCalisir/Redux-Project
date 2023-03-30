import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IProduct } from "../models/product";
import { productService } from "../services/product.service";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<IProduct>({
    brand: "",
    createdAt: "",
    description: "",
    id: "",
    image: "",
    model: "",
    name: "",
    price: "",
  });

  useEffect(() => {
    id &&
      productService
        .get(id)
        .then((productData) => {
          if (!productData) {
            alert("Error While Getting Product");
            navigate("/");
          }
          setProduct(productData);
        })
        .catch(() => {
          alert("Error While Getting Product");
          navigate("/");
        });

    return () => {};
  }, []);

  return (
    <div className="detail-card">
      <div className="row">
        <div className="col">
          <img src={product.image} className="detail-img" />
        </div>
        <div className="col">
          <h1>{product.name}</h1>
          <h4 className="detail-price">{product.price}₺</h4>
          <div className="d-grid gap-2">
            <button
              className="btn btn-primary detail-button"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Add to Cart
            </button>
          </div>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
