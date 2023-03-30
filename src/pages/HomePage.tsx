import BrandFilterCard from "../components/molecules/BrandFilterCard";
import ModelFilterCard from "../components/molecules/ModelFilterCard";
import SortCard from "../components/molecules/SortCard";

const HomePage = () => {
  return (
    <div className="row">
      <div className="col-2">
        <SortCard />
        <BrandFilterCard />
        <ModelFilterCard />
      </div>
      <div className="col">ALL CARDS</div>
      <div className="col-2 ">BUSKET</div>
    </div>
  );
};

export default HomePage;
