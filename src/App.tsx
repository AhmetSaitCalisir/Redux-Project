import { useEffect, useState } from "react";
import { IProduct } from "./models/product";
import { productService } from "./services/product.service";

const App = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    productService.getAll().then((data) => {
      console.log(data.data);
      setProducts(data.data);
    });

    return () => {};
  }, []);

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <p>{product.name}</p>
          <p>{product.brand}</p>
          <p>{product.model}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default App;
