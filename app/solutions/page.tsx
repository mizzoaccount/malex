"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaFlask, 
  FaIndustry, 
  FaTruck, 
  FaMicroscope, 
  FaRecycle, 
  FaChartLine,
  FaWarehouse,
  FaLeaf,
  FaVial,
  FaClipboardCheck,
  FaGlobeAmericas,
  FaUsers
} from 'react-icons/fa';
import NavbarTwo from '@/components/HeaderTwo';
import Footer from '@/components/Footer';

const ServicesPage = () => {
  const serviceCategories = [
    {
      icon: <FaFlask className="text-white text-3xl" />,
      title: "Custom Formulations",
      description: "Tailored chemical solutions designed to meet your specific industrial requirements and performance criteria.",
      bg: "bg-gradient-to-br from-blue-600 to-blue-500",
      details: [
        "Specialty chemical development",
        "Application-specific formulations",
        "Performance optimization",
        "Prototype development",
        "Scale-up support"
      ],
      industries: ["Pharmaceutical", "Agriculture", "Cosmetics", "Manufacturing"]
    },
    {
      icon: <FaIndustry className="text-white text-3xl" />,
      title: "Bulk Manufacturing",
      description: "Large-scale production of industrial chemicals with strict quality control and consistency assurance.",
      bg: "bg-gradient-to-br from-blue-700 to-blue-600",
      details: [
        "High-volume production",
        "GMP compliant facilities",
        "Batch processing",
        "Continuous processing",
        "Quality assurance protocols"
      ],
      industries: ["Chemical", "Petrochemical", "Food Processing", "Textile"]
    },
    {
      icon: <FaTruck className="text-white text-3xl" />,
      title: "Global Distribution",
      description: "Reliable worldwide logistics network ensuring safe and timely delivery of chemical products.",
      bg: "bg-gradient-to-br from-blue-800 to-blue-700",
      details: [
        "International shipping",
        "Hazardous material handling",
        "Temperature-controlled transport",
        "Customs clearance",
        "Real-time tracking"
      ],
      industries: ["All industries", "International clients", "Export/Import businesses"]
    },
    {
      icon: <FaMicroscope className="text-white text-3xl" />,
      title: "Analytical Services",
      description: "Comprehensive testing and analysis to verify composition, purity, and performance characteristics.",
      bg: "bg-gradient-to-br from-blue-900 to-blue-800",
      details: [
        "Chemical composition analysis",
        "Quality control testing",
        "Material characterization",
        "Stability studies",
        "Method development"
      ],
      industries: ["Research Institutions", "Quality Control Labs", "Regulatory Compliance"]
    },
    {
      icon: <FaRecycle className="text-white text-3xl" />,
      title: "Sustainability Solutions",
      description: "Eco-friendly chemical alternatives and waste reduction strategies for greener operations.",
      bg: "bg-gradient-to-br from-blue-950 to-blue-900",
      details: [
        "Green chemistry alternatives",
        "Waste minimization",
        "Energy-efficient processes",
        "Lifecycle assessment",
        "Environmental impact studies"
      ],
      industries: ["All industries", "ESG-focused companies", "Regulated sectors"]
    },
    {
      icon: <FaChartLine className="text-white text-3xl" />,
      title: "Technical Consulting",
      description: "Expert guidance on chemical selection, process optimization, and regulatory compliance.",
      bg: "bg-gradient-to-br from-blue-800 to-blue-600",
      details: [
        "Process improvement",
        "Regulatory compliance",
        "Troubleshooting",
        "Safety assessments",
        "Technical training"
      ],
      industries: ["Startups", "Established manufacturers", "Government agencies"]
    }
  ];

  const additionalServices = [
    {
      icon: <FaWarehouse />,
      title: "Storage Solutions",
      description: "Secure, compliant storage facilities for hazardous and non-hazardous materials."
    },
    {
      icon: <FaLeaf />,
      title: "Environmental Testing",
      description: "Comprehensive environmental impact assessments and remediation strategies."
    },
    {
      icon: <FaVial />,
      title: "R&D Collaboration",
      description: "Joint research initiatives to develop next-generation chemical solutions."
    },
    {
      icon: <FaClipboardCheck />,
      title: "Regulatory Support",
      description: "Guidance through complex chemical regulations and compliance requirements."
    },
    {
      icon: <FaGlobeAmericas />,
      title: "International Standards",
      description: "Ensuring products meet global quality and safety standards."
    },
    {
      icon: <FaUsers />,
      title: "Training Programs",
      description: "Specialized training for safe chemical handling and process optimization."
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
    <>
    <NavbarTwo />
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        {/* Floating grid background */}
        <div className="absolute inset-0 opacity-10">
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

        {/*<div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Chemical <span className="text-blue-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for all your industrial chemical needs, from formulation to delivery and beyond
            </p>
          </motion.div>
        </div>*/}
      </section>

      {/* Main Services */}
      <section className="relative py-0 bg-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium mb-4">
              Core Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-blue-600">Specialized</span> Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end chemical solutions designed to meet the most demanding industrial requirements
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {serviceCategories.map((service, index) => (
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
                  <p className="text-blue-100 mb-4 relative z-10">{service.description}</p>
                  
                  <div className="mb-6 relative z-10">
                    <h4 className="text-white font-semibold mb-2">Service Details:</h4>
                    <ul className="text-blue-100 text-sm space-y-1">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2">•</span> {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto relative z-10">
                    <div className="mb-3">
                      <h4 className="text-white font-semibold mb-1">Industries Served:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.industries.map((industry, i) => (
                          <span key={i} className="text-xs bg-white/20 text-white px-2 py-1 rounded">
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="text-white font-medium flex items-center group-hover:underline mt-4">
                      Request Service Details
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium mb-4">
              Complementary Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Supporting <span className="text-blue-600">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Additional services to enhance your chemical operations and ensure complete satisfaction
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 hover:border-blue-200 transition-all"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)" }}
              >
                <div className="w-16 h-16 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="text-blue-600 font-medium flex items-center hover:underline">
                  Learn more
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium mb-4">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Malex <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering exceptional chemical solutions
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-blue-200 transform -translate-x-1/2"></div>
            
            {/* Process steps */}
            <div className="space-y-12 md:space-y-24">
              {[
                {
                  step: "1",
                  title: "Needs Assessment",
                  description: "We begin by thoroughly understanding your specific requirements, challenges, and objectives.",
                  icon: <FaClipboardCheck className="text-blue-600 text-2xl" />
                },
                {
                  step: "2",
                  title: "Solution Design",
                  description: "Our experts develop tailored chemical formulations or service plans to meet your needs.",
                  icon: <FaFlask className="text-blue-600 text-2xl" />
                },
                {
                  step: "3",
                  title: "Prototype & Testing",
                  description: "We create samples and conduct rigorous testing to ensure performance meets specifications.",
                  icon: <FaMicroscope className="text-blue-600 text-2xl" />
                },
                {
                  step: "4",
                  title: "Implementation",
                  description: "Full-scale production or service delivery with strict quality control measures.",
                  icon: <FaIndustry className="text-blue-600 text-2xl" />
                },
                {
                  step: "5",
                  title: "Delivery & Support",
                  description: "Safe transportation to your facility followed by ongoing technical support.",
                  icon: <FaTruck className="text-blue-600 text-2xl" />
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* For mobile */}
                  <div className="md:hidden w-16 h-16 rounded-full bg-blue-100 border-4 border-white shadow-lg flex items-center justify-center mb-4 z-10">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center">
                      {process.icon}
                    </div>
                  </div>
                  
                  {/* For desktop */}
                  <div className="hidden md:flex w-16 h-16 rounded-full bg-blue-100 border-4 border-white shadow-lg items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center">
                      {process.icon}
                    </div>
                  </div>
                  
                  <div className={`md:flex-1 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} mt-4 md:mt-0`}>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{process.title}</h3>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-blue-100">Transform</span> Your Chemical Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our team of experts is standing by to discuss your specific needs and develop customized solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 shadow-lg hover:shadow-xl">
                Request a Consultation
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition duration-300 shadow-lg hover:shadow-xl">
                Browse Our Products
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default ServicesPage;