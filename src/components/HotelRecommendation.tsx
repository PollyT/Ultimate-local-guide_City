import React, { useRef, useState, useEffect } from 'react';
import { Star, MapPin, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Hotel } from '../types';
import { motion } from 'motion/react';

interface HotelRecommendationProps {
  hotels: Hotel[];
}

export const HotelRecommendation: React.FC<HotelRecommendationProps> = ({ hotels }) => {
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
  }, [hotels]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const itemWidth = clientWidth < 768 ? 280 + 24 : 320 + 24;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(index, hotels.length - 1));
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const itemWidth = clientWidth < 768 ? 280 + 24 : 320 + 24;
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
    <section className="py-12 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Recommended Stays</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Top-rated hotels in Tokyo for every budget and style.</p>
        </div>

        <div className="relative group/carousel px-4 md:px-12">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white shadow-xl border border-gray-100 text-gray-400 hover:text-[#0066FF] hover:border-[#0066FF] transition-all hover:scale-110 hidden md:flex"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white shadow-xl border border-gray-100 text-gray-400 hover:text-[#0066FF] hover:border-[#0066FF] transition-all hover:scale-110 hidden md:flex"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <motion.div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="cursor-grab active:cursor-grabbing overflow-x-auto no-scrollbar snap-x snap-proximity pb-4"
          >
            <motion.div 
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="flex gap-6"
            >
              {hotels.map((hotel, index) => (
                <motion.div
                  key={hotel.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-[280px] md:w-[320px] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer flex flex-col snap-start border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden pointer-events-none">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {/* Rank Badge */}
                    <div className="absolute top-4 left-4 bg-[#0066FF] text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shadow-lg z-10">
                      {hotel.rank}
                    </div>
                    {/* Price Tag */}
                    <div className="absolute bottom-4 right-4 bg-[#FF9900] text-white px-4 py-2 rounded-xl font-extrabold text-sm z-10 shadow-lg">
                      From ${hotel.price}
                    </div>
                  </div>
                  <div className="p-5 flex-grow flex flex-col pointer-events-none">
                    <h3 className="font-bold text-gray-900 mb-1 line-clamp-1 text-lg">{hotel.name}</h3>
                    <div className="flex items-center gap-1 text-[#FF9900] mb-2">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="text-sm font-bold">{hotel.rating}/10</span>
                      <span className="text-gray-400 font-normal text-[11px]">({hotel.reviews.toLocaleString()} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 text-xs mb-4">
                      <MapPin className="w-3 h-3" />
                      {hotel.location}
                    </div>
                    
                    {/* Review Snippet */}
                    <div className="bg-gray-50 p-3 rounded-xl mb-6 relative">
                      <p className="text-xs text-gray-600 italic line-clamp-2 leading-relaxed">
                        "{hotel.review}"
                      </p>
                      <div className="absolute -top-2 left-4 w-3 h-3 bg-gray-50 rotate-45" />
                    </div>

                    <div className="mt-auto">
                      <button className="w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-[#0066FF] hover:text-white text-[#0066FF] py-3 rounded-xl font-bold transition-all border border-[#0066FF]/10 hover:border-[#0066FF] pointer-events-auto">
                        Book Now <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {hotels.map((_, index) => (
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
      </div>
    </section>
  );
};
