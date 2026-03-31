import React, { useRef, useState, useEffect } from 'react';
import { Clock, ArrowRight, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { ITINERARY_IDEAS } from '../data';

export const ItinerarySection: React.FC = () => {
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
      const itemWidth = clientWidth < 768 ? 320 + 32 : 400 + 32;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(index, ITINERARY_IDEAS.length - 1));
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const itemWidth = clientWidth < 768 ? 320 + 32 : 400 + 32;
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
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Itinerary Ideas</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Plan your perfect trip with our curated itineraries, designed to help you make the most of your time in Tokyo.
        </p>
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
            className="flex gap-8"
          >
            {ITINERARY_IDEAS.map((itinerary) => (
              <motion.div 
                key={itinerary.id}
                whileHover={{ y: -10 }}
                className="flex-shrink-0 w-[320px] md:w-[400px] snap-start group"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-lg bg-white border border-gray-100 h-[600px] flex flex-col">
                  {/* Image Background */}
                  <div className="absolute inset-0 h-1/2 pointer-events-none">
                    <img 
                      src={itinerary.image} 
                      alt={itinerary.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative mt-auto p-8 bg-white flex-1 flex flex-col pointer-events-none">
                    <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-xl text-xs font-bold text-[#0066FF] mb-4 w-fit">
                      <Clock className="w-4 h-4" />
                      {itinerary.duration}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0066FF] transition-colors">
                      {itinerary.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                      {itinerary.description}
                    </p>

                    {/* Agenda List */}
                    <div className="space-y-4 flex-1">
                      <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Daily Agenda</p>
                      {itinerary.agenda.map((day) => (
                        <div key={day.day} className="flex gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-[10px] font-bold text-gray-400 border border-gray-100">
                            D{day.day}
                          </div>
                          <div className="flex-1">
                            <ul className="space-y-1">
                              {day.activities.map((activity, idx) => (
                                <li key={idx} className="text-xs text-gray-600 flex items-center gap-1.5">
                                  <div className="w-1 h-1 rounded-full bg-[#0066FF]" />
                                  {activity}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button className="mt-6 flex items-center justify-center gap-2 w-full bg-gray-50 hover:bg-[#0066FF] hover:text-white text-[#0066FF] py-3 rounded-xl font-bold transition-all border border-[#0066FF]/10 pointer-events-auto">
                      View Full Guide <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {ITINERARY_IDEAS.map((_, index) => (
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
