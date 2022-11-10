import React, { useState } from "react";
import Gallery from "./components/Gallery";
import SearchBox from "./components/SearchBox";

function App() {
  const [input, setInput] = React.useState("");
  return (
    <center>
      <h1>Search your Photos</h1>
      <SearchBox input={input} setInput={setInput} />
      <Gallery query={input} />
    </center>
  );
}

export default App;
