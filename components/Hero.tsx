/*import Image from "next/image";
import FloatingMenu from "./FloatingMenu";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white min-h-screen py-2">
      {/* Floating Menu *
      <FloatingMenu />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 h-[400px]">
  {/* Left Side - Text Content *
  <div className="text-center md:text-left max-w-lg">
    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
      Elevate Your Experience
    </h1>
    <p className="mt-4 text-lg md:text-xl">
      Discover amazing features and take your journey to the next level.
    </p>
    <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-full shadow-lg hover:bg-gray-200 transition">
      Get Started
    </button>
  </div>

  {/* Right Side - Image *
  <div className="mt-10 md:mt-0">
    <Image
      src="https://i.pinimg.com/736x/56/9b/da/569bda72c6a2e3bbeb44e65091a71cc6.jpg"
      alt="Hero Illustration"
      width={200}
      height={80}
    />
  </div>
</div>

      {/* Curvy Dividers *
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#e0e0e0"
          fillOpacity="1"
          d="M0,160L48,170.7L96,181,192,203,288,186.7L384,171,480,117,576,96L672,75,768,85,864,117.3L960,149,1056,203,1152,208L1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320L1344,320,1248,320,1152,320L1056,320,960,320,864,320L768,320,672,320,576,320L480,320,384,320,288,320L192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <svg
        className="absolute bottom-[-10px] left-0 w-full"
        viewBox="0 0 1440 320"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#000"
          fillOpacity="1"
          d="M0,160L48,170.7L96,181,192,203,288,186.7L384,171,480,117,576,96L672,75,768,85,864,117.3L960,149,1056,203,1152,208L1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320L1344,320,1248,320,1152,320L1056,320,960,320,864,320L768,320,672,320,576,320L480,320,384,320,288,320L192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <svg
        className="absolute bottom-[-20px] left-0 w-full"
        viewBox="0 0 1440 320"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,160L48,170.7L96,181,192,203,288,186.7L384,171,480,117,576,96L672,75,768,85,864,117.3L960,149,1056,203,1152,208L1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320L1344,320,1248,320,1152,320L1056,320,960,320,864,320L768,320,672,320,576,320L480,320,384,320,288,320L192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Hero;*/

// components/Hero.tsx


/*"use client";
import { useState, useEffect } from 'react';
import { IoPlay, IoArrowBack, IoArrowForward } from 'react-icons/io5';
import Image from 'next/image';

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    { image: 'https://github.com/codewithsadee/adex/blob/master/assets/images/hero-slide-1.jpg?raw=true' },
    { image: 'https://github.com/codewithsadee/adex/blob/master/assets/images/hero-slide-2.jpg?raw=true', hasPlayButton: true },
    { image: 'https://github.com/codewithsadee/adex/blob/master/assets/images/hero-slide-3.jpg?raw=true' },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section 
      className="relative bg-[url('https://github.com/codewithsadee/adex/blob/master/assets/images/hero-bg.jpg?raw=true')] bg-cover bg-center pt-[calc(5rem + 70px)] pb-20 text-center"
      aria-label="home"
    >
      <div className="container mx-auto px-4 grid gap-16">
        {/* Hero Content *
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Crafting project specific solutions with expertise.
          </h1>
          <p className="text-lg text-white mb-8 opacity-90">
            We're a creative company that focuses on establishing long-term relationships with customers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
              Explore Now
            </a>
            <a href="#" className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-colors">
              Contact Us
            </a>
          </div>
        </div>

        {/* Hero Slider *
        <div className="relative overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full relative aspect-[575/550]">
                <Image
                  src={slide.image}
                  alt={`Hero slide ${index + 1}`}
                  fill
                  className="object-cover"
                />
                {slide.hasPlayButton && (
                  <button 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-gray-900 p-6 rounded-full hover:text-blue-600 transition-colors animate-pulse"
                    aria-label="Play intro video"
                  >
                    <IoPlay className="text-3xl" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Slider Controls *
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 text-gray-900 p-3 rounded-full hover:bg-white transition-colors"
            aria-label="Previous slide"
          >
            <IoArrowBack className="text-2xl" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 text-gray-900 p-3 rounded-full hover:bg-white transition-colors"
            aria-label="Next slide"
          >
            <IoArrowForward className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
}
*/




"use client"
import { useState } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    
    { image: 'https://i.pinimg.com/736x/bb/74/ee/bb74eeb1fdeab54ae029d19ca30bfc0d.jpg', hasPlayButton: false },
    { image: 'https://i.pinimg.com/736x/40/ec/49/40ec494e0006d519f737ff90f735512f.jpg', hasPlayButton: true },
    { image: 'https://i.pinimg.com/736x/7f/85/1e/7f851ea18f901194d8511dd2fef39773.jpg', hasPlayButton: false },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section 
      className="relative bg-cover bg-center pt-[calc(110px+30px)] lg:pt-[calc(90px+10px)]"
      style={{ backgroundImage: "url('/assets/images/Untitled.png')" }} 
    >
      {/*<div className="container mx-auto px-16 py-16 pt-0">*/}
      <div className="container mx-auto p-4 sm:p-16 pt-0 sm:mb-16 sm:mt-0">

        <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          {/* Content Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-white lg:text-5xl xl:text-6xl">
              Chemicals & Tools You Trust.
            </h1>
            <p className="my-6 text-lg text-white md:text-xl lg:my-8 lg:pr-20">
              Your trusted source of premium lab chemicals and precision tools, we've got your lab covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <button className="rounded-full bg-white px-8 py-3 text-blue-600 hover:bg-gray-200">
                Explore Now
              </button>
              <button className="rounded-full border-2 border-white px-8 py-3 text-white hover:border-blue-400 hover:text-blue-400">
                Contact Us
              </button>
            </div>
          </div>

          {/* Slider Section */}
          <div className="relative overflow-hidden rounded-xl">
            <div className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full">
                  <div className="relative aspect-square w-full overflow-hidden md:aspect-[575/550]">
                    <img
                      src={slide.image}
                      alt={`Slide ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                    {slide.hasPlayButton && (
                      <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-white p-6 text-gray-800 hover:text-blue-600">
                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Controls */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-3 text-gray-800 hover:bg-white"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-3 text-gray-800 hover:bg-white"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
