import React from "react";
import { DebounceInput } from "react-debounce-input";

function SearchBox({ input, setInput }) {
  return (
    <div>
      <DebounceInput
        type="text"
        name="search box"
        placeholder="Search Box"
        className="searchBox"
        value={input}
        minLength={2}
        debounceTimeout={300}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
