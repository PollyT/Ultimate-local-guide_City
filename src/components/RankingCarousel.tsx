import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Attraction, Activity } from '../types';
import { cn } from '../lib/utils';

interface RankingCarouselProps {
  title: string;
  subtitle?: string;
  items: (Attraction | Activity)[];
  type: 'attraction' | 'activity';
}

export const RankingCarousel: React.FC<RankingCarouselProps> = ({ title, subtitle, items, type }) => {
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
  }, [items]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / (clientWidth / (clientWidth < 768 ? 1 : 3)));
      setActiveIndex(Math.min(index, items.length - 1));
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
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
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
            {items.map((item, index) => (
              <motion.div 
                key={item.id}
                whileHover={{ y: -10 }}
                className="flex-shrink-0 w-[280px] md:w-[320px] snap-start group"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-lg bg-white border border-gray-100 h-full flex flex-col">
                  {/* Image & Rank Badge */}
                  <div className="relative h-56 overflow-hidden pointer-events-none">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-[#0066FF] text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>
                    {type === 'activity' && 'price' in item && (
                      <div className="absolute bottom-4 right-4 bg-[#FF9900] text-white px-4 py-2 rounded-xl font-extrabold shadow-lg z-10">
                        From ${item.price}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col pointer-events-none">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-1 text-[#FF9900]">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-bold">{item.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400">
                        <MessageSquare className="w-4 h-4" />
                        <span className="text-xs">{item.reviews.toLocaleString()} reviews</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0066FF] transition-colors">
                      {item.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm line-clamp-2 mb-6 flex-1">
                      {'description' in item ? item.description : 'Experience the best of Tokyo with this top-rated activity.'}
                    </p>

                    <button className="w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-[#0066FF] hover:text-white text-[#0066FF] py-3 rounded-xl font-bold transition-all border border-[#0066FF]/10 hover:border-[#0066FF] pointer-events-auto">
                      {type === 'attraction' ? 'View Article' : 'Book Now'}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                activeIndex === index ? "bg-[#0066FF] w-6" : "bg-gray-200 hover:bg-gray-300"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
