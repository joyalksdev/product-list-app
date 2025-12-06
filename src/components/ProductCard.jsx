import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="p-6">
      <div>
        <div className="bg-white card rounded-xl shadow-md hover:shadow-lg transition overflow-hidden border border-gray-200">
          <div className="h-56 overflow-hidden">
            <img
              className="w-full h-full object-cover hover:scale-105 transition"
              src={item.image || "https://placehold.co/300"}
              alt={item.title}
            />
          </div>

          <div className="px-4 pt-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">{item.name}</h2>

            <span className="text-gray-700 font-medium">${item.price}</span>
          </div>

          <span className="text-md px-4 font-medium text-amber-800">
            Rating: {item.rating}
          </span>

          <p className="px-4 mt-2 text-sm text-gray-600">
            {item.description}
          </p>

          <div className="px-4 py-4">
            <button onClick={()=>console.log(`"PRODUCT ADDED TO CART" \nItem name: ${item.name} \n price: $${item.price}`)} className="w-full bg-stone-900 text-white py-2 rounded-lg hover:bg-stone-700 transition">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
