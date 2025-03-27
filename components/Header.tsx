"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const mobileNavVariants = {
    open: {
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    },
    closed: {
      x: '100%',
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    }
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav 
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-blue-900/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center"
              >
                {/*<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-600">
                    <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zm0 7L2 12l10 5 10-5-10-5zm0 7L2 19l10 5 10-5-10-5z"/>
                  </svg>
                </div>*/}
                <span className="text-white font-bold text-xl">Malex</span>
              </motion.div>
            </Link>

            {/* Desktop Menu Items */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={item.href} className="relative text-white group">
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block"
            >
              <Link 
                href="/contact" 
                className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Quote
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden focus:outline-none z-50"
              aria-label="Toggle menu"
            >
              <div className="w-8 flex flex-col items-end space-y-1.5">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 bg-white rounded-full w-full transition-all"
                ></motion.span>
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block h-0.5 bg-white rounded-full w-3/4 transition-all"
                ></motion.span>
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 bg-white rounded-full w-full transition-all"
                ></motion.span>
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            ></motion.div>
            
            <motion.div
              variants={mobileNavVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-screen w-80 bg-blue-900/95 backdrop-blur-lg z-40 shadow-2xl"
            >
              <div className="h-full flex flex-col justify-center px-8">
                <motion.div className="mb-16">
                  {/*<div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 mx-auto">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
                      <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zm0 7L2 12l10 5 10-5-10-5zm0 7L2 19l10 5 10-5-10-5z"/>
                    </svg>
                  </div>*/}
                  <h3 className="text-white text-center text-2xl font-bold">Malex Chemical</h3>
                </motion.div>

                <motion.ul className="space-y-8">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      variants={itemVariants}
                      custom={index}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="text-white text-xl font-medium block py-2 hover:text-blue-200 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  className="mt-12"
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  <Link
                    href="/contact"
                    className="block w-full py-3 px-6 text-center rounded-full bg-gradient-to-r from-blue-400 to-blue-500 text-white font-medium shadow-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Quote
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
