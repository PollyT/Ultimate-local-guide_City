import React from 'react';
import { Header } from './components/Header';
import { Breadcrumb } from './components/Breadcrumb';
import { Hero } from './components/Hero';
import { CityInfo } from './components/CityInfo';
import { QuickNav } from './components/QuickNav';
import { InteractiveMap } from './components/InteractiveMap';
import { RankingCarousel } from './components/RankingCarousel';
import { EventCalendar } from './components/EventCalendar';
import { FoodCarousel } from './components/FoodCarousel';
import { ItinerarySection } from './components/ItinerarySection';
import { TransportSection, ArticlesSection, EssentialsSection, CityLinks } from './components/FooterSections';
import { HotelRecommendation } from './components/HotelRecommendation';
import { TOP_ATTRACTIONS, RECOMMENDED_ACTIVITIES, HOTEL_RECOMMENDATIONS } from './data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-bold text-[#0066FF]">Trip</span>
              <span className="text-3xl font-bold text-[#FF9900]">.com</span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Your ultimate travel companion for exploring the world. Book hotels, flights, and activities with ease.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Feedback</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Trip.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#0066FF]/20 selection:text-[#0066FF]">
      <Header />
      
      <Breadcrumb 
        items={[
          { label: 'Blogs', href: '#' },
          { label: 'Japan', href: '#' },
          { label: 'Tokyo' }
        ]} 
      />

      <main>
        <Hero />
        <CityInfo />
        <QuickNav />
        
        <InteractiveMap />
        
        <RankingCarousel 
          title="Landmarks & Attractions" 
          subtitle="Tokyo's most iconic spots, ranked by popularity and traveler reviews."
          items={TOP_ATTRACTIONS}
          type="attraction"
        />
        
        <EventCalendar />
        
        <FoodCarousel />
        
        <ItinerarySection />
        
        <TransportSection />
        
        <HotelRecommendation hotels={HOTEL_RECOMMENDATIONS} />
        
        <RankingCarousel 
          title="Recommended Activities" 
          subtitle="Unforgettable experiences to make your Tokyo trip truly special."
          items={RECOMMENDED_ACTIVITIES}
          type="activity"
        />
        
        <ArticlesSection />
        
        <EssentialsSection />
        
        <CityLinks />
      </main>

      <Footer />
    </div>
  );
}
