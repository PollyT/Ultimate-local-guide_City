import React, { useRef, useState, useEffect } from 'react';
import { Train, Bus, Car, CreditCard, ShieldCheck, Wifi, Map, ArrowRight, ExternalLink, Info, Anchor, Smartphone, Lightbulb, ChevronLeft, ChevronRight, Plug, Wallet, Percent, CloudSun, CalendarDays } from 'lucide-react';
import { POPULAR_ARTICLES, OTHER_CITIES } from '../data';
import { motion } from 'motion/react';

export const TransportSection: React.FC = () => {
  const transportModes = [
    {
      title: "Metro & JR Lines",
      description: "The backbone of Tokyo. JR Lines (like the Yamanote loop) and Tokyo Metro/Toei Subways connect every major district. Trains are punctual to the second.",
      app: "Google Maps / Japan Transit by Jorudan",
      color: "blue",
      hasViewMore: true
    },
    {
      title: "City Buses",
      description: "Ideal for reaching residential areas and scenic spots like Asakusa to Tokyo Skytree. Toei Buses have a flat fare system within the 23 wards.",
      app: "Toei Bus Real-time Info",
      color: "green",
      hasViewMore: true
    },
    {
      title: "Taxis",
      description: "Clean, safe, and reliable. Doors open automatically. While expensive for long distances, they are perfect for short trips or when carrying heavy luggage.",
      app: "GO (Taxi App) / Uber",
      color: "purple",
      hasViewMore: true
    },
    {
      title: "Water Bus (Cruises)",
      description: "A scenic way to travel between Asakusa, Odaiba, and Toyosu. The futuristic Himiko and Hotaluna boats offer stunning views of the Tokyo skyline.",
      app: "Tokyo Water Bus (Web)",
      color: "cyan",
      hasViewMore: false
    }
  ];

  const tips = [
    "Use Suica or Pasmo on your phone (Apple/Google Wallet) for seamless tapping.",
    "Avoid rush hour (7:30 AM – 9:00 AM) if you want to avoid extreme crowding.",
    "Stand on the left side of escalators in Tokyo (it's the opposite in Osaka!).",
    "Look for 'Women Only' cars at the ends of trains during morning rush hours."
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-blue-50/50 rounded-[3rem] my-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">City Transportation Guide</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Tokyo's transport system is legendary. Here is everything you need to know to navigate like a local.
        </p>
      </div>

      <div className="space-y-12">
        {/* Detailed Modes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {transportModes.map((mode, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900 text-lg">{mode.title}</h3>
                {mode.hasViewMore && (
                  <button className="text-[#0066FF] text-xs font-bold hover:underline flex items-center gap-1">
                    View More <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed">
                {mode.description}
              </p>
              <div className="flex items-center gap-2 pt-4 border-t border-gray-50 mt-auto">
                <Smartphone className="w-4 h-4 text-gray-400" />
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Recommended App:</span>
                <span className="text-xs font-bold text-[#0066FF]">{mode.app}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tips & Map - Now below the cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tips Section */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-blue-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Lightbulb className="w-5 h-5 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Pro Tips</h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {tips.map((tip, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-1.5 flex-shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Map Download */}
          <div className="bg-[#0066FF] p-8 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden group flex flex-col justify-center">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <Map className="w-10 h-10 opacity-80" />
                <div>
                  <h3 className="text-xl font-bold">Subway Map</h3>
                  <p className="text-sm text-blue-100">Get the high-res PDF map for your phone.</p>
                </div>
              </div>
              <button className="w-full sm:w-auto px-8 bg-white text-[#0066FF] py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                Download PDF <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute -right-8 -bottom-8 opacity-10 transition-transform group-hover:scale-110 duration-700">
              <Map className="w-48 h-48" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ArticlesSection: React.FC = () => {
  const [width, setWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const itemWidth = clientWidth < 768 ? 280 + 24 : 320 + 24;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(index, POPULAR_ARTICLES.length - 1));
    }
  };

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const { clientWidth } = carouselRef.current;
      const itemWidth = clientWidth < 768 ? 280 + 24 : 320 + 24;
      carouselRef.current.scrollTo({ left: index * itemWidth, behavior: 'smooth' });
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-hidden relative">
      <div className="text-center mb-10 relative">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Popular Articles</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Expert tips and local secrets for your Tokyo adventure.</p>
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
          ref={carouselRef}
          onScroll={handleScroll}
          className="cursor-grab active:cursor-grabbing overflow-x-auto no-scrollbar pb-8 snap-x snap-proximity"
        >
          <motion.div 
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-6"
          >
            {POPULAR_ARTICLES.map((article) => (
              <motion.div 
                key={article.id}
                whileHover={{ y: -5 }}
                className="flex-shrink-0 w-[280px] md:w-[320px] snap-start bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer"
              >
                <div className="h-56 overflow-hidden pointer-events-none">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 pointer-events-none">
                  <p className="text-xs font-bold text-[#0066FF] uppercase mb-2">{new Date(article.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0066FF] transition-colors">{article.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">{article.excerpt}</p>
                  <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold">
                    <span>Read More</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {POPULAR_ARTICLES.map((_, index) => (
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

      <div className="text-center mt-8">
        <button className="inline-flex items-center gap-2 text-[#0066FF] font-bold hover:gap-3 transition-all">
          View All Articles <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export const EssentialsSection: React.FC = () => {
  const essentials = [
    { icon: ShieldCheck, title: "Travel Insurance", desc: "Stay protected on your journey.", color: "blue" },
    { icon: Wifi, title: "Pocket WiFi & SIM", desc: "Stay connected everywhere.", color: "orange" },
    { icon: CreditCard, title: "Currency Exchange", desc: "Best rates for JPY.", color: "green" },
    { icon: Info, title: "Visa Information", desc: "Check entry requirements.", color: "purple" },
    { icon: Smartphone, title: "Travel Apps", desc: "Essential apps for Tokyo.", color: "indigo" },
    { icon: Plug, title: "Power Plugs", desc: "Type A & B, 100V.", color: "amber" },
    { icon: Wallet, title: "Payments & Cash", desc: "Suica, Pasmo & Cash tips.", color: "emerald" },
    { icon: Percent, title: "Tax Refund", desc: "How to shop tax-free.", color: "rose" },
    { icon: CloudSun, title: "Weather & Packing", desc: "What to wear by season.", color: "sky" },
    { icon: CalendarDays, title: "Public Holidays", desc: "Plan around busy dates.", color: "violet" },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: "bg-blue-50 text-blue-600",
      orange: "bg-orange-50 text-orange-600",
      green: "bg-green-50 text-green-600",
      purple: "bg-purple-50 text-purple-600",
      indigo: "bg-indigo-50 text-indigo-600",
      amber: "bg-amber-50 text-amber-600",
      emerald: "bg-emerald-50 text-emerald-600",
      rose: "bg-rose-50 text-rose-600",
      sky: "bg-sky-50 text-sky-600",
      violet: "bg-violet-50 text-violet-600",
    };
    return colors[color] || "bg-gray-50 text-gray-600";
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Travel Essentials</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Everything you need to prepare for a smooth and worry-free trip to Tokyo.</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
        {essentials.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5, shadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
            className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:border-[#0066FF]/20 transition-all cursor-pointer group text-center flex flex-col items-center"
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300 ${getColorClasses(item.color)}`}>
              <item.icon className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#0066FF] transition-colors">{item.title}</h3>
            <p className="text-[11px] text-gray-500 leading-tight">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Pro Tips Section */}
      <div className="bg-blue-50/50 p-8 rounded-[2.5rem] border border-blue-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-yellow-100 rounded-lg">
            <Lightbulb className="w-5 h-5 text-yellow-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Essential Pro Tips</h3>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
          {[
            "Always carry some cash (¥1,000 and ¥5,000 bills) as some smaller shops and temples don't accept cards.",
            "Download the 'Google Maps' and 'Japan Transit' apps for real-time navigation and train schedules.",
            "Look for 'Tax-Free' signs at shops; bring your passport to get the 10% refund instantly at the counter.",
            "Add a Suica or Pasmo card to your Apple/Google Wallet for seamless tapping on all public transport.",
            "Japan uses Type A and B plugs (same as US/Canada) but with 100V. Check your high-wattage devices.",
            "Public trash cans are rare. Carry a small bag for your trash and dispose of it at convenience stores."
          ].map((tip, idx) => (
            <li key={idx} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-1.5 flex-shrink-0" />
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export const CityLinks: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Explore Other Cities in Japan</h2>
        <p className="text-gray-600">Continue your journey across the Land of the Rising Sun.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {OTHER_CITIES.map((city) => (
          <a 
            key={city.name}
            href="#"
            className="flex items-center gap-2 bg-white border border-gray-200 hover:border-[#0066FF] hover:text-[#0066FF] px-3 py-1.5 rounded-full transition-all group shadow-sm"
          >
            <img src={city.image} alt={city.name} className="w-6 h-6 rounded-full object-cover" />
            <span className="font-bold text-xs">{city.name}</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>
    </section>
  );
};
