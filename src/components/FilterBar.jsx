import React from "react";

const FilterBar = ({ category, setCategory, sort, setSort }) => {
  return (
    <div className="flex gap-8 mb-3">
      {/* Category Filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className=" w-30  px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-blue-900"
      >
        <option value="All">All</option>
        <option value="Cakes">Cakes</option>
        <option value="Pastries">Pastries</option>
        <option value="Snacks">Snacks</option>
      </select>

      {/* Sorting */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className=" w-50 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-blue-900"
      >
        <option value="none">Sort</option>
        <option value="low-high">Price: Low → High</option>
        <option value="high-low">Price: High → Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default FilterBar;
