// components/Header.tsx
"use client";
import { useState, useEffect } from 'react';
import { IoCloseOutline, IoMenuOutline, IoLogoTwitter, IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io5';
import { IoLogoDribbble } from 'react-icons/io';
import { UserPlus, Shield } from "lucide-react";
import Link from "next/link";


export default function HeaderTwo() {
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

  const navLinks = ['About', 'Products','Catalogue', 'Contact'];

  return (
    <header className={`${isHeaderFixed ? 'fixed bg-white shadow-md animate-slideIn' : 'absolute bg-[#447bfe]'} w-full top-0 z-40 transition-all`}>
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
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
        <a href="/">
          <span style={{ fontFamily: 'Arial', fontSize: '1.5rem', fontWeight: 'bold', color: isHeaderFixed ? '#333' : '#fff' }}>
            Malex
          </span>
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 ml-auto mr-8">
          {navLinks.map((link) => (
               <Link key={link} href={`/${link.toLowerCase()}`} className={`${isHeaderFixed ? 'text-black' : 'text-white'} hover:text-blue-600 transition-colors`}>
               {link}
             </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
      <div className='flex items-center'>
        <a href="#" className="hidden lg:flex items-center gap-2 bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
          <UserPlus size={18} /> Register
        </a>
        {/*<Link
          href="/admin"
          className="hidden lg:flex items-center gap-2 bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors mx-3"
        >
          <Shield size={18} /> Admin
        </Link>*/}
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
                <Link key={link} href={`/${link.toLowerCase()}`} className={`${isHeaderFixed ? 'text-black' : 'text-white'} hover:text-blue-600 transition-colors`}>
           {link}
         </Link>
            </li>
          ))}
        </ul>

        <div className="space-y-2">
          <a href="mailto:info@email.com" className="block hover:text-blue-400 transition-colors">
          sales@malexchemsupplies.com
          </a>
          <a href="tel:001234567890" className="block hover:text-blue-400 transition-colors">
          +(254)7 185 486 95
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
