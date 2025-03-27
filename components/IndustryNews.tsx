"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRegNewspaper, FaRegLightbulb, FaBalanceScale, FaChevronRight } from 'react-icons/fa';

const IndustryNews = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const newsItems = [
    {
      id: 1,
      title: "New EU Regulations on Chemical Safety",
      category: "regulations",
      date: "May 15, 2023",
      summary: "Updated REACH requirements will impact chemical manufacturers across Europe with stricter reporting standards.",
      content: "The European Chemicals Agency (ECHA) has announced sweeping changes to the REACH regulation framework, requiring more detailed safety data sheets and expanded testing protocols for all imported chemicals. These changes will phase in over the next 18 months, with full compliance expected by Q1 2025.",
      icon: <FaBalanceScale className="text-3xl" />
    },
    {
      id: 2,
      title: "Breakthrough in Sustainable Solvents",
      category: "innovations",
      date: "April 28, 2023",
      summary: "Researchers develop bio-based solvents with industrial-grade performance and 80% lower carbon footprint.",
      content: "A team at MIT has created a new class of solvents derived from agricultural waste products that demonstrate equal or better performance than traditional petroleum-based solvents in industrial applications. Early adopters in the automotive sector report excellent results in degreasing applications.",
      icon: <FaRegLightbulb className="text-3xl" />
    },
    {
      id: 3,
      title: "Global Chemical Market Growth Forecast",
      category: "trends",
      date: "April 10, 2023",
      summary: "Analysts predict 6.2% CAGR for specialty chemicals through 2028, led by Asian markets.",
      content: "The latest market analysis from Chemical Insights shows strong growth potential in specialty chemicals, particularly for electronics manufacturing and renewable energy applications. Emerging markets in Southeast Asia are driving demand, with Vietnam and Indonesia showing particularly strong growth trajectories.",
      icon: <FaRegNewspaper className="text-3xl" />
    },
    {
      id: 4,
      title: "EPA Announces New PFAS Restrictions",
      category: "regulations",
      date: "March 22, 2023",
      summary: "Strict new limits on 'forever chemicals' will require formulation changes across multiple industries.",
      content: "The Environmental Protection Agency's new PFAS action plan sets stringent limits on per- and polyfluoroalkyl substances in industrial processes. Chemical manufacturers will need to reformulate many products to meet the new standards, with compliance deadlines beginning in late 2024.",
      icon: <FaBalanceScale className="text-3xl" />
    },
    {
      id: 5,
      title: "Nanotech Catalysts Revolutionize Production",
      category: "innovations",
      date: "March 15, 2023",
      summary: "Novel catalyst technology reduces energy requirements for key chemical processes by 40%.",
      content: "A breakthrough in nanocatalyst design from Stanford University is enabling dramatic reductions in energy consumption for common industrial chemical reactions. Early adopters report maintaining yield while significantly cutting operating costs and emissions.",
      icon: <FaRegLightbulb className="text-3xl" />
    },
    {
      id: 6,
      title: "Shift Toward Circular Chemical Economy",
      category: "trends",
      date: "February 28, 2023",
      summary: "Major producers commit to waste-to-feedstock initiatives to reduce environmental impact.",
      content: "Leading chemical manufacturers have formed a consortium to develop cross-industry solutions for chemical recycling and byproduct utilization. The initiative aims to create closed-loop systems where waste from one process becomes raw material for another.",
      icon: <FaRegNewspaper className="text-3xl" />
    },
  ];

  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  const categories = [
    { id: 'all', name: 'All News', color: 'bg-blue-100 text-blue-800' },
    { id: 'trends', name: 'Market Trends', color: 'bg-purple-100 text-purple-800' },
    { id: 'regulations', name: 'Regulations', color: 'bg-amber-100 text-amber-800' },
    { id: 'innovations', name: 'Innovations', color: 'bg-green-100 text-green-800' },
  ];

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
      y: -5,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Floating circular elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-blue-100/30 blur-xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-purple-100/20 blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-amber-100/30 blur-lg"></div>
        
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-blue-200/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
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
          />
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
            Industry Insights
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Chemical Industry <span className="text-blue-600">News</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about the latest trends, regulations, and innovations shaping our industry.
          </p>
        </motion.div>

        {/* Category Filters */}
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
              className={`px-5 py-2 rounded-full border transition-all ${activeCategory === category.id ? `${category.color} border-transparent shadow-md` : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* News Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredNews.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover="hover"
              className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 ${expandedCard === item.id ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className={`p-3 rounded-lg ${categories.find(c => c.id === item.category)?.color} mr-4`}>
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">{item.date}</span>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-700 mb-4">
                    {expandedCard === item.id ? item.content : item.summary}
                  </p>
                  {expandedCard !== item.id && (
                    <button 
                      className="text-blue-600 font-medium flex items-center hover:underline"
                      onClick={() => setExpandedCard(item.id)}
                    >
                      Read more
                      <FaChevronRight className="ml-1" />
                    </button>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${categories.find(c => c.id === item.category)?.color}`}>
                    {categories.find(c => c.id === item.category)?.name}
                  </span>
                  {expandedCard === item.id && (
                    <button 
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => setExpandedCard(null)}
                    >
                      Collapse
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl flex items-center mx-auto">
            Subscribe to Our Industry Newsletter
            <FaChevronRight className="ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryNews;