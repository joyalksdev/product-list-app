import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import ProductCard from "./components/ProductCard";
import { products } from "./data/productData";
import Footer from "./components/Footer";

const App = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("none");

  // Filter Products
  const filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => (category === "All" ? true : p.category === category));

  // Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "low-high") return a.price - b.price;
    if (sort === "high-low") return b.price - a.price;
    if (sort === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div>
      {/* Navbar Called */}
      <Navbar />

      <div className="my-4">
        <div className="sm:flex items-center justify-between mx-20 gap-10 mb-4">
          <FilterBar
            category={category}
            setCategory={setCategory}
            sort={sort}
            setSort={setSort}
          />
          <SearchBar search={search} setSearch={setSearch} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {sortedProducts.map((item) => (
            <div key={item.id}>
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
      

    </div>
  );
};

export default App;
