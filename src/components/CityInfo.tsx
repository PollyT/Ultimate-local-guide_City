import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Cloud, Clock, Globe, Coins } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const CityInfo: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  // Tokyo is UTC+9
  const tokyoTime = new Date(currentTime.toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }));
  const timeString = tokyoTime.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  });

  const infoSnippets = [
    { icon: <Cloud className="w-5 h-5 text-blue-400" />, label: 'Weather', value: 'Cloudy, 18°C' },
    { icon: <Clock className="w-5 h-5 text-orange-400" />, label: 'Local Time', value: timeString },
    { icon: <Coins className="w-5 h-5 text-yellow-500" />, label: 'Currency', value: 'JPY (¥)' },
    { icon: <Globe className="w-5 h-5 text-green-500" />, label: 'Language', value: 'Japanese' },
  ];

  return (
    <section className="pt-4 pb-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">About Tokyo</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A global metropolis where ancient traditions meet futuristic innovation.
          </p>
        </div>
        
        {/* Top: Quick Info Snippets in a row */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {infoSnippets.map((snippet, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="p-2.5 bg-white rounded-xl shadow-sm">
                  {snippet.icon}
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{snippet.label}</p>
                  <p className="text-sm font-bold text-gray-900">{snippet.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Description */}
        <div className="w-full lg:max-w-5xl">
          <div className="relative">
            <div className={`text-gray-600 leading-relaxed transition-all duration-300 ${!isExpanded ? 'line-clamp-3 pr-24' : ''}`}>
              <p className="inline">
                Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city’s many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum).
              </p>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="inline"
                  >
                    <span className="block mt-4">
                      Tokyo is a city of contrasts, where you can find a quiet tea ceremony in a serene garden just steps away from the world's busiest pedestrian crossing in Shibuya. It is a global hub for technology, fashion, and cuisine, boasting more Michelin-starred restaurants than any other city in the world. From the high-end boutiques of Ginza to the quirky subcultures of Harajuku, every neighborhood offers a unique glimpse into the heart of Japan.
                    </span>
                    <span className="block mt-4">
                      Beyond its urban sprawl, Tokyo is also a gateway to natural beauty and cultural heritage. Whether you're exploring the historic streets of Asakusa or taking a day trip to the majestic Mount Fuji, the city provides endless opportunities for discovery. Its efficient public transportation system makes it easy to navigate this vast metropolis, ensuring that every traveler can experience the magic of Tokyo at their own pace.
                    </span>
                  </motion.span>
                )}
              </AnimatePresence>

              {isExpanded && (
                <button
                  onClick={toggleExpand}
                  className="inline-flex items-center gap-1 text-[#0066FF] font-semibold hover:underline ml-2 align-baseline"
                >
                  View Less <ChevronUp className="w-3 h-3" />
                </button>
              )}
            </div>

            {!isExpanded && (
              <button
                onClick={toggleExpand}
                className="absolute bottom-0 right-0 bg-gradient-to-l from-white via-white to-transparent pl-8 flex items-center gap-1 text-[#0066FF] font-semibold hover:underline"
              >
                ...View More <ChevronDown className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
