"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Header"; // Assuming you have the Navbar in this path

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Contact Content */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-16 px-4 sm:px-6 lg:px-8 pt-24" // Added pt-24 to account for fixed navbar
      >
        {/* Hero Section */}
        <motion.div 
          variants={fadeIn}
          className="max-w-7xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to answer your questions and provide the chemical solutions you need.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="max-w-7xl mx-auto">
          {/* Contact Cards */}
          <motion.div 
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {/* Phone Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Phone</h3>
              <p className="text-gray-600 mb-2">+2547 185 486 95</p>
              <p className="text-gray-600">+2547 021 152 77</p>
            </div>

            {/* Email Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Email</h3>
              <p className="text-gray-600 mb-2">sales@malexsupplies.com</p>
              <p className="text-gray-600">alex@malexsupplies.com</p>
            </div>

            {/* Location Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Location</h3>
              <p className="text-gray-600">Hotel Green Court Building</p>
              <p className="text-gray-600">5th Floor, Latema Road</p>
              <p className="text-gray-600">Nairobi, Kenya</p>
            </div>
          </motion.div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <motion.div 
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div 
              variants={fadeIn}
              className="bg-white p-1 rounded-xl shadow-lg overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8189881284225!2d36.822488075827444!3d-1.2824046356236611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11d5366d37f9%3A0xc72de9b7a73c5626!2sGreen%20Court%20Hotel!5e0!3m2!1sen!2ske!4v1741252292109!5m2!1sen!2ske"
                className="w-full h-full min-h-[400px] rounded-lg"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div 
            variants={fadeIn}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
              <p className="text-gray-600 mb-8">Find answers to common questions about our products and services.</p>
              
              <div className="space-y-4">
                {[
                  {
                    question: "What chemicals do you supply?",
                    answer: "We supply a wide range of industrial and laboratory chemicals, including solvents, acids, and specialty compounds."
                  },
                  {
                    question: "Are your chemicals safe for use?",
                    answer: "Yes, all our chemicals comply with safety regulations, and we provide proper handling guidelines."
                  },
                  {
                    question: "Do you offer bulk purchasing options?",
                    answer: "Yes, we offer bulk pricing and discounts for large orders."
                  },
                  {
                    question: "How do you ensure product quality?",
                    answer: "We source from reputable manufacturers and conduct thorough quality checks."
                  },
                  {
                    question: "Can I get a consultation before purchasing?",
                    answer: "Absolutely! Our experts are available to guide you on the best chemical solutions for your needs."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <button className="flex justify-between items-center w-full text-left group">
                      <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition">{faq.question}</h3>
                      <svg className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="mt-2 text-gray-600">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
}
/*import Footer from "@/components/Footer";

export default function ContactPage() {
    return (
        <div>
      <section className="min-h-screen bg-gray-100 py-12 px-3 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white shadow-lg rounded-lg p-3">
          {/* Left Section *
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Contact Us</h2>
            <p className="text-gray-600 mb-4">Reach out to us through any of the options below.</p>
            
            <div className="mb-6">
              <p className="text-lg font-semibold text-gray-800">Phone:</p>
              <p className="text-gray-600">+2547 185 486 95</p>
              <p className="text-gray-600">+2547 021 152 77</p>
            </div>
  
            <div className="mb-6">
              <p className="text-lg font-semibold text-gray-800">Email:</p>
              <p className="text-gray-600">sales@malexsupplies.com</p>
              <p className="text-gray-600">alex@malexsupplies.com</p>
            </div>
  
            <div className="mb-6">
              <p className="text-lg font-semibold text-gray-800">Follow Us:</p>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
                <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
                <a href="#" className="text-blue-600 hover:text-blue-800">Instagram</a>
              </div>
            </div>
          </div>
  
          {/* Right Section - Contact Form *
          <div className="bg-gray-50 p-3 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-600" />
              <input type="email" placeholder="Email" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-600" />
              <textarea placeholder="Your Message"  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-600"></textarea>
              <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">Send Message</button>
            </form>
          </div>
        </div>
  
        {/* Location Section *
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 bg-white shadow-lg rounded-lg p-3 mt-3">
          {/* Left - Map *
          <div className="w-full h-[400px] lg:h-[550px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8189881284225!2d36.822488075827444!3d-1.2824046356236611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11d5366d37f9%3A0xc72de9b7a73c5626!2sGreen%20Court%20Hotel!5e0!3m2!1sen!2ske!4v1741252292109!5m2!1sen!2ske"
              className="w-full h-full rounded-lg"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Right - Location Description *
          <div className="flex flex-col justify-center lg:pl-10 space-y-3">
            <h3 className="text-2xl font-semibold text-gray-900">Our Location</h3>
            <p className="text-gray-600">Hotel Green Court Building</p>
            <p className="text-gray-600">5th Floor</p>
            <p className="text-gray-600">Latema Road, Nairobi.</p>
            <p className="text-gray-600">Kenya.</p>
          </div>
        </div>
        {/* FAQ Section *
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-3 mt-3 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left - FAQ Title *
          <div className="flex items-center">
            <h3 className="text-3xl font-bold text-gray-900">Do you have any Questions for us?</h3>
          </div>
          {/* Right - FAQ List *
          <div className="space-y-4">
            <details className="border-b border-gray-200 py-4">
              <summary className="text-lg text-gray-600 font-semibold cursor-pointer">What chemicals do you supply?</summary>
              <p className="text-gray-600 mt-2">We supply a wide range of industrial and laboratory chemicals, including solvents, acids, and specialty compounds.</p>
            </details>
            <details className="border-b border-gray-200 py-4">
              <summary className="text-lg text-gray-600 font-semibold cursor-pointer">Are your chemicals safe for use?</summary>
              <p className="text-gray-600 mt-2">Yes, all our chemicals comply with safety regulations, and we provide proper handling guidelines.</p>
            </details>
            <details className="border-b border-gray-200 py-4">
              <summary className="text-lg text-gray-600 font-semibold cursor-pointer">Do you offer bulk purchasing options?</summary>
              <p className="text-gray-600 mt-2">Yes, we offer bulk pricing and discounts for large orders.</p>
            </details>
            <details className="border-b border-gray-200 py-4">
              <summary className="text-lg text-gray-600 font-semibold cursor-pointer">How do you ensure product quality?</summary>
              <p className="text-gray-600 mt-2">We source from reputable manufacturers and conduct thorough quality checks.</p>
            </details>
            <details className="border-b border-gray-200 py-4">
              <summary className="text-lg text-gray-600 font-semibold cursor-pointer">Can I get a consultation before purchasing?</summary>
              <p className="text-gray-600 mt-2">Absolutely! Our experts are available to guide you on the best chemical solutions for your needs.</p>
            </details>
          </div>
        </div>
      </section>
      <Footer />
      </div>
    );
  }*/
  