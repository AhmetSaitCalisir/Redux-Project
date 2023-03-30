import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useSelector } from "react-redux";

const BrandFilterCard = () => {
  const brands: string[] = useSelector((state: any) => state.products.brands);
  return (
    <>
      <div className="filter-label mt-3">Brands</div>
      <div className="filter-card">
        <FormGroup>
          {brands.map((brand, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox />}
              label={brand}
            />
          ))}
        </FormGroup>
      </div>
    </>
  );
};

export default BrandFilterCard;
