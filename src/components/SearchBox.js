import React from "react";

function SearchBox() {
  const [input, setInput] = React.useState("");
  return (
    <input
      type="text"
      name="search box"
      placeholder="Search Box"
      className="searchBox"
      value="input"
      onChangeText={(e) => setInput(e.target.value)}
    />
  );
}

export default SearchBox;
