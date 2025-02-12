/*import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Section 1: Links *
        <div>
          <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
            <li><a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-gray-400">Terms of Service</a></li>
            <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>

        {/* Section 2: Social Media Links *
        <div>
          <h3 className="font-semibold text-xl mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-gray-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-gray-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-gray-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-gray-400" />
            </a>
          </div>
        </div>

        {/* Section 3: Contact Information *
        <div>
          <h3 className="font-semibold text-xl mb-4">Contact Us</h3>
          <p className="text-sm">
            Email: <a href="mailto:info@company.com" className="hover:text-gray-400">info@company.com</a>
          </p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>

        {/* Section 4: Copyright *
        <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex justify-center mt-6 sm:mt-0">
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;*/

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaDribbble, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Brand Section */}
        <div>
          <Link href="/">
            <Image src="/logo-light.svg" width={74} height={24} alt="Adex Home" />
          </Link>
          <p className="mt-4">&copy; 2024 Shaddyna. All rights reserved.</p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="text-white cursor-pointer hover:text-blue-500" />
            <FaTwitter className="text-white cursor-pointer hover:text-blue-400" />
            <FaDribbble className="text-white cursor-pointer hover:text-pink-400" />
            <FaInstagram className="text-white cursor-pointer hover:text-purple-500" />
            <FaYoutube className="text-white cursor-pointer hover:text-red-500" />
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-white text-lg mb-4">Get in Touch</h4>
          <p className="mb-2">Moonshine St. 14/05 Light City, London, United Kingdom</p>
          <Link href="mailto:info@email.com" className="block hover:text-blue-400">info@email.com</Link>
          <Link href="tel:001234567890" className="block hover:text-blue-400">00 (123) 456 78 90</Link>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="text-white text-lg mb-4">Our Newsletter</h4>
          <p>Subscribe to get our latest updates and deals.</p>
          <form className="relative mt-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-gray-800 text-white px-4 py-2 border border-gray-600 rounded-l focus:outline-none"
            />
            <button className="absolute right-0 top-0 h-full px-6 bg-blue-500 text-white font-bold rounded-r hover:bg-blue-600">
              Join
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

