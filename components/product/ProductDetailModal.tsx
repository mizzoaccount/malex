
/*"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Heart, X, Star, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "@/stores/cartStore";
import { useWishlistStore } from "@/stores/wishlistStore";

interface ProductDetailModalProps {
  product: {
    id: string;
    name: string;
    designer: string;
    price: number;
    originalPrice: number;
    images: string[];
    rating: number;
    isNew: boolean;
    attributes: Record<string, string>;
    stock: number;
  onClose: () => void;
}

const ProductDetailModal = ({ product, onClose }: ProductDetailModalProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const addToCart = useCartStore((state) => state.addItem);
  const { items, addItem, removeItem } = useWishlistStore();
  const isWishlisted = items.some((item) => item.id === product.id);

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const attributes = [
    { label: "Color", value: product.attributes?.color || "Navy Blue" },
    { label: "Material", value: product.attributes?.material || "100% Cotton" },
    { label: "Fit", value: product.attributes?.fit || "Regular" },
    { label: "Style", value: product.attributes?.style || "Casual" },
  ];

  const handleAddToCart = () => {
    if (!selectedSize) return;

    addToCart({
      id: product.id,
      name: product.name,
      designer: product.designer,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      stock: product.stock,
    });

    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

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

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="relative bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
         
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-white/80 rounded-full hover:bg-[#82cee4] hover:text-white transition-colors shadow-lg"
          >
            <X size={20} />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            
            <div className="relative h-[400px] lg:h-full bg-gray-100">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-contain"
              />

           
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-[#82cee4] hover:text-white transition-colors shadow-lg"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-[#82cee4] hover:text-white transition-colors shadow-lg"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {product.images.length > 1 && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(index);
                      }}
                      className={`w-12 h-12 rounded-md overflow-hidden border-2 transition-all ${selectedImage === index ? 'border-[#82cee4]' : 'border-transparent'}`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              <div className="absolute top-4 left-4 flex gap-2 z-10">
                {product.isNew && (
                  <span className="bg-[#82cee4] text-black text-xs font-bold px-3 py-1 rounded-full">
                    NEW
                  </span>
                )}
                {product.originalPrice > product.price && (
                  <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full border border-gray-200">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </span>
                )}
              </div>
            </div>

       
            <div className="p-8 overflow-y-auto">
              <div className="flex flex-col h-full">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                  <p className="text-lg text-gray-600 mt-1">{product.designer}</p>

              
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(product.rating) ? "text-[#82cee4] fill-[#82cee4]" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm">({product.rating.toFixed(1)})</span>
                    <span className="text-gray-500 text-sm ml-2">• {product.stock} in stock</span>
                  </div>
 
                  <div className="mt-6">
                    <p className="text-2xl font-bold text-[#82cee4]">Ksh {product.price.toLocaleString()}</p>
                    {product.originalPrice > product.price && (
                      <p className="text-gray-400 text-sm line-through">Ksh {product.originalPrice.toLocaleString()}</p>
                    )}
                  </div>

              
                  <p className="mt-6 text-gray-700">
                    This premium quality product features a timeless design with meticulous attention to detail. 
                    Perfect for both casual and formal occasions, it combines comfort with style.
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {attributes.map((attr, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-500">{attr.label}</p>
                        <p className="font-medium">{attr.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-2 border rounded-md text-sm font-medium transition-all ${selectedSize === size ? 'bg-[#82cee4] text-white border-[#82cee4]' : 'bg-white text-gray-900 border-gray-300 hover:border-[#82cee4]'}`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

           
                  <div className="mt-6">
                    <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
                    <div className="mt-2 flex items-center gap-4">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-2 border border-gray-300 rounded-md hover:bg-gray-100"
                        disabled={quantity <= 1}
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-2 border border-gray-300 rounded-md hover:bg-gray-100"
                        disabled={quantity >= product.stock}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleAddToCart}
                      disabled={addedToCart || !selectedSize}
                      className={`flex-1 py-3 px-6 rounded-full font-bold flex items-center justify-center gap-2 transition-colors ${addedToCart ? 'bg-green-500 text-white' : !selectedSize ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-[#82cee4] hover:bg-[#62aee4] text-black'}`}
                    >
                      {addedToCart ? (
                        <><Check size={18} /> Added to Cart</>
                      ) : (
                        <><ShoppingBag size={18} /> Add to Bag</>
                      )}
                    </motion.button>
                    <button
                      onClick={toggleWishlist}
                      className={`p-3 rounded-full border flex items-center justify-center ${isWishlisted ? 'bg-red-50 border-red-200 text-red-500' : 'border-gray-300 hover:border-[#82cee4]'}`}
                    >
                      <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductDetailModal;*/
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Heart, X, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { useCartStore } from "@/stores/cartStore";
import { useWishlistStore } from "@/stores/wishlistStore";

interface ProductDetailModalProps {
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
  onClose: () => void;
}

const ProductDetailModal = ({ product, onClose }: ProductDetailModalProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  
  const addToCart = useCartStore((state) => state.addItem);
  const { items, addItem, removeItem } = useWishlistStore();
  const isWishlisted = items.some((item) => item.id === product.id);

  // Get main product name from details
  const productName = product.details.find(d => d.name === "Name")?.value || "Chemical Product";

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: productName,
      designer: product.mainCategory,
      price: 0, // Chemical products don't have direct price
      image: product.images[0],
      size: "N/A",
      stock: 1 // Default to 1 for quote requests
    });

    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeItem(product.id);
    } else {
      addItem({
        id: product.id,
        name: productName,
        designer: product.mainCategory,
        price: 0,
        image: product.images[0],
      });
    }
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  useEffect(() => {
    // Disable scrolling on the body when the modal is open
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when the modal is closed
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="relative bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] flex flex-col overflow-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2 bg-white/80 rounded-full hover:bg-[#82cee4] hover:text-white transition-colors shadow-lg"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col lg:flex-row h-full">
            {/* Image Gallery - Fixed height on mobile, flex on desktop */}
            <div className="relative h-[50vh] lg:h-full lg:w-1/2 bg-gray-100 flex flex-col">
              <div className="flex-1 relative">
                <img
                  src={product.images[selectedImage]}
                  alt={productName}
                  className="w-full h-full object-contain"
                />

                {/* Navigation Arrows */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-[#82cee4] hover:text-white transition-colors shadow-lg"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-[#82cee4] hover:text-white transition-colors shadow-lg"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Gallery - Fixed height */}
              {product.images.length > 1 && (
                <div className="h-20 bg-gray-200/50 p-2 flex overflow-x-auto">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(index);
                      }}
                      className={`flex-shrink-0 w-16 h-16 mx-1 rounded-md overflow-hidden border-2 transition-all ${selectedImage === index ? 'border-[#82cee4]' : 'border-transparent'}`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info - Scrollable area */}
            <div className="overflow-y-auto lg:w-1/2 flex flex-col">
              <div className="p-6 flex-1">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{productName}</h1>
                <p className="text-md text-gray-600 mt-1">
                  {product.mainCategory} • {product.subCategory}
                </p>

                {/* Batch and Net Content */}
                <div className="mt-4 flex gap-4 flex-wrap">
                  <div className="min-w-[120px]">
                    {/*<p className="text-sm text-gray-500">Batch Number</p>
                    <p className="font-medium">{product.batchNumber}</p>*/}
                  </div>
                  <div className="min-w-[120px]">
                    <p className="text-sm text-gray-500">Net Content</p>
                    <p className="font-medium">{product.netContent}</p>
                  </div>
                </div>

                {/* Product Details */}
                {/*<div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.details.map((detail, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-500 uppercase tracking-wider">{detail.name}</p>
                        <p className="font-medium mt-1 truncate">{detail.value}</p>
                      </div>
                    ))}
                  </div>
                </div>*/}
                                {/* Product Details */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.details.map((detail, index) => {
                      if (index === 1) return null; // Skip the second value
                      return (
                        <div key={index} className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-xs text-gray-500 uppercase tracking-wider">{detail.name}</p>
                          <p className="font-medium mt-1 truncate">{detail.value}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Specifications */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Specifications</h3>
                  <div className="space-y-2 max-h-[200px] overflow-y-auto pr-2">
                    {product.specifications.map((spec, index) => (
                      <div 
                        key={index} 
                        className="flex justify-between py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="text-gray-600 flex-1 truncate pr-2">{spec.name}</span>
                        <span className="font-medium text-gray-900 flex-1 truncate">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                {product.certifications.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Certifications</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.certifications.map((cert, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 px-3 py-1.5 rounded-full text-sm font-medium"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Notes */}
                {product.notes && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Notes</h3>
                    <div className="max-h-[150px] overflow-y-auto pr-2">
                      <p className="text-gray-700 whitespace-pre-line">
                        {product.notes}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons - Sticky at bottom */}
              <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                    disabled={addedToCart}
                    className={`flex-1 py-3 px-4 rounded-full font-bold flex items-center justify-center gap-2 transition-colors ${addedToCart ? 'bg-green-500 text-white' : 'bg-[#82cee4] hover:bg-[#62aee4] text-black'}`}
                  >
                    {addedToCart ? (
                      <><Check size={18} /> Request Sent</>
                    ) : (
                      <><ShoppingBag size={18} /> Request Quote</>
                    )}
                  </motion.button>
                  <button
                    onClick={toggleWishlist}
                    className={`p-3 rounded-full border flex items-center justify-center ${isWishlisted ? 'bg-red-50 border-red-200 text-red-500' : 'border-gray-300 hover:border-[#82cee4]'}`}
                  >
                    <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductDetailModal;
