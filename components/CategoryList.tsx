// components/CategoryList.tsx
import React from "react";
import BestSeller from "./BestSellers";
import BestSellers from "./BestSellers";

type Category = {
  id: number;
  name: string;
};

const categories: Category[] = [
  { id: 1, name: "Category 1" },
  { id: 2, name: "Category 2" },
  { id: 3, name: "Category 3" },
  { id: 4, name: "Category 4" },
  { id: 5, name: "Category 5" },
  { id: 6, name: "Category 6" },
  { id: 7, name: "Category 7" },
];

const CategoryList: React.FC = () => {
  return (
    <div className="sticky top-0 z-10 ">
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 ">
      <h3 className="text-lg font-semibold mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li
            key={category.id}
            className="text-gray-700 hover:text-gray-900 cursor-pointer"
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div><div className="p-4"></div>
    <BestSellers />
    </div>
  );
};

export default CategoryList;

