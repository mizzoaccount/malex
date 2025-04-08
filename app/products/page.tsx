"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFlask, FaIndustry, FaLeaf, FaShieldAlt, FaSearch, FaArrowRight, FaFilter } from 'react-icons/fa';
import Navbar from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    availability: 'all',
    sortBy: 'featured'
  });

  const products = [
    {
      id: 1,
      name: "Industrial Solvents",
      category: "chemicals",
      description: "High-performance solvents for industrial cleaning and degreasing applications.",
      image: "/product-solvents.jpg",
      specs: ["Fast evaporation", "Low toxicity", "High purity"],
      price: 85,
      inStock: true,
      featured: true
    },
    {
      id: 2,
      name: "Polymer Resins",
      category: "chemicals",
      description: "Advanced polymer solutions for coatings, adhesives, and composites.",
      image: "/product-resins.jpg",
      specs: ["UV resistant", "Thermal stable", "Custom formulations"],
      price: 120,
      inStock: true,
      featured: true
    },
    {
      id: 3,
      name: "Laboratory Equipment",
      category: "tools",
      description: "Precision lab tools for accurate measurement and analysis.",
      image: "/product-lab-equip.jpg",
      specs: ["Certified accuracy", "Durable construction", "Easy calibration"],
      price: 250,
      inStock: true,
      featured: false
    },
    {
      id: 4,
      name: "Safety Gear",
      category: "tools",
      description: "Protective equipment for handling hazardous materials.",
      image: "/product-safety-gear.jpg",
      specs: ["Chemical resistant", "Comfortable fit", "Durable materials"],
      price: 75,
      inStock: false,
      featured: true
    },
    {
      id: 5,
      name: "Bio-Based Cleaners",
      category: "eco",
      description: "Environmentally friendly cleaning solutions from renewable sources.",
      image: "/product-bio-cleaners.jpg",
      specs: ["Biodegradable", "Non-toxic", "High efficiency"],
      price: 65,
      inStock: true,
      featured: false
    },
    {
      id: 6,
      name: "Analytical Instruments",
      category: "tools",
      description: "Advanced instruments for precise chemical analysis.",
      image: "/product-analytical.jpg",
      specs: ["Digital readouts", "High precision", "Low maintenance"],
      price: 350,
      inStock: true,
      featured: true
    },
    {
      id: 7,
      name: "Water Treatment Chemicals",
      category: "chemicals",
      description: "Specialized formulations for industrial water treatment.",
      image: "/product-water-treatment.jpg",
      specs: ["pH balanced", "Anti-corrosive", "Eco-friendly"],
      price: 95,
      inStock: true,
      featured: false
    },
    {
      id: 8,
      name: "Sustainable Packaging",
      category: "eco",
      description: "Biodegradable containers for chemical storage and transport.",
      image: "/product-packaging.jpg",
      specs: ["Recyclable", "Leak-proof", "Durable"],
      price: 45,
      inStock: true,
      featured: true
    },
  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: <FaFlask /> },
    { id: 'chemicals', name: 'Chemicals', icon: <FaIndustry /> },
    { id: 'tools', name: 'Tools & Equipment', icon: <FaSearch /> },
    { id: 'eco', name: 'Eco Solutions', icon: <FaLeaf /> },
    { id: 'safety', name: 'Safety', icon: <FaShieldAlt /> },
  ];

  useEffect(() => {
    setIsFiltering(true);
    const timer = setTimeout(() => {
      let results = [...products];
      
      // Apply category filter
      if (activeCategory !== 'all') {
        results = results.filter(product => product.category === activeCategory);
      }
      
      // Apply search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        results = results.filter(product => 
          product.name.toLowerCase().includes(query) || 
          product.description.toLowerCase().includes(query) ||
          product.specs.some((spec: string) => spec.toLowerCase().includes(query))
        );
      }
      
      // Apply price filter
      results = results.filter(product => 
        product.price >= filters.priceRange[0] && 
        product.price <= filters.priceRange[1]
      );
      
      // Apply availability filter
      if (filters.availability !== 'all') {
        results = results.filter(product => 
          filters.availability === 'in-stock' ? product.inStock : !product.inStock
        );
      }
      
      // Apply sorting
      switch (filters.sortBy) {
        case 'price-low':
          results.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          results.sort((a, b) => b.price - a.price);
          break;
        case 'featured':
          results.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
          break;
        case 'name':
          results.sort((a, b) => a.name.localeCompare(b.name));
          break;
      }
      
      setFilteredProducts(results);
      setIsFiltering(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [activeCategory, searchQuery, filters]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <div className="bg-gray-50">
      <Navbar />
      
      <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden pt-24">
        {/* Floating chemical structures */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-blue-200"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 20}px`
              }}
              animate={{
                y: [0, (Math.random() - 0.5) * 40],
                x: [0, (Math.random() - 0.5) * 40],
                rotate: [0, 360],
                transition: {
                  duration: 20 + Math.random() * 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }
              }}
            >
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="12" cy="12" r="2" />
                <path d="M16 12l3 3m-7 0l3-3m-5-5l3-3m-3 14l3-3" />
              </svg>
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium mb-4">
              Our Products
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Advanced Chemical <span className="text-blue-600">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-performance chemicals and precision tools for industrial and laboratory applications.
            </p>
          </motion.div>

          {/* Search and Filter Bar */}
          <motion.div 
            className="mb-12 bg-white p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center px-6 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <FaFilter className="mr-2" />
                Filters
              </button>
            </div>

            {/* Expanded Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 pt-6 border-t border-gray-200"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                      <div className="flex items-center space-x-4">
                        <input
                          type="number"
                          min="0"
                          max="1000"
                          value={filters.priceRange[0]}
                          onChange={(e) => setFilters({...filters, priceRange: [Number(e.target.value), filters.priceRange[1]]})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        <span>to</span>
                        <input
                          type="number"
                          min="0"
                          max="1000"
                          value={filters.priceRange[1]}
                          onChange={(e) => setFilters({...filters, priceRange: [filters.priceRange[0], Number(e.target.value)]})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="1000"
                        step="10"
                        value={filters.priceRange[0]}
                        onChange={(e) => setFilters({...filters, priceRange: [Number(e.target.value), filters.priceRange[1]]})}
                        className="w-full mt-2"
                      />
                      <input
                        type="range"
                        min="0"
                        max="1000"
                        step="10"
                        value={filters.priceRange[1]}
                        onChange={(e) => setFilters({...filters, priceRange: [filters.priceRange[0], Number(e.target.value)]})}
                        className="w-full mt-2"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                      <select
                        value={filters.availability}
                        onChange={(e) => setFilters({...filters, availability: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="all">All Products</option>
                        <option value="in-stock">In Stock</option>
                        <option value="out-of-stock">Out of Stock</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                      <select
                        value={filters.sortBy}
                        onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="featured">Featured</option>
                        <option value="name">Name (A-Z)</option>
                        <option value="price-low">Price (Low to High)</option>
                        <option value="price-high">Price (High to Low)</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Category Tabs */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                variants={itemVariants}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-5 py-3 rounded-full border transition-all ${activeCategory === category.id ? 'bg-blue-600 text-white border-blue-600 shadow-lg' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isFiltering}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Products Grid */}
          {isFiltering ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md h-96 animate-pulse"></div>
              ))}
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 relative"
                      whileHover="hover"
                      onHoverStart={() => setHoveredProduct(product.id)}
                      onHoverEnd={() => setHoveredProduct(null)}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"></div>
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500"
                          style={{
                            transform: hoveredProduct === product.id ? 'scale(1.05)' : 'scale(1)'
                          }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                          <h3 className="text-xl font-bold text-white">{product.name}</h3>
                          <div className="flex justify-between items-center">
                            <p className="text-blue-200 text-sm">{categories.find(c => c.id === product.category)?.name}</p>
                            <p className="text-white font-semibold">Ksh {product.price}</p>
                          </div>
                        </div>
                        {!product.inStock && (
                          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                            Out of Stock
                          </div>
                        )}
                        {product.featured && (
                          <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                            Featured
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <div className="mb-6">
                          {product.specs.map((spec: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, i: React.Key | null | undefined) => (
                            <div key={i} className="flex items-center mb-2">
                              <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
                              <span className="text-sm text-gray-700">{spec}</span>
                            </div>
                          ))}
                        </div>
                        <Link 
  href={`/products/${product.id}`} 
  className={`w-full flex items-center justify-between px-4 py-2 rounded-lg transition-colors ${
    product.inStock 
      ? 'bg-blue-50 text-blue-600 hover:bg-blue-100' 
      : 'bg-gray-100 text-gray-400 cursor-not-allowed pointer-events-none'
  }`}
  aria-disabled={!product.inStock}
  tabIndex={product.inStock ? 0 : -1}
>
  <span>{product.inStock ? 'View Details' : 'Not Available'}</span>
  {product.inStock && <FaArrowRight />}
</Link>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    className="col-span-full text-center py-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <p className="text-gray-500">No products found matching your criteria</p>
                    <button 
                      onClick={() => {
                        setActiveCategory('all');
                        setSearchQuery('');
                        setFilters({
                          priceRange: [0, 1000],
                          availability: 'all',
                          sortBy: 'featured'
                        });
                      }}
                      className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Reset Filters
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}



          {/* View More Button */}
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  viewport={{ once: true }}
  className="text-center mt-16"
>
  <Link 
    href="/catalogue" 
  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center mx-auto"
  >
    Explore Full Product Catalog
    <FaArrowRight className="ml-2" />
  </Link>
</motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;