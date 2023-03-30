import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../stores/products";

const BrandFilterCard = () => {
  const brands: string[] = useSelector((state: any) => state.products.brands);
  const dispatch = useDispatch();

  const [checked, setChecked] = useState<string[]>([]);

  const handleCheckboxOnChange = (brand: string, checked: boolean) => {
    if (checked) {
      setChecked((previous) => [...previous, brand]);
      return;
    } else {
      setChecked((previous) => previous.filter((b) => b !== brand));
    }
  };

  useEffect(() => {
    dispatch(filter({ brandFilters: checked }));
    return () => {};
  }, [checked]);

  return (
    <>
      <div className="filter-label mt-3">Brands</div>
      <div className="filter-card">
        <FormGroup>
          {brands.map((brand, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox checked={checked.includes(brand)} />}
              label={brand}
              onChange={(e, c) => handleCheckboxOnChange(brand, c)}
            />
          ))}
        </FormGroup>
      </div>
    </>
  );
};

export default BrandFilterCard;
