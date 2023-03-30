import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { sort } from "../../stores/products";

const SortCard = () => {
  const dispatch = useDispatch();
  const handleChangeSortType = (newSort: "old" | "new" | "high" | "low") => {
    dispatch(sort(newSort));
  };

  return (
    <>
      <div className="filter-label mt-3">Sort By</div>
      <div className="filter-card">
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="old"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="old"
              control={<Radio />}
              label="Old to new"
              onChange={() => handleChangeSortType("old")}
            />
            <FormControlLabel
              value="new"
              control={<Radio />}
              label="New to old"
              onChange={() => handleChangeSortType("new")}
            />
            <FormControlLabel
              value="high"
              control={<Radio />}
              label="Price high to low"
              onChange={() => handleChangeSortType("high")}
            />
            <FormControlLabel
              value="low"
              control={<Radio />}
              label="Price low to high"
              onChange={() => handleChangeSortType("low")}
            />
          </RadioGroup>
        </FormControl>
      </div>
    </>
  );
};

export default SortCard;
