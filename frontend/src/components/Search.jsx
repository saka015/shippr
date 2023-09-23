import React from "react";

import { BsSearch } from "react-icons/bs";


const Search = () => {
  return (
    <>
      <div className="search-box flex">
              <BsSearch className="mt-[10px] ml-2" /> 
              <input className="search-inp w-full text-xs p-2" type="text" placeholder="Search for products,brands and more" />
      </div>
    </>
  );
};

export default Search;
