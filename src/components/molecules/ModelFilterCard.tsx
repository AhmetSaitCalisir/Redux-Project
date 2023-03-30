import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../stores/products";

const ModelFilterCard = () => {
  const models: string[] = useSelector((state: any) => state.products.models);
  const dispatch = useDispatch();

  const [checked, setChecked] = useState<string[]>([]);

  const handleCheckboxOnChange = (model: string, checked: boolean) => {
    if (checked) {
      setChecked((previous) => [...previous, model]);
      return;
    } else {
      setChecked((previous) => previous.filter((b) => b !== model));
    }
  };

  useEffect(() => {
    dispatch(filter({ modelFilters: checked }));
    return () => {};
  }, [checked]);
  return (
    <>
      <div className="filter-label mt-3">Models</div>
      <div className="filter-card">
        <FormGroup>
          {checked.map((model, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox checked={checked.includes(model)} />}
              label={model}
              onChange={(e, c) => handleCheckboxOnChange(model, c)}
            />
          ))}
          {checked.length > 0 && <hr />}
          {models.map((model, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox checked={checked.includes(model)} />}
              label={model}
              onChange={(e, c) => handleCheckboxOnChange(model, c)}
            />
          ))}
        </FormGroup>
      </div>
    </>
  );
};

export default ModelFilterCard;
