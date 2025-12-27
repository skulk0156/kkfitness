import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "STRENGTH & POWER",
    subtitle: "THE ULTIMATE FITNESS",
    backgroundImage: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    textColor: "text-white",
    buttonColor: "bg-red-500 hover:bg-red-600"
  },
  {
    id: 2,
    title: "POWERFUL BUILD",
    subtitle: "THE HEALTHY LIFE",
    backgroundImage: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    textColor: "text-white",
    buttonColor: "bg-orange-500 hover:bg-orange-600"
  },
  {
    id: 3,
    title: "ATHLETICISM",
    subtitle: "TRANSFORM YOUR BODY",
    backgroundImage: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    textColor: "text-white",
    buttonColor: "bg-green-500 hover:bg-green-600"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div 
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <div 
            className="h-full relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/20 animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-white/10 animate-bounce"></div>
              <div className="absolute top-3/4 left-1/3 w-48 h-48 rounded-full bg-white/5 animate-ping"></div>
            </div>

            {/* Geometric decorations */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 left-10 opacity-20">
                <div className="w-8 h-8 border-2 border-white transform rotate-45"></div>
              </div>
              <div className="absolute bottom-20 right-10 opacity-20">
                <div className="w-12 h-12 border-2 border-white transform rotate-12"></div>
              </div>
              <div className="absolute top-1/2 left-20 opacity-10">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <div className="absolute top-1/3 right-20 opacity-15">
                <div className="w-4 h-4 bg-white transform rotate-45"></div>
              </div>
              <div className="absolute top-1/4 right-1/3 opacity-20">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute bottom-1/3 left-1/4 opacity-15">
                <div className="w-5 h-5 border border-red-500 transform rotate-45"></div>
              </div>
              <div className="absolute top-2/3 right-1/4 opacity-10">
                <div className="w-8 h-8 border-2 border-orange-500 rounded-full"></div>
              </div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center z-10">
              <div className="text-center px-6 max-w-4xl mx-auto">
                <div className="mb-6 opacity-80">
                  <p className={`${slide.textColor} text-sm tracking-[0.2em] font-light animate-fade-in-up`}>
                    {slide.subtitle}
                  </p>
                </div>
                
                <h1 className={`${slide.textColor} text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-8 animate-fade-in-up animation-delay-200`}>
                  {slide.title.split(' ').map((word, i) => (
                    <span key={i} className="inline-block mx-2 transition-transform duration-300">
                      {word}
                    </span>
                  ))}
                </h1>

              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 z-20"
      >
        <ChevronLeft className="size-5 md:size-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 z-20"
      >
        <ChevronRight className="size-5 md:size-8" />
      </button>
    </div>
  );
};

export default HeroSlider;