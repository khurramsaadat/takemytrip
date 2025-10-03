"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const albumImages = [
  "a1.jpg", "a2.jpg", "a3.jpg", "a4.jpg", "a5.jpg", "a6.jpg", "a7.jpg", "a8.jpg", "a9.jpg",
  "b1.jpg", "b2.jpg", "b3.jpg", "b4.jpg", "b5.jpg", "b6.jpg", "b7.jpg", "b8.jpg", "b9.jpg"
];

export default function PhotoAlbum() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const imagesPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(albumImages.length / imagesPerSlide);

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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }
    if (isRightSwipe) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    }
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);


  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            Desert Dreams: A Gallery of Dubai Safari
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Set out on an unforgettable desert adventure with our expert-guided safari tours.
          </p>
          <div className="w-24 h-1 bg-orange-400 mx-auto mt-6"></div>
        </div>

        {/* Image Gallery */}
        <div 
          className="relative overflow-hidden rounded-lg"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className={`grid gap-0 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'}`}>
                  {albumImages
                    .slice(slideIndex * imagesPerSlide, (slideIndex + 1) * imagesPerSlide)
                    .map((image, imageIndex) => (
                      <div 
                        key={`${slideIndex}-${imageIndex}`} 
                        className="relative h-[38rem] rounded-lg overflow-hidden shadow-lg group"
                      >
                        <Image
                          src={`/images/album-slide/${image}`}
                          alt={`Desert Safari Experience ${slideIndex * imagesPerSlide + imageIndex + 1}`}
                          fill
                          sizes={isMobile ? "100vw" : "(max-width: 768px) 100vw, 33vw"}
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          quality={75}
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex 
                  ? "bg-orange-500" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Description Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-6">
            Dubai&apos;s Best Safari Experiences Curated Just for You
          </h3>
          <p className="text-gray-700 text-xs md:text-sm leading-relaxed max-w-4xl mx-auto mb-8">
            If you are looking for more than desert adventures in Dubai, Take My Trip is the best choice. As the premier Desert Safari Dubai experience provider, we offer a wide range of fun activities with an amazing desert safari adventure. Take My Trip offers various activity packages that also include pickup from your location. With cultural heritage, beautiful sceneries, fun thrills, and wildlife safari, Take My Trip provides a range of unforgettable tours.
          </p>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h4 className="text-lg md:text-2xl font-bold text-gray-800 mb-4">
              Best Desert Safari Dubai
            </h4>
            <p className="text-gray-700 text-xs md:text-base leading-relaxed">
              Take My Trip offers expert drivers to provide the best desert safari experience including pick and drop facilities. We deliver you with an exciting and memorable experience that will remain with you even after you get back to your home. As Dubai morning and evening desert safari have been in hotspot for all adventure lovers, we are here to deliver extremely fun activities. Along with this, we offer a range of Dubai Desert Safari including Private Evening Safari, Quad Bike, and Overnight Safari.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
