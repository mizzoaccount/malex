/*"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Heart, Eye, Star, ArrowRight } from "lucide-react";
import useProducts from "@/utils/useProducts";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { ProductCard } from "./product/ProductCard";
import { useCartStore } from "@/stores/cartStore";
import { useWishlistStore } from "@/stores/wishlistStore";

interface Product {
  _id: string;
  name: string;
  designer: string;
  category: {
    main: string;
    sub: string;
    brand: string;
  };
  price: number;
  stock: number;
  images: string[];
  attributes: Record<string, string>;
  createdAt: string;
}

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
  };
  onClose: () => void;
}

const ProductDetailModal = ({ product, onClose }: ProductDetailModalProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const addToCart = useCartStore((state) => state.addItem);
  const { items, addItem, removeItem } = useWishlistStore();

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

const FeaturedCollectionsLight = () => {
  const { products, loading, error } = useProducts();
  const [addedToCart, setAddedToCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | ReturnType<typeof mapProduct>>(null);

  // Helper to transform API product to frontend format
  const mapProduct = (product: Product, index: number) => ({
    id: product._id,
    name: product.name,
    designer: product.designer,
    price: product.price,
    originalPrice: product.price * 1.3, // Adding 30% as "original" price for display
    images: product.images.length ? product.images : ["https://via.placeholder.com/300"],
    rating: 4.5 + (index % 5 * 0.1), // Generate ratings between 4.5-5.0
    isNew: new Date(product.createdAt).getTime() > Date.now() - 30 * 24 * 60 * 60 * 1000, // Mark as new if created in last 30 days
    attributes: product.attributes,
    stock: product.stock
  });

  const trendingProducts = products.map(mapProduct);
   const handleAddToCart = () => {
  setAddedToCart(true);
  setTimeout(() => setAddedToCart(false), 3000);
  };

  if (loading) {
    return (
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse h-8 w-32 bg-gray-200 rounded-full mx-auto"></div>
          <div className="animate-pulse h-12 w-64 bg-gray-200 rounded-full mx-auto mt-6"></div>
          <div className="animate-pulse h-4 w-96 bg-gray-200 rounded-full mx-auto mt-4"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-gray-100 rounded-xl h-[500px] animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-red-500">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-[#82cee4] bg-[#82cee4]/10 px-4 py-2 rounded-full inline-flex items-center gap-2">
            <Star size={14} /> FOR YOU
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#82cee4] to-[#62aee4]">
              Featured Lab Products
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Top-quality lab tools for precise scientific work.
          </p>
        </motion.div>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           {trendingProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={() => setSelectedProduct(product)}
              onAddToCart={() => handleAddToCart()}
              animationDelay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="relative overflow-hidden group border-2 border-[#82cee4] text-gray-900 hover:text-black font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md">
            <span className="relative z-10 flex items-center gap-2">
              View All Collections <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-[#82cee4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
          </button>
        </motion.div>
 
      </div>
    
      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </section>
  );
};

export default FeaturedCollectionsLight;*/
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProductCard from "./product/ProductCard";
import ProductDetailModal from "./product/ProductDetailModal";
import useProducts from "@/utils/useProducts";

const FeaturedCollectionsLight = () => {
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  if (loading) {
    return (
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse h-8 w-32 bg-gray-200 rounded-full mx-auto"></div>
          <div className="animate-pulse h-12 w-64 bg-gray-200 rounded-full mx-auto mt-6"></div>
          <div className="animate-pulse h-4 w-96 bg-gray-200 rounded-full mx-auto mt-4"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-gray-100 rounded-xl h-[500px] animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-red-500">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-[#82cee4] bg-[#82cee4]/10 px-4 py-2 rounded-full inline-flex items-center gap-2">
            FOR YOU
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#82cee4] to-[#62aee4]">
              Featured Chemical Products
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            High-quality chemicals for your laboratory needs
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product._id}
              product={{
                id: product._id,
                mainCategory: product.mainCategory,
                subCategory: product.subCategory,
                details: product.details,
                specifications: product.specifications,
                batchNumber: product.batchNumber,
                netContent: product.netContent,
                notes: product.notes,
                certifications: product.certifications,
                images: product.images,
                createdAt: product.createdAt
              }}
              onQuickView={() => setSelectedProduct({
                id: product._id,
                mainCategory: product.mainCategory,
                subCategory: product.subCategory,
                details: product.details,
                specifications: product.specifications,
                batchNumber: product.batchNumber,
                netContent: product.netContent,
                notes: product.notes,
                certifications: product.certifications,
                images: product.images,
                createdAt: product.createdAt
              })}
              onAddToCart={handleAddToCart}
              animationDelay={index * 0.1}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="relative overflow-hidden group border-2 border-[#82cee4] text-gray-900 hover:text-black font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md">
            <span className="relative z-10 flex items-center gap-2">
              View All Products <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-[#82cee4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
          </button>
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductDetailModal 
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedCollectionsLight;