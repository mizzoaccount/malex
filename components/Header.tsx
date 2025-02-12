/*import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="w-full bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        {/* Left Side: Social Media Icons *
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="text-xl hover:text-blue-600">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" className="text-xl hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" className="text-xl hover:text-pink-600">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" className="text-xl hover:text-blue-700">
            <FaLinkedin />
          </a>
        </div>

        {/* Middle: Free Shipping Text *
        <div className="text-lg font-semibold">
          Free Shipping This Week
        </div>

        {/* Right Side: Select Buttons for Currency and Language *
        <div className="flex space-x-4">
          <select className="bg-gray-700 text-white py-1 px-2 rounded-md">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
          <select className="bg-gray-700 text-white py-1 px-2 rounded-md">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;*/

// components/Header.tsx




/*"use client";
import { useState, useEffect } from 'react';
import { IoCloseOutline, IoMenuOutline, IoLogoTwitter, IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io5';
import { IoLogoDribbble } from 'react-icons/io';
import Image from 'next/image';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderFixed(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const socialLinks = [
    { icon: <IoLogoTwitter />, url: '#' },
    { icon: <IoLogoFacebook />, url: '#' },
    { icon: <IoLogoDribbble />, url: '#' },
    { icon: <IoLogoInstagram />, url: '#' },
    { icon: <IoLogoYoutube />, url: '#' },
  ];

  const navLinks = ['Home', 'About', 'Projects', 'Blog', 'Contact'];

  return (
    <header className={`${isHeaderFixed ? 'fixed bg-white animate-slideIn' : 'absolute'} w-full top-0 z-40 shadow-lg`}>
      <div className="container mx-auto px-4 flex justify-between items-center py-5">
        {/* Logo *
        <a href="#" className="logo">
          {isHeaderFixed ? (
            <Image src="https://raw.githubusercontent.com/codewithsadee/adex/9cb717198b2bf09bcb585c29328d1f9e4b61f2ba/assets/images/logo-dark.svg" width={74} height={24} alt="Adex home" />
          ) : (
            <Image src="https://raw.githubusercontent.com/codewithsadee/adex/9cb717198b2bf09bcb585c29328d1f9e4b61f2ba/assets/images/logo-light.svg" width={74} height={24} alt="Adex home" />
          )}
        </a>

        {/* Mobile Menu Button *
        <button
          onClick={toggleNav}
          className={`text-3xl ${isHeaderFixed ? 'text-gray-800' : 'text-white'} lg:hidden`}
          aria-label="open menu"
        >
          <IoMenuOutline />
        </button>

        {/* Desktop CTA Button *
        <a href="#" className="hidden lg:inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
          Free Trial
        </a>

        {/* Navigation Overlay *
        <div
          className={`fixed inset-0 bg-black transition-opacity ${isNavOpen ? 'opacity-80 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={toggleNav}
        />

        {/* Mobile Navigation *
        <nav className={`fixed top-0 left-0 w-72 h-screen bg-gray-800 text-white p-8 flex flex-col gap-8 z-50 transform transition-transform ${isNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-between items-center">
            <Image src="https://raw.githubusercontent.com/codewithsadee/adex/9cb717198b2bf09bcb585c29328d1f9e4b61f2ba/assets/images/logo-light.svg" width={74} height={24} alt="Adex home" />
            <button
              onClick={toggleNav}
              className="text-2xl bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors"
              aria-label="close menu"
            >
              <IoCloseOutline />
            </button>
          </div>

          <ul className="flex flex-col gap-4 flex-grow">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-blue-400 transition-colors py-2 block">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="space-y-2">
            <a href="mailto:info@email.com" className="block hover:text-blue-400 transition-colors">
              info@email.com
            </a>
            <a href="tel:001234567890" className="block hover:text-blue-400 transition-colors">
              00 (123) 456 78 90
            </a>
          </div>

          <ul className="flex gap-4 text-2xl">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <a href={social.url} className="hover:text-blue-400 transition-colors">
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
*/



/*"use client";

import { useState, useEffect } from "react";
import {
  IoCloseOutline,
  IoMenuOutline,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io5";
import { IoLogoDribbble } from "react-icons/io";
import Image from "next/image";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderFixed(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const socialLinks = [
    { icon: <IoLogoTwitter />, url: "#" },
    { icon: <IoLogoFacebook />, url: "#" },
    { icon: <IoLogoDribbble />, url: "#" },
    { icon: <IoLogoInstagram />, url: "#" },
    { icon: <IoLogoYoutube />, url: "#" },
  ];

  const navLinks = ["Home", "About", "Projects", "Blog", "Contact"];

  return (
    <header
      className={`w-full top-0 z-40 transition-all  ${
        isHeaderFixed ? "fixed bg-white animate-slideIn" : "absolute"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-5">
        {/* Logo *
        <a href="#" className="logo">
          <Image
            src={
              isHeaderFixed
                ? "https://raw.githubusercontent.com/codewithsadee/adex/9cb717198b2bf09bcb585c29328d1f9e4b61f2ba/assets/images/logo-dark.svg"
                : "https://raw.githubusercontent.com/codewithsadee/adex/9cb717198b2bf09bcb585c29328d1f9e4b61f2ba/assets/images/logo-light.svg"
            }
            width={74}
            height={24}
            alt="Adex home"
          />
        </a>

        {/* Mobile Menu Button *
        <button
          onClick={toggleNav}
          className={`text-3xl lg:hidden transition-colors ${
            isHeaderFixed ? "text-gray-800" : "text-white"
          }`}
          aria-label="open menu"
        >
          <IoMenuOutline />
        </button>

        {/* Desktop CTA Button *
        <a
          href="#"
          className="hidden lg:inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
        >
          Free Trial
        </a>

        {/* Navigation Overlay *
        {isNavOpen && (
          <div
            className="fixed inset-0 bg-black opacity-80 transition-opacity"
            onClick={toggleNav}
          />
        )}

        {/* Mobile Navigation *
        <nav
          className={`fixed top-0 left-0 w-72 h-screen bg-gray-800 text-white p-8 flex flex-col gap-8 z-50 transform transition-transform ${
            isNavOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center">
            <Image
              src="https://raw.githubusercontent.com/codewithsadee/adex/9cb717198b2bf09bcb585c29328d1f9e4b61f2ba/assets/images/logo-light.svg"
              width={74}
              height={24}
              alt="Adex home"
            />
            <button
              onClick={toggleNav}
              className="text-2xl bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors"
              aria-label="close menu"
            >
              <IoCloseOutline />
            </button>
          </div>

          <ul className="flex flex-col gap-4 flex-grow">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-blue-400 transition-colors py-2 block">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="space-y-2">
            <a href="mailto:info@email.com" className="block hover:text-blue-400 transition-colors">
              info@email.com
            </a>
            <a href="tel:001234567890" className="block hover:text-blue-400 transition-colors">
              00 (123) 456 78 90
            </a>
          </div>

          <ul className="flex gap-4 text-2xl">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <a href={social.url} className="hover:text-blue-400 transition-colors">
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}


/*"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 py-5 ${
      isScrolled ? 'bg-white shadow-lg fixed animate-slideIn' : 'absolute'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo *
        <Link href="/" className="logo">
          {isScrolled ? (
            <img src="https://raw.githubusercontent.com/codewithsadee/adex/9cb717198b2bf09bcb585c29328d1f9e4b61f2ba/assets/images/logo-dark.svg" width={74} height={24} alt="Adex home" />
          ) : (
            <img src="https://raw.githubusercontent.com/codewithsadee/adex/9cb717198b2bf09bcb585c29328d1f9e4b61f2ba/assets/images/logo-light.svg" width={74} height={24} alt="Adex home" />
          )}
        </Link>

        {/* Desktop Navigation *
        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="#" className={`${
            isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
          } transition-colors`}>
            Home
          </Link>
          <Link href="#" className={`${
            isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
          } transition-colors`}>
            About
          </Link>
          <Link href="#" className={`${
            isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
          } transition-colors`}>
            Projects
          </Link>
          <Link href="#" className={`${
            isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
          } transition-colors`}>
            Blog
          </Link>
          <Link href="#" className={`${
            isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
          } transition-colors`}>
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button *
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Free Trial Button (Desktop) *
        <button className="hidden lg:inline-block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
          Free Trial
        </button>

        {/* Mobile Menu Overlay *
        <div className={`fixed inset-0 bg-black bg-opacity-80 z-50 transition-opacity ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} onClick={() => setIsMenuOpen(false)} />

        {/* Mobile Navigation Drawer *
        <nav className={`fixed top-0 left-0 h-full w-72 bg-gray-900 text-white z-50 transform transition-transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="p-6 border-b border-gray-800 flex justify-between items-center">
            <img src="/assets/images/logo-light.svg" width={74} height={24} alt="Adex home" />
            <button
              className="p-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <Link href="#" className="block hover:text-blue-400 transition-colors">Home</Link>
              <Link href="#" className="block hover:text-blue-400 transition-colors">About</Link>
              <Link href="#" className="block hover:text-blue-400 transition-colors">Projects</Link>
              <Link href="#" className="block hover:text-blue-400 transition-colors">Blog</Link>
              <Link href="#" className="block hover:text-blue-400 transition-colors">Contact</Link>
            </div>

            <div className="pt-8 border-t border-gray-800 space-y-4">
              <a href="mailto:info@email.com" className="block hover:text-blue-400 transition-colors">
                info@email.com
              </a>
              <a href="tel:001234567890" className="block hover:text-blue-400 transition-colors">
                00 (123) 456 78 90
              </a>
            </div>

            <div className="flex space-x-4 pt-8 border-t border-gray-800">
              {['twitter', 'facebook', 'dribbble', 'instagram', 'youtube'].map((social) => (
                <a key={social} href="#" className="hover:text-blue-400 transition-colors">
                  {/* Replace with actual icons *
                  <span className="sr-only">{social}</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    {/* Add appropriate icon paths *
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>

      <style jsx global>{`
        @keyframes slideIn {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(0); }
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;*/


// components/Header.tsx
/*"use client";
import { useState, useEffect } from 'react';
import { IoCloseOutline, IoMenuOutline, IoLogoTwitter, IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io5';
import { IoLogoDribbble } from 'react-icons/io';
import Image from 'next/image';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsHeaderFixed(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const socialLinks = [
    { icon: <IoLogoTwitter />, url: '#' },
    { icon: <IoLogoFacebook />, url: '#' },
    { icon: <IoLogoDribbble />, url: '#' },
    { icon: <IoLogoInstagram />, url: '#' },
    { icon: <IoLogoYoutube />, url: '#' },
  ];

  const navLinks = ['Home', 'About', 'Projects', 'Blog', 'Contact'];

  // Desktop navigation links with responsive colors
  const DesktopNav = () => (
    <nav className="hidden lg:flex items-center gap-8">
      {navLinks.map((link) => (
        <a
          key={link}
          href="#"
          className={`text-sm font-semibold transition-colors ${
            isHeaderFixed 
              ? 'text-gray-800 hover:text-blue-600' 
              : 'text-white hover:text-blue-400'
          }`}
        >
          {link}
        </a>
      ))}
    </nav>
  );

  // Mobile navigation links
  const MobileNav = () => (
    <nav className={`fixed top-0 left-0 w-72 h-screen bg-gray-800 text-white p-8 flex flex-col gap-8 z-50 transform transition-transform ${
      isNavOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
      <div className="flex justify-between items-center">
        <Image src="https://raw.githubusercontent.com/codewithsadee/adex/9cb717198b2bf09bcb585c29328d1f9e4b61f2ba/assets/images/logo-light.svg" width={74} height={24} alt="Adex home" />
        <button
          onClick={toggleNav}
          className="text-2xl bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors"
          aria-label="close menu"
        >
          <IoCloseOutline />
        </button>
      </div>

      <ul className="flex flex-col gap-4 flex-grow">
        {navLinks.map((link) => (
          <li key={link}>
            <a href="#" className="hover:text-blue-400 transition-colors py-2 block">
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div className="space-y-2">
        <a href="mailto:info@email.com" className="block hover:text-blue-400 transition-colors">
          info@email.com
        </a>
        <a href="tel:001234567890" className="block hover:text-blue-400 transition-colors">
          00 (123) 456 78 90
        </a>
      </div>

      <ul className="flex gap-4 text-2xl">
        {socialLinks.map((social, index) => (
          <li key={index}>
            <a href={social.url} className="hover:text-blue-400 transition-colors">
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <header className={`${isHeaderFixed ? 'fixed bg-white animate-slideIn' : 'absolute'} w-full top-0 z-40 `}>
      <div className="container mx-auto px-4 flex justify-between items-center py-5">
        {/* Logo *
        <a href="#" className="logo">
          <Image 
            src={isHeaderFixed ? "https://raw.githubusercontent.com/codewithsadee/adex/9cb717198b2bf09bcb585c29328d1f9e4b61f2ba/assets/images/logo-dark.svg" : "https://raw.githubusercontent.com/codewithsadee/adex/9cb717198b2bf09bcb585c29328d1f9e4b61f2ba/assets/images/logo-light.svg"} 
            width={74} 
            height={24} 
            alt="Adex home" 
          />
        </a>

        <div className="flex items-center gap-8">
          <DesktopNav />
          
          {/* Desktop CTA Button *
          <a href="#" className="hidden lg:inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
            Free Trial
          </a>

          {/* Mobile Menu Button *
          <button
            onClick={toggleNav}
            className={`text-3xl ${isHeaderFixed ? 'text-gray-800' : 'text-white'} lg:hidden`}
            aria-label="open menu"
          >
            <IoMenuOutline />
          </button>
        </div>

        {/* Navigation Overlay *
        <div
          className={`fixed inset-0 bg-black transition-opacity ${
            isNavOpen ? 'opacity-80 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={toggleNav}
        />

        <MobileNav />
      </div>
    </header>
  );
}*/

// components/Header.tsx
"use client";
import { useState, useEffect } from 'react';
import { IoCloseOutline, IoMenuOutline, IoLogoTwitter, IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io5';
import { IoLogoDribbble } from 'react-icons/io';
import { UserPlus, Shield } from "lucide-react";
import Link from "next/link";


export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderFixed(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const socialLinks = [
    { icon: <IoLogoTwitter />, url: '#' },
    { icon: <IoLogoFacebook />, url: '#' },
    { icon: <IoLogoDribbble />, url: '#' },
    { icon: <IoLogoInstagram />, url: '#' },
    { icon: <IoLogoYoutube />, url: '#' },
  ];

  const navLinks = ['Home', 'About', 'Products','Catalogue', 'Blog', 'Contact'];

  return (
    <header className={`${isHeaderFixed ? 'fixed bg-white shadow-md animate-slideIn' : 'absolute'} w-full top-0 z-40 transition-all`}>
      <div className="container mx-auto px-4 flex justify-between items-center py-5">
        {/* Logo */}
        {/*<a href="#">
          <Image
            src={isHeaderFixed ? 
              "https://raw.githubusercontent.com/codewithsadee/adex/9cb717198b2bf09bcb585c29328d1f9e4b61f2ba/assets/images/logo-dark.svg" :
              "https://raw.githubusercontent.com/codewithsadee/adex/9cb717198b2bf09bcb585c29328d1f9e4b61f2ba/assets/images/logo-light.svg"}
            width={74}
            height={24}
            alt="Adex home"
          />
        </a>*/}
        <a href="#">
          <span style={{ fontFamily: 'Arial', fontSize: '1.5rem', fontWeight: 'bold', color: isHeaderFixed ? '#333' : '#fff' }}>
            Malex
          </span>
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 ml-auto mr-8">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href="#" 
              className={`${isHeaderFixed ? 'text-black' : 'text-white'} hover:text-blue-600 transition-colors`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
      <div className='flex items-center'>
        <a href="#" className="hidden lg:flex items-center gap-2 bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
          <UserPlus size={18} /> Register
        </a>
        <Link
          href="/admin"
          className="hidden lg:flex items-center gap-2 bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors mx-3"
        >
          <Shield size={18} /> Admin
        </Link>;
      </div>
       {/* Mobile Menu Button */}
        <button
          onClick={toggleNav}
          className={`text-3xl lg:hidden ${isHeaderFixed ? 'text-gray-800' : 'text-white'}`}
          aria-label="open menu"
        >
          <IoMenuOutline />
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity ${isNavOpen ? 'opacity-80 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleNav}
      />

      {/* Mobile Navigation */}
      <nav className={`fixed top-0 left-0 w-72 h-screen bg-gray-800 text-white p-8 flex flex-col gap-8 z-50 transform transition-transform ${isNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
       {/*<div className="flex justify-between items-center">
          <Image src="https://raw.githubusercontent.com/codewithsadee/adex/9cb717198b2bf09bcb585c29328d1f9e4b61f2ba/assets/images/logo-light.svg" width={74} height={24} alt="Adex home" />
          <button onClick={toggleNav} className="text-2xl bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors" aria-label="close menu">
            <IoCloseOutline />
          </button>
        </div>*/}
        <div className="flex justify-between items-center">
        <span className="text-xl font-bold text-white">Malex</span>
        <button
          onClick={toggleNav}
          className="text-2xl bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors"
          aria-label="close menu"
        >
          <IoCloseOutline />
        </button>
      </div>
        <ul className="flex flex-col gap-4 flex-grow">
          {navLinks.map((link) => (
            <li key={link}>
              <a href="#" className="text-white hover:text-blue-400 transition-colors py-2 block">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="space-y-2">
          <a href="mailto:info@email.com" className="block hover:text-blue-400 transition-colors">
            info@email.com
          </a>
          <a href="tel:001234567890" className="block hover:text-blue-400 transition-colors">
            00 (123) 456 78 90
          </a>
        </div>

        <ul className="flex gap-4 text-2xl">
          {socialLinks.map((social, index) => (
            <li key={index}>
              <a href={social.url} className="hover:text-blue-400 transition-colors">
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <style jsx global>{`
        @keyframes slideIn {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(0); }
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease forwards;
        }
      `}</style>
    </header>
  );
}
