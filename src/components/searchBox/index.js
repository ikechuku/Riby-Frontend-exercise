import React from "react";

const SearchBox = ({ searchWord, handleChange, handleClick }) => {
  return (
    <div className="container mx-auto my-20 w-full rounded-full justify-between bg-white shadow-xl">
      <div className="flex mx-auto w-full rounded-full text-black">
        <input
          id="searchfield"
          type="search"
          placeholder="Search..."
          value={searchWord}
          onChange={handleChange}
          autoFocus="autofocus"
          className="w-full text-grey-800 py-4 pl-10  rounded-lg transition focus:outline-none focus:border-transparent p-2 appearance-none leading-normal text-xl lg:text-2xl"
        />
        <button
          className="w-1/5 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-sm shadow-lg hover:shadow-xl transition duration-200"
          type="submit"
          onClick={() => {
            handleClick();
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
