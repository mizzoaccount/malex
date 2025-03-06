// components/ProductList.tsx
/*import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Potassium Hydroxide - LR", price: 15, image: "/potassium.jpg" },
  { id: 2, name: "Sodium Chloride - LR", price: 8, image: "/sodium.jpg" },
  { id: 3, name: "Silver Nitrate - Extra Pure", price: 25, image: "/silver.jpg" },
];

const ProductList: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;*/
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Product {
  id: string;
  name: string;
  image?: string;
  price: number;
  stock: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://malex-backend.onrender.com/api/products");
        const data = await response.json();
        const formattedData = data.map((product: any) => ({
          id: product._id,
          name: product.name,
          image: product.image,
          price: product.price,
          stock: product.stock,
        }));
        setProducts(formattedData);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    

    fetchProducts();
  }, []);
  return (
    <div className="flex justify-center p-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 
        gap-3 sm:gap-4 md:gap-6 w-full max-w-7xl mx-auto">
        
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-3 w-full max-w-xs mx-auto">
            <div className="rounded-lg overflow-hidden">
              <img
                src={product.image || "/assets/images/no-images.png"}
                alt={product.name}
                className="w-full h-48 sm:h-52 md:h-64 object-cover"
              />
            </div>
            <div className="mt-2 sm:mt-3">
              <h3 className="text-sm text-gray-600 font-bold truncate">{product.name}</h3>
              <p className="text-green-600 font-semibold">Ksh: {product.price}</p>
              <p className="text-gray-500 text-sm">Stock: {product.stock}</p>
            </div>
            <button
              onClick={() => router.push(`/product/${product.id}`)}
              className="w-full mt-2 sm:mt-3 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
  
  /*return (
    <div className="flex justify-center p-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 w-full max-w-7xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-3 w-full max-w-xs mx-auto">
            <div className="rounded-lg overflow-hidden">
              <img
                src={product.image || "/assets/images/no-images.png"}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="mt-3">
              <h3 className="text-sm text-gray-600 font-bold truncate">{product.name}</h3>
              <p className="text-green-600 font-semibold">Ksh: {product.price}</p>
              <p className="text-gray-500 text-sm">Stock: {product.stock}</p>
            </div>
            <button
              onClick={() => router.push(`/product/${product.id}`)}
              className="w-full mt-3 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );*/
};

export default ProductList;
