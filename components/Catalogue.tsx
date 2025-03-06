// components/Catalogue.tsx
import React from "react";

interface Category {
  name: string;
  products: string[];
}

const categories: Category[] = [
  {
    name: "Potassium Compounds",
    products: ["Potassium Hydroxide", "Potassium Iodide", "Potassium Nitrate"],
  },
  {
    name: "Sodium Compounds",
    products: ["Sodium Chloride", "Sodium Hydroxide", "Sodium Benzoate"],
  },
];

const Catalogue: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Product Catalogue</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{category.name}</h3>
            <ul className="mt-2">
              {category.products.map((product, idx) => (
                <li key={idx} className="text-gray-700">
                  - {product}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;

