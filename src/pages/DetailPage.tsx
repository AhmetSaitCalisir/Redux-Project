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

  return <div>Detail Page of {id}</div>;
};

export default DetailPage;
