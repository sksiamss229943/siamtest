import React, { useState } from "react";
import Search_result from "./Search_result";

function Search() {
  const [picName, setPicName] = useState(null);
  return (
    <>
      <br />
      <input
        style={{ width: "50em" }}
        type="text"
        className="form-control px-3 mx-auto my-4 shadow-sm"
        placeholder="Search your photos"
        value={picName}
        onChange={(e) => setPicName(e.target.value)}
      />
      <Search_result name={picName} />
    </>
  );
}

export default Search;
