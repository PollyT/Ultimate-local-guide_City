import React from 'react';
import { Plane, Hotel, Activity, Camera, Utensils, Calendar, PlaneTakeoff, Train } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { label: 'Flights', icon: Plane, color: 'bg-blue-50 text-blue-600' },
  { label: 'Hotels', icon: Hotel, color: 'bg-orange-50 text-orange-600' },
  { label: 'Activities', icon: Activity, color: 'bg-green-50 text-green-600' },
  { label: 'Attractions', icon: Camera, color: 'bg-purple-50 text-purple-600' },
  { label: 'Dining', icon: Utensils, color: 'bg-red-50 text-red-600' },
  { label: 'Events', icon: Calendar, color: 'bg-yellow-50 text-yellow-600' },
  { label: 'Airport', icon: PlaneTakeoff, color: 'bg-cyan-50 text-cyan-600' },
  { label: 'Transport', icon: Train, color: 'bg-indigo-50 text-indigo-600' },
];

export const QuickNav: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
        {navItems.map((item) => (
          <button 
            key={item.label}
            className="flex flex-col items-center justify-center gap-3 group transition-all"
          >
            <div className={cn(
              "w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-md",
              item.color
            )}>
              <item.icon className="w-7 h-7" />
            </div>
            <span className="text-sm font-semibold text-gray-700 group-hover:text-[#0066FF]">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};
