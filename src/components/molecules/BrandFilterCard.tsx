import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../stores/products";

const BrandFilterCard = () => {
  const allBrands: string[] = useSelector(
    (state: any) => state.products.brands
  );
  const dispatch = useDispatch();

  const [checked, setChecked] = useState<string[]>([]);
  const [searchText, setSearchText] = useState("");
  const [brands, setBrands] = useState(allBrands);

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

  const handleSearch = (value: string) => {
    setSearchText(value);
    if (value.length > 0) {
      setBrands(() =>
        allBrands.filter((brand) =>
          brand.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setBrands(allBrands);
    }
  };

  return (
    <>
      <div className="filter-label mt-3">Brands</div>
      <div className="filter-card">
        <input
          className="form-control search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <FormGroup>
          {checked.map((brand, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox checked={checked.includes(brand)} />}
              label={brand}
              onChange={(e, c) => handleCheckboxOnChange(brand, c)}
            />
          ))}
          {checked.length > 0 && <hr />}
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
