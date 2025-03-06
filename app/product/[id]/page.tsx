"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaCartPlus, FaHeart, FaPhone, FaWhatsapp } from "react-icons/fa";
import HeaderTwo from "@/components/HeaderTwo";
import Footer from "@/components/Footer";

interface Product {
  id: string;
  name: string;
  image?: string;
  price: number;
  stock: number;
  description?: string;
  category?: string;
  sellerPhone?: string;
}

const ProductDetail: React.FC = () => {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);

  // Extract product ID from URL
  const pathSegments = window.location.pathname.split("/");
  const id = pathSegments[pathSegments.length - 1];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/products/${id}`);
        if (!response.ok) throw new Error("Product not found");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p className="text-center text-gray-600">Loading product details...</p>;
  }

  return (
    <div>
    <HeaderTwo />
    <div className="flex flex-col min-h-screen md:flex-row items-center md:items-start p-3 max-w-4xl mx-auto mt-20 gap-6">
      {/* Left Side - Image & Product Info */}
      <div className="flex-1 flex flex-col items-center md:items-start">
  <img
    src={product.image || "/assets/images/no-images.png"}
    alt={product.name}
    className="w-[400px] h-[400px] md:w-[450px] md:h-[450px] rounded-lg shadow-md object-cover"
  />
  {/* Product Details */}
  <div className="mt-6 p-4 md:p-5 bg-white shadow-md rounded-lg text-center md:text-left border border-gray-200 w-[400px] md:w-[450px]">
    <h1 className="text-lg font-bold text-gray-900 leading-snug">{product.name}</h1>
    <p className="text-base font-medium text-gray-500 mt-1">{product.category || "Uncategorized"}</p>

    {/* Price Section */}
    <p className="mt-3 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-600">
      Ksh: {product.price}
    </p>

    {/* Description */}
    <p className="mt-3 text-gray-600 text-sm leading-relaxed">{product.description || "No description available."}</p>

    {/* Divider */}
    <div className="w-full h-[1px] bg-gray-300 my-3"></div>

    {/* Stock Info */}
    <p className={`text-sm font-semibold ${product.stock > 0 ? "text-green-600" : "text-red-500"}`}>
      {product.stock > 0 ? `In Stock: ${product.stock}` : "Out of Stock"}
    </p>
  </div>
</div>

      {/* Right Side - Action Buttons */}
      <div className="flex-1 flex flex-col space-y-4">
        {/* Cart & Wishlist in One Card */}
        <div className="p-4 bg-white shadow-md border border-gray-200 rounded-md flex justify-between items-center gap-3">
          <button className="flex items-center justify-center gap-2 px-4 py-3 border border-[#447cfe] text-[#447cfe] font-semibold rounded-md w-full transition hover:bg-[#447cfe] hover:text-white">
            <FaCartPlus className="text-xl" />
            Add to Cart
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-3 border border-red-500 text-red-500 font-semibold rounded-md w-full transition hover:bg-red-500 hover:text-white">
            <FaHeart className="text-xl" />
            Wishlist
          </button>
        </div>

        {/* Call Seller Button */}
        <div className="p-4 bg-white shadow-md border border-gray-200 rounded-md">
          <button
            className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-[#447cfe] text-[#447cfe] font-semibold rounded-md transition hover:bg-[#447cfe] hover:text-white"
            onClick={() => window.location.href = `tel:${product.sellerPhone || ""}`}
          >
            <FaPhone className="text-xl" />
            Call Malex
          </button>
        </div>

        {/* Chat on WhatsApp Button */}
        <div className="p-4 bg-white shadow-md border border-gray-200 rounded-md">
          <button
            className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-green-600 text-green-600 font-semibold rounded-md transition hover:bg-green-600 hover:text-white"
            onClick={() => window.location.href = `https://wa.me/${product.sellerPhone || ""}`}
          >
            <FaWhatsapp className="text-xl" />
            Chat on WhatsApp
          </button>
        </div>

        {/* Guidelines Card */}
        <div className="p-6 bg-gray-100 shadow-md rounded-md text-gray-700">
          <h2 className="text-lg font-semibold text-gray-900">Product Handling Guidelines</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
            <li>Store in a cool, dry place to maintain quality.</li>
            <li>Handle with care to avoid damage.</li>
            <li>Follow usage instructions for optimal performance.</li>
            <li>Keep out of reach of children if applicable.</li>
            <li>Contact the seller for any product inquiries.</li>
          </ul>
        </div>

        {/* Go Back Button */}
        <div className="p-4 bg-white shadow-md border border-gray-200 rounded-md">
          <button
            onClick={() => router.back()}
            className="w-full px-4 py-3 border border-[#447cfe] text-[#447cfe] font-semibold rounded-md transition hover:bg-[#447cfe] hover:text-white"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ProductDetail;
