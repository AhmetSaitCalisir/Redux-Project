import { useSelector } from "react-redux";
import BrandFilterCard from "../components/molecules/BrandFilterCard";
import ModelFilterCard from "../components/molecules/ModelFilterCard";
import SortCard from "../components/molecules/SortCard";
import ProductList from "../components/organisms/ProductList";
import { IProduct } from "../models/product";

const HomePage = () => {
  const products: IProduct[] = useSelector(
    (state: any) => state.products.products
  );

  return (
    <div className="row">
      <div className="col-2">
        <SortCard />
        <BrandFilterCard />
        <ModelFilterCard />
      </div>
      <div className="col">
        <ProductList products={products} />
      </div>
      <div className="col-2 ">BUSKET</div>
    </div>
  );
};

export default HomePage;
