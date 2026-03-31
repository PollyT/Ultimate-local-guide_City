import React from 'react';
import { Search, User, Globe, Menu } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-[#0066FF]">Trip</span>
              <span className="text-2xl font-bold text-[#FF9900]">.com</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-[#0066FF] font-medium">Hotels</a>
              <a href="#" className="text-gray-700 hover:text-[#0066FF] font-medium">Flights</a>
              <a href="#" className="text-gray-700 hover:text-[#0066FF] font-medium">Trains</a>
              <a href="#" className="text-gray-700 hover:text-[#0066FF] font-medium">Car Hire</a>
              <a href="#" className="text-[#0066FF] font-bold border-b-2 border-[#0066FF]">Travel Guide</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-4 py-1.5">
              <Search className="w-4 h-4 text-gray-500 mr-2" />
              <input 
                type="text" 
                placeholder="Search destinations..." 
                className="bg-transparent border-none focus:ring-0 text-sm w-40"
              />
            </div>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <Globe className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <User className="w-5 h-5" />
            </button>
            <button className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
