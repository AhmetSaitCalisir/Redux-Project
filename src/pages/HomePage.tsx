import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BrandFilterCard from "../components/molecules/BrandFilterCard";
import ModelFilterCard from "../components/molecules/ModelFilterCard";
import SortCard from "../components/molecules/SortCard";
import ProductList from "../components/organisms/ProductList";
import { IProduct } from "../models/product";

const HomePage = () => {
  const allProducts: IProduct[] = useSelector(
    (state: any) => state.products.products
  );

  const [products, setProducts] = useState<IProduct[]>([]);
  const [step, setStep] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setStep(value);
    paginate(value);
  };

  const paginate = (newStep: number) => {
    setProducts(allProducts.slice((newStep - 1) * 12, newStep * 12));
  };

  useEffect(() => {
    paginate(1);
    setStep(1);
    return () => {};
  }, [allProducts]);

  const stepCount = Math.ceil(allProducts.length / 12);

  return (
    <div className="row">
      <div className="col-2">
        <SortCard />
        <BrandFilterCard />
        <ModelFilterCard />
      </div>
      <div className="col">
        <ProductList products={products} />
        {stepCount > 1 && (
          <div className="d-flex justify-content-center">
            <Pagination count={stepCount} page={step} onChange={handleChange} />
          </div>
        )}
      </div>
      <div className="col-2 ">BUSKET</div>
    </div>
  );
};

export default HomePage;
