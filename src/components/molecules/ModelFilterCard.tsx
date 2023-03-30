import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useSelector } from "react-redux";

const ModelFilterCard = () => {
  const models: string[] = useSelector((state: any) => state.products.models);
  return (
    <>
      <div className="filter-label mt-3">Models</div>
      <div className="filter-card">
        <FormGroup>
          {models.map((model, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox />}
              label={model}
            />
          ))}
        </FormGroup>
      </div>
    </>
  );
};

export default ModelFilterCard;
