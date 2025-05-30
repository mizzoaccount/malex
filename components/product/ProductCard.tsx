// components/ProductCard.tsx
/*"use client";
import { motion } from "framer-motion";
import { ShoppingBag, Heart, Eye, Star } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    designer: string;
    price: number;
    originalPrice?: number;
    images: string[];
    rating: number;
    isNew: boolean;
    stock: number;
  };
  theme?: {
    primary: string;
    hover: string;
    text: string;
  };
  onQuickView?: () => void;
  onAddToCart?: () => void;
  animationDelay?: number;
}

export const ProductCard = ({
  product,
  theme = { primary: "#82cee4", hover: "#62aee4", text: "black" },
  onQuickView = () => {},
  onAddToCart = () => {},
  animationDelay = 0,
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: animationDelay }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-[#82cee4]/50 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      {/* Product Image *
      <div className="relative h-80 overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Overlay Button *
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onAddToCart}
            className={`w-full bg-[${theme.primary}] hover:bg-[${theme.hover}] text-${theme.text} font-bold py-3 rounded-full flex items-center justify-center gap-2 transition-colors`}
          >
            <ShoppingBag size={16} /> Add to Bag
          </motion.button>
        </div>*

        {/* Badges *
        <div className="absolute top-4 left-4 flex gap-2">
          {product.isNew && (
            <span className={`bg-[${theme.primary}] text-black text-xs font-bold px-3 py-1 rounded-full`}>
              NEW
            </span>
          )}
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full border border-gray-200">
              -{Math.round((1 - product.price / product.originalPrice!) * 100)}%
            </span>
          )}
        </div>

        {/* Wishlist Button *
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-[#82cee4] hover:text-white transition-colors shadow-sm"
        >
          <Heart
            size={18}
            className="text-gray-800 group-hover:text-white"
            fill={isWishlisted ? "currentColor" : "none"}
          />
        </button>
      </div>

      {/* Product Info *
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
            <p className="text-gray-500 text-sm">{product.designer}</p>
          </div>
          <div className="text-right">
            <p className={`text-[${theme.primary}] font-bold`}>
              Ksh {product.price.toLocaleString()}
            </p>
            {product.originalPrice && product.originalPrice > product.price && (
              <p className="text-gray-400 text-sm line-through">
                Ksh {product.originalPrice.toLocaleString()}
              </p>
            )}
          </div>
        </div>

        {/* Rating *
        <div className="mt-3 flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating)
                  ? `text-[${theme.primary}] fill-[${theme.primary}]`
                  : "text-gray-300"
                }
              />
            ))}
          </div>
          <span className="text-gray-500 text-sm ml-1">({product.rating.toFixed(1)})</span>
        </div>

        {/* Quick View Button *
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={onQuickView}
          className="mt-4 w-full border border-gray-200 hover:border-[#82cee4] text-gray-700 hover:text-[#82cee4] py-2 rounded-full flex items-center justify-center gap-2 transition-colors"
        >
          <Eye size={14} /> Quick View
        </motion.button>
      </div>
    </motion.div>
  );
};*/

// components/ProductCard.tsx


/*"use client";
import { motion } from "framer-motion";
import { ShoppingBag, Heart, Eye, Star } from "lucide-react";
import { useState } from "react";
import { useWishlistStore } from "@/stores/wishlistStore";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    designer: string;
    price: number;
    originalPrice?: number;
    images: string[];
    rating: number;
    isNew: boolean;
    stock: number;
  };
  theme?: {
    primary: string;
    hover: string;
    text: string;
  };
  onQuickView?: () => void;
  onAddToCart?: () => void;
  animationDelay?: number;
}

export const ProductCard = ({
  product,
  theme = { primary: "#82cee4", hover: "#62aee4", text: "black" },
  onQuickView = () => {},
  onAddToCart = () => {},
  animationDelay = 0,
}: ProductCardProps) => {
  const { items, addItem, removeItem } = useWishlistStore();
  const isWishlisted = items.some((item) => item.id === product.id);

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeItem(product.id);
    } else {
      addItem({
        id: product.id,
        name: product.name,
        designer: product.designer,
        price: product.price,
        image: product.images[0],
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: animationDelay }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-[#82cee4]/50 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
   
      <div className="relative h-80 overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* 
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onAddToCart}
            className={`w-full bg-[${theme.primary}] hover:bg-[${theme.hover}] text-${theme.text} font-bold py-3 rounded-full flex items-center justify-center gap-2 transition-colors`}
          >
            <ShoppingBag size={16} /> Add to Bag
          </motion.button>
        </div>*

        <div className="absolute top-4 left-4 flex gap-2">
          {product.isNew && (
            <span className={`bg-[${theme.primary}] text-black text-xs font-bold px-3 py-1 rounded-full`}>
              NEW
            </span>
          )}
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full border border-gray-200">
              -{Math.round((1 - product.price / product.originalPrice!) * 100)}%
            </span>
          )}
        </div>

        <button
          onClick={toggleWishlist}
          className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-[#82cee4] hover:text-white transition-colors shadow-sm"
        >
          <Heart
            size={18}
            className="text-gray-800 group-hover:text-white"
            fill={isWishlisted ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
            <p className="text-gray-500 text-sm">{product.designer}</p>
          </div>
          <div className="text-right">
            <p className={`text-[${theme.primary}] font-bold`}>
              Ksh {product.price.toLocaleString()}
            </p>
            {product.originalPrice && product.originalPrice > product.price && (
              <p className="text-gray-400 text-sm line-through">
                Ksh {product.originalPrice.toLocaleString()}
              </p>
            )}
          </div>
        </div>

        <div className="mt-3 flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating)
                  ? `text-[${theme.primary}] fill-[${theme.primary}]`
                  : "text-gray-300"
                }
              />
            ))}
          </div>
          <span className="text-gray-500 text-sm ml-1">({product.rating.toFixed(1)})</span>
        </div>


        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={onQuickView}
          className="mt-4 w-full border border-gray-200 hover:border-[#82cee4] text-gray-700 hover:text-[#82cee4] py-2 rounded-full flex items-center justify-center gap-2 transition-colors"
        >
          <Eye size={14} /> Quick View
        </motion.button>
      </div>
    </motion.div>
  );
};*/

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
      {/* Wishlist button */}
      <button
        onClick={toggleWishlist}
        className={`absolute top-4 right-4 z-10 p-2 rounded-full ${isWishlisted ? 'text-red-500' : 'text-gray-400 hover:text-red-500'} bg-white/80 backdrop-blur-sm`}
      >
        <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
      </button>

      {/* Product image */}
      <div className="aspect-square bg-gray-100 relative overflow-hidden">
        <img
          src={product.images[0] || "https://via.placeholder.com/300"}
          alt={mainDetail?.value}
          className="w-full h-full object-contain p-4"
        />
        
        {/* Quick view button */}
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

      {/* Product details */}
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

        {/* Batch and Net Content */}
        <div className="mt-2 flex gap-2 text-xs">
          <span className="bg-gray-100 px-2 py-1 rounded">
            Batch: {product.batchNumber}
          </span>
          <span className="bg-gray-100 px-2 py-1 rounded">
            Net: {product.netContent}
          </span>
        </div>

        {/* Additional details */}
        <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
          {product.details.slice(0, 2).map((detail, index) => (
            <div key={index} className="truncate">
              <p className="text-gray-500">{detail.name}</p>
              <p className="font-medium truncate">{detail.value}</p>
            </div>
          ))}
        </div>

        {/* Add to cart button */}
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

export default ProductCard;