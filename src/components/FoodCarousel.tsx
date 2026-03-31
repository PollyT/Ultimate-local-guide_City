import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { FOOD_RECOMMENDATIONS } from '../data';

export const FoodCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (scrollRef.current) {
        setWidth(scrollRef.current.scrollWidth - scrollRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / (clientWidth / (clientWidth < 768 ? 1 : 3)));
      setActiveIndex(Math.min(index, FOOD_RECOMMENDATIONS.length - 1));
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const itemWidth = clientWidth < 768 ? clientWidth : clientWidth / 3;
      scrollRef.current.scrollTo({ left: index * itemWidth, behavior: 'smooth' });
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-hidden relative">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Food & Drinks</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover Tokyo's culinary delights, from street food to Michelin-starred dining.</p>
      </div>

      <div className="relative group/carousel px-4 md:px-12">
        {/* Navigation Buttons */}
        <button 
          onClick={() => scroll('left')} 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white shadow-xl border border-gray-100 text-gray-400 hover:text-[#0066FF] hover:border-[#0066FF] transition-all hover:scale-110 hidden md:flex"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={() => scroll('right')} 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white shadow-xl border border-gray-100 text-gray-400 hover:text-[#0066FF] hover:border-[#0066FF] transition-all hover:scale-110 hidden md:flex"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <motion.div 
          ref={scrollRef} 
          onScroll={handleScroll}
          className="cursor-grab active:cursor-grabbing overflow-x-auto no-scrollbar pb-8 snap-x snap-proximity"
        >
          <motion.div 
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-6"
          >
            {FOOD_RECOMMENDATIONS.map((food) => (
              <motion.div 
                key={food.id}
                whileHover={{ y: -5 }}
                className="flex-shrink-0 w-[280px] md:w-[320px] snap-start"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-lg bg-white border border-gray-100 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden pointer-events-none">
                    <img 
                      src={food.image} 
                      alt={food.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col pointer-events-none">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {food.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 flex-1">
                      {food.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {FOOD_RECOMMENDATIONS.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-[#0066FF] w-6" : "bg-gray-200 hover:bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
