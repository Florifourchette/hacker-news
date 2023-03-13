import React, { useRef } from "react";

const SearchBar = ({ query, setQuery }) => {
  const queryValue = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(queryValue.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="search" ref={queryValue} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchBar;
