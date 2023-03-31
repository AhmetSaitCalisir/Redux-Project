import { useState } from "react";
import { useDispatch } from "react-redux";
import { filter } from "../../stores/products";

const SearchInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  return (
    <input
      className="form-control search-input"
      type="search"
      placeholder="Search"
      aria-label="Search"
      value={text}
      onChange={(e) => {
        setText(e.currentTarget.value);
        dispatch(filter({ searchFilter: e.currentTarget.value }));
      }}
    />
  );
};

export default SearchInput;
