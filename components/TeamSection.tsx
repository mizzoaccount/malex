"use client";

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaChevronLeft, FaChevronRight, FaFlask, FaMicroscope, FaQuoteLeft } from 'react-icons/fa';

const DirectorsStatement = () => {
  const statements = [
    {
      id: 1,
      title: "Director's Message",
      statement: "As the Director of Malex Chem Supplies Limited, I am proud to lead a company dedicated to excellence in supplying high-quality laboratory and medical products. Since our founding in 2005, we have strived to build a reputation for reliability and innovation, serving clients across East Africa with integrity and professionalism.",
      image: "/director.jpg",
      focusAreas: ["Quality Assurance", "Customer Focus", "Innovation"],
    },
    {
      id: 2,
      title: "Our Commitment",
      statement: "Our commitment to providing top-tier chemicals, equipment, and medical supplies is driven by our belief in supporting scientific progress and schools advancements. We continuously seek to enhance our offerings and services to meet the evolving needs of our customers.",
      image: "/commitment.jpg",
      focusAreas: ["Scientific Support", "Continuous Improvement", "Education"],
    },
    {
      id: 3,
      title: "Looking Ahead",
      statement: "Thank you for your trust and partnership as we continue to grow and achieve new milestones together. We remain dedicated to being your preferred chemical supplier and look forward to many more years of collaboration and success.",
      image: "/future.jpg",
      focusAreas: ["Growth", "Partnership", "Sustainability"],
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === statements.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? statements.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    })
  };

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Floating scientific elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(12)].map((_, i) => (
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
            {Math.random() > 0.5 ? (
              <FaFlask className="w-full h-full" />
            ) : (
              <FaMicroscope className="w-full h-full" />
            )}
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
            Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Director's <span className="text-blue-600">Statement</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A message from our leadership about our vision and commitment
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative h-[600px] md:h-[700px] w-full" ref={carouselRef}>
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-12"
            >
              {/* Director Image */}
              <div className="relative w-full md:w-1/2 h-80 md:h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-900/20 rounded-3xl overflow-hidden">
                  <img
                    src={statements[currentIndex].image}
                    alt="Director"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-blue-600/10 border-2 border-blue-400/20 backdrop-blur-sm"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-white/10 border-2 border-blue-400/20 backdrop-blur-sm"></div>
              </div>

              {/* Statement Content */}
              <div className="w-full md:w-1/2 px-6">
                <div className="max-w-md mx-auto md:mx-0">
                  <div className="flex items-start mb-6">
                    <FaQuoteLeft className="text-blue-600 text-3xl mr-4 mt-1" />
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        {statements[currentIndex].title}
                      </h3>
                      <p className="text-blue-600 text-xl font-medium mb-6">
                        The Director
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-8 text-lg">
                    {statements[currentIndex].statement}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {statements[currentIndex].focusAreas.map((item, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    <a 
                      href="#" 
                      className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                    <button className="px-6 py-3 rounded-full bg-white text-blue-600 border border-blue-600 font-medium hover:bg-blue-50 transition-colors">
                      Read Full Statement
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-blue-600 hover:bg-blue-50 z-20"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-blue-600 hover:bg-blue-50 z-20"
          >
            <FaChevronRight className="text-xl" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {statements.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={`w-3 h-3 rounded-full transition-all ${i === currentIndex ? 'bg-blue-600 w-6' : 'bg-blue-200'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorsStatement;

{/*"use client";

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaChevronLeft, FaChevronRight, FaFlask, FaMicroscope } from 'react-icons/fa';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Maina Alex",
      title: "Chief Executive Officer",
      bio: "PhD in Chemical Engineering with 20+ years leading innovative chemical solutions. Spearheaded our global expansion strategy.",
      image: "/team-member-1.jpg",
      expertise: ["Strategic Leadership", "Chemical R&D", "Global Operations"],
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      title: "Chief Technology Officer",
      bio: "Materials science expert revolutionizing sustainable chemical innovations and manufacturing processes.",
      image: "/team-member-2.jpg",
      expertise: ["Nanotechnology", "Process Engineering", "Sustainability"],
    },
    {
      id: 3,
      name: "Dr. Emily Park",
      title: "Head of Research",
      bio: "MIT-trained researcher specializing in advanced polymer chemistry and material formulations.",
      image: "/team-member-3.jpg",
      expertise: ["Polymer Science", "Formulation", "Quality Control"],
    },
    {
      id: 4,
      name: "James Wilson",
      title: "Global Operations Director",
      bio: "Supply chain architect ensuring flawless production and distribution across 40+ countries.",
      image: "/team-member-4.jpg",
      expertise: ["Logistics", "Manufacturing", "Regulatory Compliance"],
    },
    {
      id: 5,
      name: "Lisa Nguyen",
      title: "Sustainability Officer",
      bio: "Pioneering environmental chemist driving our green chemistry initiatives and circular economy.",
      image: "/team-member-5.jpg",
      expertise: ["Green Chemistry", "Lifecycle Analysis", "Waste Reduction"],
    },
    {
      id: 6,
      name: "Dr. Robert Kim",
      title: "Head of Product Development",
      bio: "Specializes in cutting-edge formulations for industrial applications across multiple sectors.",
      image: "/team-member-6.jpg",
      expertise: ["Product Innovation", "Technical Consulting", "Applications"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    })
  };

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Floating scientific elements *
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(12)].map((_, i) => (
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
            {Math.random() > 0.5 ? (
              <FaFlask className="w-full h-full" />
            ) : (
              <FaMicroscope className="w-full h-full" />
            )}
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
            Leadership Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-blue-600">Visionaries</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The brilliant scientific minds pioneering tomorrow's chemical solutions today.
          </p>
        </motion.div>

        {/* Carousel Container *
        <div className="relative h-[600px] md:h-[700px] w-full" ref={carouselRef}>
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-12"
            >
              {/* Team Member Image *
              <div className="relative w-full md:w-1/2 h-80 md:h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-900/20 rounded-3xl overflow-hidden">
                  <img
                    src={teamMembers[currentIndex].image}
                    alt={teamMembers[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-blue-600/10 border-2 border-blue-400/20 backdrop-blur-sm"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-white/10 border-2 border-blue-400/20 backdrop-blur-sm"></div>
              </div>

              {/* Team Member Info *
              <div className="w-full md:w-1/2 px-6">
                <div className="max-w-md mx-auto md:mx-0">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {teamMembers[currentIndex].name}
                  </h3>
                  <p className="text-blue-600 text-xl font-medium mb-6">
                    {teamMembers[currentIndex].title}
                  </p>
                  <p className="text-gray-600 mb-8 text-lg">
                    {teamMembers[currentIndex].bio}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {teamMembers[currentIndex].expertise.map((item, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    <a 
                      href="#" 
                      className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                    <button className="px-6 py-3 rounded-full bg-white text-blue-600 border border-blue-600 font-medium hover:bg-blue-50 transition-colors">
                      Full Bio
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows *
          <button 
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-blue-600 hover:bg-blue-50 z-20"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-blue-600 hover:bg-blue-50 z-20"
          >
            <FaChevronRight className="text-xl" />
          </button>

          {/* Indicators *
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {teamMembers.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={`w-3 h-3 rounded-full transition-all ${i === currentIndex ? 'bg-blue-600 w-6' : 'bg-blue-200'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;*/}