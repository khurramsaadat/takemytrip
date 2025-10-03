"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const heroImages = [
  { src: "hero.jpg", isDark: true },      // Desert with camel caravan - darker image
  { src: "hero2.jpg", isDark: true },     // Desert camp - darker image
  { src: "hero3.jpg", isDark: true },     // Hot air balloon - darker image (corrected)
  { src: "hero4.jpg", isDark: true },     // Quad biking - darker desert
  { src: "hero5.jpg", isDark: true }      // Falcon show - darker scene
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Get current image data
  const currentImage = heroImages[currentImageIndex];
  const textColorClass = currentImage.isDark ? 'text-white' : 'text-black';

  // Swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }
    if (isRightSwipe) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length);
    }
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className={`relative h-[80vh] flex items-center justify-center text-center overflow-hidden ${textColorClass}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Image Slider */}
      <div className="absolute inset-0">
        {heroImages.map((imageData, index) => (
          <div
            key={imageData.src}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentImageIndex 
                ? 'translate-x-0' 
                : index < currentImageIndex 
                  ? '-translate-x-full' 
                  : 'translate-x-full'
            }`}
          >
            <Image
              src={`/images/${imageData.src}`}
              alt={`Desert Safari Experience ${index + 1}`}
              fill
              sizes="100vw"
              priority={index === 0}
              quality={100}
              className="object-cover"
              style={{ objectPosition: 'center 60%' }}
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-0 z-10"></div>

      {/* Content */}
      <div className="relative z-20 p-4 transition-colors duration-1000">
        <h1 className={`text-2xl md:text-5xl font-bold mb-4 transition-colors duration-1000 ${
          currentImage.isDark 
            ? 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-shadow-lg' 
            : 'drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]'
        }`}>
          Discover Dubai Like Never Before
        </h1>
        <p className={`text-sm md:text-xl mb-8 transition-colors duration-1000 ${
          currentImage.isDark 
            ? 'drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]' 
            : 'drop-shadow-[0_1px_3px_rgba(255,255,255,0.8)]'
        }`}>
          From thrilling desert safaris to luxurious dhow cruises
        </p>
        <Link href="/tours" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full text-sm md:text-lg transition duration-300 shadow-lg">
          Explore Our Tours
        </Link>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? "bg-white scale-110" 
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}