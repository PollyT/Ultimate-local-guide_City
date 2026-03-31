import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { EVENTS } from '../data';
import { cn } from '../lib/utils';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const EventCalendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()); // Default to current month
  const [selectedEvent, setSelectedEvent] = useState<any>(EVENTS.find(e => new Date(e.date).getMonth() === currentMonth) || EVENTS[0]);

  React.useEffect(() => {
    const firstEventOfMonth = EVENTS.find(e => new Date(e.date).getMonth() === currentMonth);
    if (firstEventOfMonth) {
      setSelectedEvent(firstEventOfMonth);
    }
  }, [currentMonth]);

  const nextMonth = () => setCurrentMonth((prev) => (prev + 1) % 12);
  const prevMonth = () => setCurrentMonth((prev) => (prev - 1 + 12) % 12);

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const year = 2026;
  const daysInMonth = getDaysInMonth(currentMonth, year);
  const firstDay = getFirstDayOfMonth(currentMonth, year);

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Tokyo Event Guide</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the best festivals, public holidays, and seasonal celebrations happening across Tokyo in 2026.
        </p>
      </div>

      <div className="bg-gray-50 rounded-[3rem] p-8 md:p-12 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Calendar View */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Monthly View</h3>
            <div className="flex items-center gap-3 bg-white p-1.5 rounded-xl shadow-sm border border-gray-100">
              <button onClick={prevMonth} className="p-1.5 hover:bg-gray-50 rounded-lg transition-colors">
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <span className="text-base font-bold text-gray-800 w-24 text-center">{months[currentMonth]} {year}</span>
              <button onClick={nextMonth} className="p-1.5 hover:bg-gray-50 rounded-lg transition-colors">
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1.5 mb-6">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-[10px] font-bold text-gray-400 uppercase py-1">{day}</div>
            ))}
            {/* Empty cells for padding */}
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} className="aspect-square" />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const dateStr = `${year}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
              const event = EVENTS.find(e => e.date === dateStr);
              const hasEvent = !!event;
              const isSelected = selectedEvent.date === dateStr;
              
              return (
                <button
                  key={i}
                  onClick={() => event && setSelectedEvent(event)}
                  className={cn(
                    "aspect-square rounded-xl flex flex-col items-center justify-center transition-all relative group",
                    hasEvent 
                      ? isSelected 
                        ? "bg-[#0066FF] text-white shadow-md scale-105 z-10" 
                        : event.type === 'holiday'
                          ? "bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-200"
                          : event.type === 'seasonal'
                            ? "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200"
                            : event.type === 'event'
                              ? "bg-green-100 text-green-700 border-green-200 hover:bg-green-200"
                              : "bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-100"
                  )}
                >
                  <span className="text-xs font-bold">{day}</span>
                  {hasEvent && (
                    <div className={cn(
                      "w-1 h-1 rounded-full mt-0.5", 
                      isSelected 
                        ? "bg-white" 
                        : event.type === 'holiday' ? "bg-orange-500" : event.type === 'seasonal' ? "bg-blue-500" : event.type === 'event' ? "bg-green-500" : "bg-purple-500"
                    )} />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold">Seasonal</span>
            <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full text-[10px] font-bold">Holidays</span>
            <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-[10px] font-bold">Events</span>
            <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-[10px] font-bold">Trends</span>
          </div>
        </div>

        {/* Right: Event Detail */}
        <div className="w-full md:w-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedEvent.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col"
            >
              <div className="relative h-48">
                <img 
                  src={selectedEvent.image} 
                  alt={selectedEvent.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-bold text-[#0066FF] shadow-sm">
                  {selectedEvent.type.toUpperCase()}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-gray-400 text-[10px] font-bold mb-1 uppercase tracking-wider">
                  <CalendarIcon className="w-3.5 h-3.5" />
                  {new Date(selectedEvent.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{selectedEvent.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                  {selectedEvent.description}
                </p>
                <button className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white py-3 rounded-xl text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2">
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        </div>
      </div>
    </section>
  );
};
