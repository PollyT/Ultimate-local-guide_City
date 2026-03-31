import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1536220940574-714343ef4965?auto=format&fit=crop&q=80&w=2000',
];

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);

  return (
    <section className="w-full bg-white">
      {/* Carousel Container */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] lg:aspect-[3/1] w-full overflow-hidden group">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={HERO_IMAGES[currentIndex]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-white w-6' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>

      {/* Content Below Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-4"
        >
          Tokyo Things to Do
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed line-clamp-1"
        >
          Explore the best attractions, hidden gems, and unforgettable experiences in Japan's vibrant capital.
        </motion.p>
      </div>
    </section>
  );
};
