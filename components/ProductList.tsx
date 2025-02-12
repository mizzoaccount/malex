// components/ProductList.tsx
import React from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    category: "Category 1",
    price: "$20.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    category: "Category 2",
    price: "$35.50",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    category: "Category 3",
    price: "$50.00",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Product 4",
    category: "Category 1",
    price: "$19.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Product 5",
    category: "Category 2",
    price: "$15.00",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Product 6",
    category: "Category 3",
    price: "$80.75",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Product 7",
    category: "Category 1",
    price: "$45.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Product 8",
    category: "Category 2",
    price: "$22.25",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    name: "Product 9",
    category: "Category 3",
    price: "$60.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    name: "Product 10",
    category: "Category 1",
    price: "$99.00",
    image: "https://via.placeholder.com/150",
  },
];

const ProductList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col items-center"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{product.category}</p>
          <p className="text-xl font-bold text-gray-800">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
