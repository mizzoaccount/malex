"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaHeart, FaCartPlus, FaStar, FaShieldAlt, FaTruck } from 'react-icons/fa';
import Navbar from '@/components/Header';
import Footer from '@/components/Footer';

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  
  // Dummy product data
  const product = {
    id: 1,
    name: "Industrial Grade Solvent Cleaner",
    price: 245.99,
    images: [
      "/chemical-1.jpg",
      "/chemical-2.jpg",
      "/chemical-3.jpg"
    ],
    description: "High-performance industrial solvent for heavy-duty cleaning and degreasing applications.",
    specifications: [
      "pH Level: 7.8 - 8.2",
      "Flash Point: 62°C",
      "Viscosity: 45 cP",
      "Packaging: 20L Jerrycans"
    ],
    features: [
      "Rapid evaporation",
      "Non-corrosive formula",
      "Biodegradable components",
      "OSHA compliant"
    ],
    safety: "Use protective gear. Store in cool, dry place. Keep away from ignition sources.",
    reviews: [
      { user: "Industrial Solutions Ltd", rating: 5, comment: "Excellent cleaning power!" },
      { user: "MetalWorks Co.", rating: 4, comment: "Consistent quality" }
    ]
  };

  const whatsappMessage = `Hi! I'm interested in ${product.name} (Product ID: ${product.id}). Could you provide more details?`;

  return (
    <div className="bg-gray-50">
      <Navbar />
      
      <section className="relative py-12 px-6 lg:px-8 pt-24">
        <div className="max-w-7xl mx-auto">
          {/* Product Main Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Image Gallery */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative bg-white p-4 rounded-2xl shadow-xl border border-blue-50 overflow-hidden"
              >
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-96 object-contain rounded-xl"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Featured</span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">In Stock</span>
                </div>
              </motion.div>

              <div className="flex gap-4">
                {product.images.map((img, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`cursor-pointer border-2 ${selectedImage === index ? 'border-blue-600' : 'border-gray-200'} rounded-xl overflow-hidden`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={img} 
                      alt={`Thumbnail ${index + 1}`}
                      className="w-24 h-24 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
              
              <div className="flex items-center gap-4">
                <p className="text-3xl font-bold text-blue-600">Kshs {product.price}</p>
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5" />
                  ))}
                  <span className="ml-2 text-gray-600">(24 reviews)</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center bg-blue-50 p-3 rounded-lg">
                      <FaShieldAlt className="text-blue-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                  <FaTruck className="text-blue-600 mr-2" />
                  <span>Free shipping on orders over $500</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 bg-gray-100 rounded-l-lg"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                    className="w-16 text-center border-t border-b border-gray-200"
                  />
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 bg-gray-100 rounded-r-lg"
                  >
                    +
                  </button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg"
                >
                  <FaCartPlus className="mr-2" />
                  Add to Cart
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-3 rounded-full ${isLiked ? 'text-red-500 bg-red-50' : 'text-gray-400 bg-gray-100'}`}
                >
                  <FaHeart className="w-6 h-6" />
                </motion.button>
              </div>

              <a
                href={`https://wa.me/+254718548695?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 bg-green-600 text-white p-4 rounded-full shadow-xl hover:bg-green-700 transition-all"
              >
                <FaWhatsapp className="w-8 h-8" />
              </a>
            </motion.div>
          </div>

          {/* Product Details Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex gap-8">
              {['description', 'specifications', 'safety', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 px-1 capitalize ${
                    activeTab === tab 
                    ? 'border-b-2 border-blue-600 text-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="py-8"
            >
              {activeTab === 'description' && (
                <div className="prose max-w-none">
                  <h3 className="text-2xl font-bold mb-4">Product Description</h3>
                  <p>{product.description}</p>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.specifications.map((spec, i) => (
                    <div key={i} className="bg-blue-50 p-4 rounded-lg flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      {spec}
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'safety' && (
                <div className="prose max-w-none">
                  <h3 className="text-2xl font-bold mb-4">Safety Information</h3>
                  <p>{product.safety}</p>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  {product.reviews.map((review, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-white p-6 rounded-xl shadow-sm"
                    >
                      <div className="flex items-center gap-4 mb-2">
                        <div className="flex items-center text-yellow-400">
                          {[...Array(review.rating)].map((_, i) => (
                            <FaStar key={i} className="w-5 h-5" />
                          ))}
                        </div>
                        <h4 className="font-semibold">{review.user}</h4>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetails;