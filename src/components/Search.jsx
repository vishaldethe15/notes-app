import React from "react";

const Search = ({ handleSearch }) => {
  return (
    <div className="search">
      <i className="bi bi-search"></i>
      <input
        type="text"
        placeholder="search..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
