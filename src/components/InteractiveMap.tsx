import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, X, Star, Clock, Calendar, CreditCard } from 'lucide-react';
import { Attraction } from '../types';
import { TOP_ATTRACTIONS } from '../data';
import { cn } from '../lib/utils';

// Fix Leaflet default icon issue
import 'leaflet/dist/leaflet.css';

const customIcon = new L.DivIcon({
  className: 'custom-div-icon',
  html: `<div class="w-6 h-6 bg-[#0066FF] rounded-full border-2 border-white shadow-lg flex items-center justify-center animate-pulse">
          <div class="w-2 h-2 bg-white rounded-full"></div>
        </div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

const selectedIcon = new L.DivIcon({
  className: 'custom-div-icon-selected',
  html: `<div class="w-8 h-8 bg-[#FF9900] rounded-full border-2 border-white shadow-xl flex items-center justify-center scale-110 transition-transform">
          <div class="w-3 h-3 bg-white rounded-full"></div>
        </div>`,
  iconSize: [32, 32],
  iconAnchor: [16, 16],
});

// Component to handle map center changes
const ChangeView = ({ center }: { center: [number, number] }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 13);
  }, [center, map]);
  return null;
};

export const InteractiveMap: React.FC = () => {
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);
  const mapCenter: [number, number] = [35.6895, 139.6917]; // Tokyo Center

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Explore Tokyo Real Map</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore Tokyo's landmarks on a real interactive map. Click on names to visit official pages or markers to see details.
        </p>
      </div>

      <div className="relative bg-gray-100 rounded-3xl overflow-hidden shadow-xl border border-gray-200 aspect-square md:aspect-auto md:h-[600px]">
        <MapContainer 
          center={mapCenter} 
          zoom={12} 
          scrollWheelZoom={false}
          className="w-full h-full z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {TOP_ATTRACTIONS.slice(0, 5).map((attraction) => (
            <Marker 
              key={attraction.id}
              position={[attraction.coordinates[0], attraction.coordinates[1]]}
              icon={selectedAttraction?.id === attraction.id ? selectedIcon : customIcon}
              eventHandlers={{
                click: () => setSelectedAttraction(attraction),
              }}
            >
              <Tooltip 
                permanent 
                direction="top" 
                offset={[0, -15]} 
                opacity={1} 
                interactive
                className="bg-[#0066FF] border-none shadow-lg rounded-full px-3 py-1 font-bold text-[11px] text-white"
              >
                <a 
                  href={attraction.url || '#'} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-100 transition-colors flex items-center gap-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MapPin className="w-3 h-3" />
                  {attraction.name}
                </a>
              </Tooltip>
              <Popup className="custom-popup">
                <div className="p-1">
                  <a 
                    href={attraction.url || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#0066FF] hover:underline"
                  >
                    {attraction.name}
                  </a>
                </div>
              </Popup>
            </Marker>
          ))}

          {selectedAttraction && (
            <ChangeView center={[selectedAttraction.coordinates[0], selectedAttraction.coordinates[1]]} />
          )}
        </MapContainer>

        {/* Info Box Overlay */}
        <AnimatePresence>
          {selectedAttraction && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute top-4 right-4 bottom-4 w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col z-[1000]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-48">
                <img 
                  src={selectedAttraction.image} 
                  alt={selectedAttraction.name}
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => setSelectedAttraction(null)}
                  className="absolute top-3 right-3 p-1.5 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 left-3 bg-[#FF9900] text-white px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  {selectedAttraction.rating}
                </div>
              </div>

              <div className="p-6 flex-1 overflow-y-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedAttraction.name}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {selectedAttraction.description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <MapPin className="w-4 h-4 text-[#0066FF]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase">Access</p>
                      <p className="text-sm text-gray-700">{selectedAttraction.access}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <Clock className="w-4 h-4 text-[#0066FF]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase">Business Hours</p>
                      <p className="text-sm text-gray-700">{selectedAttraction.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <Calendar className="w-4 h-4 text-[#0066FF]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase">Holidays</p>
                      <p className="text-sm text-gray-700">{selectedAttraction.holidays}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <CreditCard className="w-4 h-4 text-[#0066FF]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase">Fees</p>
                      <p className="text-sm text-gray-700">{selectedAttraction.fees}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-gray-100 bg-gray-50">
                <a 
                  href={selectedAttraction.url || '#'} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-[#0066FF] hover:bg-[#0052CC] text-white py-3 rounded-xl font-bold text-center transition-colors"
                >
                  View Full Article
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md p-3 rounded-xl border border-white/50 shadow-sm hidden md:block z-[1000]">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-3 h-3 rounded-full bg-[#0066FF]" />
            <span className="text-xs font-semibold text-gray-700">Attraction</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF9900]" />
            <span className="text-xs font-semibold text-gray-700">Selected</span>
          </div>
        </div>
      </div>
    </section>
  );
};
