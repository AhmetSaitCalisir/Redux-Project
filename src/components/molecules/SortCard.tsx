import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const SortCard = () => {
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
            />
            <FormControlLabel
              value="new"
              control={<Radio />}
              label="New to old"
            />
            <FormControlLabel
              value="high"
              control={<Radio />}
              label="Price high to low"
            />
            <FormControlLabel
              value="low"
              control={<Radio />}
              label="Price low to high"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </>
  );
};

export default SortCard;
