"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaFlask, FaIndustry, FaTruck, FaMicroscope, FaRecycle, FaChartLine } from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      icon: <FaFlask className="text-white text-3xl" />,
      title: "Custom Formulations",
      description: "Tailored chemical solutions designed to meet your specific industrial requirements and performance criteria.",
      bg: "bg-gradient-to-br from-blue-600 to-blue-500"
    },
    {
      icon: <FaIndustry className="text-white text-3xl" />,
      title: "Bulk Manufacturing",
      description: "Large-scale production of industrial chemicals with strict quality control and consistency assurance.",
      bg: "bg-gradient-to-br from-blue-700 to-blue-600"
    },
    {
      icon: <FaTruck className="text-white text-3xl" />,
      title: "Global Distribution",
      description: "Reliable worldwide logistics network ensuring safe and timely delivery of chemical products.",
      bg: "bg-gradient-to-br from-blue-800 to-blue-700"
    },
    {
      icon: <FaMicroscope className="text-white text-3xl" />,
      title: "Analytical Services",
      description: "Comprehensive testing and analysis to verify composition, purity, and performance characteristics.",
      bg: "bg-gradient-to-br from-blue-900 to-blue-800"
    },
    {
      icon: <FaRecycle className="text-white text-3xl" />,
      title: "Sustainability Solutions",
      description: "Eco-friendly chemical alternatives and waste reduction strategies for greener operations.",
      bg: "bg-gradient-to-br from-blue-950 to-blue-900"
    },
    {
      icon: <FaChartLine className="text-white text-3xl" />,
      title: "Technical Consulting",
      description: "Expert guidance on chemical selection, process optimization, and regulatory compliance.",
      bg: "bg-gradient-to-br from-blue-800 to-blue-600"
    }
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
    }
  };

  const cardHover = {
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
    <section className="relative py-20 bg-white text-gray-900 overflow-hidden">
      {/* Floating grid background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="blue" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating molecules */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-blue-200"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 10}px`
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

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Advanced Chemical <span className="text-blue-600">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive services tailored to meet the diverse needs of industries worldwide, from formulation to delivery.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group relative overflow-hidden rounded-xl shadow-xl"
            >
              <motion.div
                variants={cardHover}
                className={`${service.bg} p-8 h-full flex flex-col`}
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10"></div>
                
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{service.title}</h3>
                <p className="text-blue-100 mb-6 relative z-10">{service.description}</p>
                
                <div className="mt-auto relative z-10">
                  <button className="text-white font-medium flex items-center group-hover:underline">
                    Learn more
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Explore All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;