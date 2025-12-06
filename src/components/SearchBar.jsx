import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex items-center border-1 p-2 w-70 rounded-3xl gap-2 border-gray-300 shadow-sm focus:border-orange-200">
      {/* Search Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        className=" outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
