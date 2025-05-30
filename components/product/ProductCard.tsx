

/*import { motion } from "framer-motion";
import { ShoppingBag, Heart, Eye, Star } from "lucide-react";
import { useWishlistStore } from "@/stores/wishlistStore";


interface ProductCardProps {
  product: {
    id: string;
    mainCategory: string;
    subCategory: string;
    details: Array<{ name: string; value: string }>;
    specifications: Array<{ name: string; value: string }>;
    batchNumber: string;
    netContent: string;
    notes: string;
    certifications: string[];
    images: string[];
    createdAt: string;
  };
  onQuickView: () => void;
  onAddToCart: () => void;
  animationDelay?: number;
}

const ProductCard = ({ product, onQuickView, onAddToCart, animationDelay = 0 }: ProductCardProps) => {
  const { items, addItem, removeItem } = useWishlistStore();
  const isWishlisted = items.some(item => item.id === product.id);
  
  const toggleWishlist = () => {
    if (isWishlisted) {
      removeItem(product.id);
    } else {
      addItem({
        id: product.id,
        name: product.details.find(d => d.name === "Name")?.value || "Chemical Product",
        designer: product.details.find(d => d.name === "Designer")?.value || "Unknown Designer",
        price: 0, // Chemical products might not have price in details
        image: product.images[0],
      });
    }
  };

  const mainDetail = product.details.find(d => d.name === "Name") || product.details[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay }}
      className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
    
      <button
        onClick={toggleWishlist}
        className={`absolute top-4 right-4 z-10 p-2 rounded-full ${isWishlisted ? 'text-red-500' : 'text-gray-400 hover:text-red-500'} bg-white/80 backdrop-blur-sm`}
      >
        <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
      </button>

   
      <div className="aspect-square bg-gray-100 relative overflow-hidden">
        <img
          src={product.images[0] || "https://via.placeholder.com/300"}
          alt={mainDetail?.value}
          className="w-full h-full object-contain p-4"
        />
        
        
        <button
          onClick={onQuickView}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20"
        >
          <div className="bg-white p-3 rounded-full text-gray-800 flex items-center gap-2">
            <Eye size={18} />
            <span className="text-sm font-medium">Quick View</span>
          </div>
        </button>
      </div>

      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-gray-900 line-clamp-1">
              {mainDetail?.value}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {product.mainCategory} • {product.subCategory}
            </p>
          </div>
        </div>

     
        <div className="mt-2 flex gap-2 text-xs">
          <span className="bg-gray-100 px-2 py-1 rounded">
            Batch: {product.batchNumber}
          </span>
          <span className="bg-gray-100 px-2 py-1 rounded">
            Net: {product.netContent}
          </span>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
          {product.details.slice(0, 2).map((detail, index) => (
            <div key={index} className="truncate">
              <p className="text-gray-500">{detail.name}</p>
              <p className="font-medium truncate">{detail.value}</p>
            </div>
          ))}
        </div>

  
        <button
          onClick={onAddToCart}
          className="mt-4 w-full py-2 bg-[#82cee4] hover:bg-[#62aee4] text-black font-medium rounded-md flex items-center justify-center gap-2 transition-colors"
        >
          <ShoppingBag size={16} />
          Request Quote
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;*/
"use client";
import { motion } from "framer-motion";
import { ShoppingBag, Heart, Eye, Star } from "lucide-react";
import { useWishlistStore } from "@/stores/wishlistStore";

interface ProductCardProps {
  product: {
    id: string;
    mainCategory: string;
    subCategory: string;
    details: Array<{ name: string; value: string }>;
    specifications: Array<{ name: string; value: string }>;
    batchNumber: string;
    netContent: string;
    notes: string;
    certifications: string[];
    images: string[];
    createdAt: string;
  };
  onQuickView: () => void;
  onAddToCart: () => void;
  animationDelay?: number;
}

const ProductCard = ({ product, onQuickView, onAddToCart, animationDelay = 0 }: ProductCardProps) => {
  const { items, addItem, removeItem } = useWishlistStore();
  const isWishlisted = items.some(item => item.id === product.id);
  
  const toggleWishlist = () => {
    if (isWishlisted) {
      removeItem(product.id);
    } else {
      addItem({
        id: product.id,
        name: product.details.find(d => d.name === "Name")?.value || "Chemical Product",
        designer: product.details.find(d => d.name === "Designer")?.value || "Unknown Designer",
        price: 0,
        image: product.images[0],
      });
    }
  };

  const mainDetail = product.details.find(d => d.name === "Name") || product.details[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay }}
      className="group relative bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
      {/* Wishlist button - smaller on mobile */}
      <button
        onClick={toggleWishlist}
        className={`absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-1 sm:p-2 rounded-full ${isWishlisted ? 'text-red-500' : 'text-gray-400 hover:text-red-500'} bg-white/80 backdrop-blur-sm`}
      >
        <Heart size={16} className="sm:w-5 sm:h-5" fill={isWishlisted ? "currentColor" : "none"} />
      </button>

      {/* Product image */}
      <div className="aspect-square bg-gray-100 relative overflow-hidden">
        <img
          src={product.images[0] || "https://via.placeholder.com/300"}
          alt={mainDetail?.value}
          className="w-full h-full object-contain p-2 sm:p-4"
        />
        
        {/* Quick view button - simplified on mobile */}
        <button
          onClick={onQuickView}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20"
        >
          <div className="bg-white p-2 sm:p-3 rounded-full text-gray-800 flex items-center gap-1 sm:gap-2">
            <Eye size={14} className="sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-medium">View</span>
          </div>
        </button>
      </div>

      {/* Product details */}
      <div className="p-2 sm:p-4">
        <div className="flex justify-between items-start">
          <div className="w-full">
            <h3 className="font-medium text-gray-900 text-sm sm:text-base line-clamp-1">
              {mainDetail?.value}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-1">
              {product.mainCategory} • {product.subCategory}
            </p>
          </div>
        </div>

        {/* Batch and Net Content - smaller on mobile */}
        <div className="mt-1 sm:mt-2 flex gap-1 sm:gap-2 text-xs">
          <span className="bg-gray-100 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-xs">
            Batch: <span className="font-medium text-gray-600">{product.batchNumber}</span>
          </span>
          <span className="bg-gray-100 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-xs">
            Net: <span className="font-medium text-gray-600">{product.netContent}</span>
          </span>
        </div>

        {/* Additional details - single column on xs, two columns on sm+ */}
        <div className="mt-2 sm:mt-3 grid grid-cols-1 xs:grid-cols-2 gap-1 sm:gap-2 text-xs sm:text-sm">
          {product.details.slice(0, 2).map((detail, index) => (
            <div key={index} className="truncate">
              <p className="text-gray-700 text-xs sm:text-sm">{detail.name}</p>
              <p className="font-medium truncate text-xs sm:text-sm text-gray-700">{detail.value}</p>
            </div>
          ))}
        </div>

        {/* Add to cart button - smaller on mobile */}
        <button
          onClick={onAddToCart}
          className="mt-2 sm:mt-4 w-full py-1.5 sm:py-2 bg-[#82cee4] hover:bg-[#62aee4] text-black font-medium rounded sm:rounded-md flex items-center justify-center gap-1 sm:gap-2 transition-colors text-xs sm:text-sm"
        >
          <ShoppingBag size={14} className="sm:w-4 sm:h-4" />
          <span>Request Quote</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;