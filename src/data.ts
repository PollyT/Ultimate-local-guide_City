import { Attraction, Event, Food, Activity, Article, Itinerary, Area, Hotel } from './types';

export const TOKYO_AREAS: Area[] = [
  { id: 'shinjuku', name: 'Shinjuku', path: 'M 100 100 L 200 100 L 200 200 L 100 200 Z' }, // Mock paths
  { id: 'shibuya', name: 'Shibuya', path: 'M 100 200 L 200 200 L 200 300 L 100 300 Z' },
  { id: 'ginza', name: 'Ginza', path: 'M 200 150 L 300 150 L 300 250 L 200 250 Z' },
  { id: 'asakusa', name: 'Asakusa', path: 'M 250 50 L 350 50 L 350 150 L 250 150 Z' },
  { id: 'ueno', name: 'Ueno', path: 'M 200 50 L 250 50 L 250 150 L 200 150 Z' },
];

export const TOP_ATTRACTIONS: Attraction[] = [
  {
    id: 'sensoji',
    name: 'Senso-ji Temple',
    description: 'Tokyo\'s oldest and most significant Buddhist temple, located in Asakusa.',
    image: 'https://picsum.photos/seed/sensoji/800/600',
    access: '5-min walk from Asakusa Station',
    hours: '6:00 - 17:00',
    holidays: 'Open daily',
    fees: 'Free',
    rating: 4.8,
    reviews: 12450,
    rank: 1,
    coordinates: [35.7148, 139.7967],
    url: '#'
  },
  {
    id: 'tokyo-tower',
    name: 'Tokyo Tower',
    description: 'Iconic orange-and-white communications tower inspired by the Eiffel Tower.',
    image: 'https://picsum.photos/seed/tokyotower/800/600',
    access: '10-min walk from Akabanebashi Station',
    hours: '9:00 - 23:00',
    holidays: 'Open daily',
    fees: '¥1,200',
    rating: 4.6,
    reviews: 8900,
    rank: 2,
    coordinates: [35.6586, 139.7454],
    url: '#'
  },
  {
    id: 'shibuya-crossing',
    name: 'Shibuya Crossing',
    description: 'The world\'s busiest pedestrian intersection, a symbol of modern Tokyo.',
    image: 'https://picsum.photos/seed/shibuya/800/600',
    access: 'Next to Shibuya Station (Hachiko Exit)',
    hours: '24 hours',
    holidays: 'Open daily',
    fees: 'Free',
    rating: 4.7,
    reviews: 15600,
    rank: 3,
    coordinates: [35.6595, 139.7005],
    url: '#'
  },
  {
    id: 'meiji-shrine',
    name: 'Meiji Jingu Shrine',
    description: 'A peaceful Shinto shrine dedicated to Emperor Meiji and Empress Shoken.',
    image: 'https://picsum.photos/seed/meiji/800/600',
    access: '1-min walk from Harajuku Station',
    hours: 'Sunrise - Sunset',
    holidays: 'Open daily',
    fees: 'Free',
    rating: 4.8,
    reviews: 11200,
    rank: 4,
    coordinates: [35.6764, 139.6993],
    url: '#'
  },
  {
    id: 'skytree',
    name: 'Tokyo Skytree',
    description: 'The tallest structure in Japan, offering breathtaking panoramic views.',
    image: 'https://picsum.photos/seed/skytree/800/600',
    access: 'Directly connected to Tokyo Skytree Station',
    hours: '10:00 - 21:00',
    holidays: 'Open daily',
    fees: '¥3,100',
    rating: 4.7,
    reviews: 9800,
    rank: 5,
    coordinates: [35.7101, 139.8107],
    url: '#'
  },
  {
    id: 'imperial-palace',
    name: 'Imperial Palace East Garden',
    description: 'The former site of Edo Castle, now a beautiful public garden.',
    image: 'https://picsum.photos/seed/palace/800/600',
    access: '10-min walk from Tokyo Station',
    hours: '9:00 - 16:30 (varies by season)',
    holidays: 'Mondays, Fridays',
    fees: 'Free',
    rating: 4.5,
    reviews: 7500,
    rank: 6,
    coordinates: [35.6852, 139.7528],
    url: '#'
  },
  {
    id: 'tsukiji',
    name: 'Tsukiji Outer Market',
    description: 'A vibrant market famous for fresh seafood and street food.',
    image: 'https://picsum.photos/seed/tsukiji/800/600',
    access: '5-min walk from Tsukiji Station',
    hours: '5:00 - 14:00 (varies by shop)',
    holidays: 'Sundays, Wednesdays (usually)',
    fees: 'Free entry',
    rating: 4.6,
    reviews: 13400,
    rank: 7,
    coordinates: [35.6655, 139.7707],
    url: '#'
  },
  {
    id: 'ueno-park',
    name: 'Ueno Park',
    description: 'A large public park home to museums, a zoo, and cherry blossoms.',
    image: 'https://picsum.photos/seed/ueno/800/600',
    access: 'Next to Ueno Station',
    hours: '5:00 - 23:00',
    holidays: 'Open daily',
    fees: 'Free entry',
    rating: 4.5,
    reviews: 8200,
    rank: 8,
    coordinates: [35.7141, 139.7734],
    url: '#'
  },
  {
    id: 'shinjuku-gyoen',
    name: 'Shinjuku Gyoen National Garden',
    description: 'One of Tokyo\'s largest and most popular parks, blending three garden styles.',
    image: 'https://picsum.photos/seed/gyoen/800/600',
    access: '10-min walk from Shinjuku Station',
    hours: '9:00 - 16:00',
    holidays: 'Mondays',
    fees: '¥500',
    rating: 4.8,
    reviews: 9500,
    rank: 9,
    coordinates: [35.6852, 139.7101],
    url: '#'
  },
  {
    id: 'teamlab',
    name: 'teamLab Planets',
    description: 'An immersive digital art museum where you walk through water.',
    image: 'https://picsum.photos/seed/teamlab/800/600',
    access: '1-min walk from Shin-Toyosu Station',
    hours: '9:00 - 22:00',
    holidays: 'Irregular',
    fees: '¥3,800',
    rating: 4.9,
    reviews: 18000,
    rank: 10,
    coordinates: [35.6491, 139.7904],
    url: '#'
  }
];

export const EVENTS: Event[] = [
  { 
    id: 'hatsumode', 
    name: 'New Year\'s Day (Gantan)', 
    date: '2026-01-01', 
    description: 'The most important holiday in Japan. Millions visit shrines (Hatsumode) to pray for a good year ahead.', 
    image: 'https://picsum.photos/seed/hatsumode/800/600', 
    type: 'holiday' 
  },
  { 
    id: 'seijin', 
    name: 'Coming of Age Day (Seijin no Hi)', 
    date: '2026-01-12', 
    description: 'A day to congratulate and encourage those who have reached the age of 20. Many young adults wear traditional kimonos.', 
    image: 'https://picsum.photos/seed/seijin/800/600', 
    type: 'holiday' 
  },
  { 
    id: 'setsubun', 
    name: 'Setsubun (Bean-Throwing Festival)', 
    date: '2026-02-03', 
    description: 'A traditional festival to drive away evil spirits and welcome spring by throwing roasted soybeans.', 
    image: 'https://picsum.photos/seed/setsubun/800/600', 
    type: 'holiday' 
  },
  { 
    id: 'kenkoku', 
    name: 'National Foundation Day', 
    date: '2026-02-11', 
    description: 'A national holiday to commemorate the founding of the nation and to foster a sense of patriotism.', 
    image: 'https://picsum.photos/seed/foundation/800/600', 
    type: 'holiday' 
  },
  { 
    id: 'tenno', 
    name: 'Emperor\'s Birthday', 
    date: '2026-02-23', 
    description: 'Celebrating the birthday of the reigning Emperor Naruhito. Public ceremonies are held at the Imperial Palace.', 
    image: 'https://picsum.photos/seed/emperor/800/600', 
    type: 'holiday' 
  },
  { 
    id: 'marathon', 
    name: 'Tokyo Marathon 2026', 
    date: '2026-03-01', 
    description: 'One of the world\'s major marathons, where thousands of runners race through the heart of Tokyo.', 
    image: 'https://picsum.photos/seed/marathon/800/600', 
    type: 'event' 
  },
  { 
    id: 'shunbun', 
    name: 'Vernal Equinox Day', 
    date: '2026-03-20', 
    description: 'A day to admire nature and show love for living things as spring officially begins.', 
    image: 'https://picsum.photos/seed/equinox/800/600', 
    type: 'holiday' 
  },
  { 
    id: 'hanami', 
    name: 'Hanami (Sakura Season)', 
    date: '2026-03-28', 
    description: 'Cherry blossom viewing parties across the city. Ueno Park and Shinjuku Gyoen are top spots.', 
    image: 'https://picsum.photos/seed/sakura/800/600', 
    type: 'seasonal' 
  },
  { 
    id: 'hanamatsuri', 
    name: 'Hana Matsuri', 
    date: '2026-04-08', 
    description: 'The celebration of Buddha\'s birthday. Temples hold ceremonies where visitors pour sweet tea over small Buddha statues.', 
    image: 'https://picsum.photos/seed/buddha/800/600', 
    type: 'holiday' 
  },
  { 
    id: 'showa', 
    name: 'Showa Day', 
    date: '2026-04-29', 
    description: 'A day to reflect on the events of the Showa Era. It marks the start of the Golden Week holiday period.', 
    image: 'https://picsum.photos/seed/showa/800/600', 
    type: 'holiday' 
  },
  { 
    id: 'kenpo', 
    name: 'Constitution Memorial Day', 
    date: '2026-05-03', 
    description: 'Part of Golden Week, this holiday commemorates the enactment of the 1947 Japanese Constitution.', 
    image: 'https://picsum.photos/seed/constitution/800/600', 
    type: 'holiday' 
  },
  { 
    id: 'midori', 
    name: 'Greenery Day', 
    date: '2026-05-04', 
    description: 'A day to commune with nature and be grateful for its blessings. Part of the Golden Week holidays.', 
    image: 'https://picsum.photos/seed/greenery/800/600', 
    type: 'holiday' 
  },
  { 
    id: 'kodomo', 
    name: 'Children\'s Day', 
    date: '2026-05-05', 
    description: 'The final holiday of Golden Week, dedicated to the happiness and personalities of children.', 
    image: 'https://picsum.photos/seed/children/800/600', 
    type: 'holiday' 
  },
  { 
    id: 'sanja', 
    name: 'Sanja Matsuri', 
    date: '2026-05-15', 
    description: 'One of Tokyo\'s three major Shinto festivals, featuring wild portable shrine (mikoshi) processions in Asakusa.', 
    image: 'https://picsum.photos/seed/sanja/800/600', 
    type: 'seasonal' 
  },
  { 
    id: 'sanno', 
    name: 'Sanno Matsuri', 
    date: '2026-06-10', 
    description: 'A major Edo-period festival featuring a large parade through central Tokyo, including the Imperial Palace grounds.', 
    image: 'https://picsum.photos/seed/sanno/800/600', 
    type: 'seasonal' 
  },
  { 
    id: 'tanabata', 
    name: 'Tanabata (Star Festival)', 
    date: '2026-07-07', 
    description: 'Celebrating the meeting of the deities Orihime and Hikoboshi. People write wishes on colorful strips of paper.', 
    image: 'https://picsum.photos/seed/tanabata/800/600', 
    type: 'holiday' 
  },
  { 
    id: 'umi', 
    name: 'Marine Day (Umi no Hi)', 
    date: '2026-07-20', 
    description: 'A day to give thanks for the ocean\'s bounty and to pray for the prosperity of Japan as a maritime nation.', 
    image: 'https://picsum.photos/seed/ocean/800/600', 
    type: 'holiday' 
  },
  { 
    id: 'sumida-fireworks', 
    name: 'Sumida River Fireworks', 
    date: '2026-07-25', 
    description: 'One of Japan\'s oldest and most spectacular fireworks displays, lighting up the sky over the Sumida River.', 
    image: 'https://picsum.photos/seed/fireworks/800/600', 
    type: 'seasonal' 
  },
  { 
    id: 'yama', 
    name: 'Mountain Day (Yama no Hi)', 
    date: '2026-08-11', 
    description: 'A holiday to appreciate mountains and their importance to Japanese culture and the environment.', 
    image: 'https://picsum.photos/seed/mountain/800/600', 
    type: 'holiday' 
  },
  { 
    id: 'bon-odori', 
    name: 'Hibiya Park Bon Odori', 
    date: '2026-08-22', 
    description: 'A massive traditional dance festival in the heart of Tokyo, where everyone is welcome to join the circle.', 
    image: 'https://picsum.photos/seed/bonodori/800/600', 
    type: 'seasonal' 
  },
  { 
    id: 'keiro', 
    name: 'Respect for the Aged Day', 
    date: '2026-09-21', 
    description: 'A day to honor elderly citizens and celebrate their longevity and contributions to society.', 
    image: 'https://picsum.photos/seed/elderly/800/600', 
    type: 'holiday' 
  },
  { 
    id: 'shubun', 
    name: 'Autumnal Equinox Day', 
    date: '2026-09-23', 
    description: 'A day to honor ancestors and remember the deceased as the season changes to autumn.', 
    image: 'https://picsum.photos/seed/autumn/800/600', 
    type: 'holiday' 
  },
  { 
    id: 'taiiku', 
    name: 'Sports Day (Taiiku no Hi)', 
    date: '2026-10-12', 
    description: 'Promoting health and an active lifestyle. Many schools and communities hold sports festivals on this day.', 
    image: 'https://picsum.photos/seed/sports/800/600', 
    type: 'holiday' 
  },
  { 
    id: 'halloween', 
    name: 'Shibuya Halloween', 
    date: '2026-10-31', 
    description: 'While unofficial, thousands of costumed revelers gather at Shibuya Crossing for one of the world\'s biggest street parties.', 
    image: 'https://picsum.photos/seed/halloween/800/600', 
    type: 'event' 
  },
  { 
    id: 'bunka', 
    name: 'Culture Day (Bunka no Hi)', 
    date: '2026-11-03', 
    description: 'A day to promote culture, the arts, and academic endeavor. The Order of Culture awards are presented at the Imperial Palace.', 
    image: 'https://picsum.photos/seed/culture/800/600', 
    type: 'holiday' 
  },
  { 
    id: 'kinro', 
    name: 'Labor Thanksgiving Day', 
    date: '2026-11-23', 
    description: 'A day to honor labor, celebrate production, and give thanks to each other for their hard work.', 
    image: 'https://picsum.photos/seed/thanksgiving/800/600', 
    type: 'holiday' 
  },
  { 
    id: 'hagoita', 
    name: 'Hagoita-Ichi (Battledore Fair)', 
    date: '2026-12-17', 
    description: 'An end-of-year market at Senso-ji Temple selling decorative wooden paddles (hagoita) for good luck.', 
    image: 'https://picsum.photos/seed/hagoita/800/600', 
    type: 'holiday' 
  }
];

export const FOOD_RECOMMENDATIONS: Food[] = [
  { id: 'sushi', name: 'Edomae Sushi', description: 'Fresh, high-quality seafood served on vinegared rice.', image: 'https://picsum.photos/seed/sushi/400/300' },
  { id: 'ramen', name: 'Tonkotsu Ramen', description: 'Rich, creamy pork bone broth with thin noodles.', image: 'https://picsum.photos/seed/ramen/400/300' },
  { id: 'tempura', name: 'Tempura', description: 'Lightly battered and deep-fried seafood and vegetables.', image: 'https://picsum.photos/seed/tempura/400/300' },
  { id: 'yakitori', name: 'Yakitori', description: 'Grilled chicken skewers seasoned with salt or tare sauce.', image: 'https://picsum.photos/seed/yakitori/400/300' },
  { id: 'monjayaki', name: 'Monjayaki', description: 'Tokyo\'s savory pancake with a liquid batter.', image: 'https://picsum.photos/seed/monja/400/300' },
];

export const RECOMMENDED_ACTIVITIES: Activity[] = [
  { id: 'kart', name: 'Street Go-Karting', price: 85, rating: 4.9, reviews: 3200, image: 'https://picsum.photos/seed/kart/400/300', rank: 1 },
  { id: 'cooking', name: 'Sushi Making Class', price: 65, rating: 4.8, reviews: 1500, image: 'https://picsum.photos/seed/cooking/400/300', rank: 2 },
  { id: 'robot', name: 'Robot Restaurant Show', price: 75, rating: 4.4, reviews: 5600, image: 'https://picsum.photos/seed/robot/400/300', rank: 3 },
  { id: 'tea', name: 'Traditional Tea Ceremony', price: 40, rating: 4.7, reviews: 800, image: 'https://picsum.photos/seed/tea/400/300', rank: 4 },
];

export const POPULAR_ARTICLES: Article[] = [
  { id: 'a1', title: 'First Timer\'s Guide to Tokyo', excerpt: 'Everything you need to know for your first visit to the Japanese capital.', image: 'https://picsum.photos/seed/tokyo1/400/300', date: '2025-12-10' },
  { id: 'a2', title: 'Best Hidden Bars in Shinjuku', excerpt: 'Discover the secret drinking spots in Tokyo\'s busiest district.', image: 'https://picsum.photos/seed/tokyo2/400/300', date: '2026-01-15' },
  { id: 'a3', title: 'Tokyo on a Budget', excerpt: 'How to enjoy the city without breaking the bank.', image: 'https://picsum.photos/seed/tokyo3/400/300', date: '2026-02-20' },
  { id: 'a4', title: 'Top 10 Ramen Shops in Tokyo', excerpt: 'The ultimate list of must-visit ramen spots for every noodle lover.', image: 'https://picsum.photos/seed/tokyo4/400/300', date: '2026-03-05' },
  { id: 'a5', title: 'Exploring Akihabara', excerpt: 'A deep dive into the world of anime, electronics, and gaming.', image: 'https://picsum.photos/seed/tokyo5/400/300', date: '2026-03-12' },
  { id: 'a6', title: 'Day Trips from Tokyo', excerpt: 'Escape the city and explore nearby gems like Kamakura and Nikko.', image: 'https://picsum.photos/seed/tokyo6/400/300', date: '2026-03-18' },
  { id: 'a7', title: 'Traditional Crafts of Tokyo', excerpt: 'Discover the artisans keeping ancient Japanese traditions alive.', image: 'https://picsum.photos/seed/tokyo7/400/300', date: '2026-03-22' },
  { id: 'a8', title: 'Tokyo Nightlife Guide', excerpt: 'From Roppongi clubs to Golden Gai alleys, experience Tokyo after dark.', image: 'https://picsum.photos/seed/tokyo8/400/300', date: '2026-03-25' },
  { id: 'a9', title: 'Cherry Blossom Viewing Tips', excerpt: 'How to make the most of the magical sakura season in Tokyo.', image: 'https://picsum.photos/seed/tokyo9/400/300', date: '2026-03-28' },
  { id: 'a10', title: 'Modern Architecture in Tokyo', excerpt: 'A tour of the city\'s most stunning and innovative buildings.', image: 'https://picsum.photos/seed/tokyo10/400/300', date: '2026-03-30' },
];

export const ITINERARY_IDEAS: Itinerary[] = [
  { 
    id: 'i1', 
    title: '3 Days in Tokyo', 
    duration: '3 Days', 
    description: 'The ultimate first-timer\'s guide to Tokyo\'s most iconic districts.', 
    image: 'https://picsum.photos/seed/iti1/800/600',
    agenda: [
      { day: 1, activities: ['Asakusa (Senso-ji)', 'Tokyo Skytree', 'Ueno Park'] },
      { day: 2, activities: ['Shibuya Crossing', 'Harajuku (Takeshita St)', 'Meiji Shrine'] },
      { day: 3, activities: ['Tsukiji Market', 'Ginza Shopping', 'TeamLab Planets'] }
    ]
  },
  { 
    id: 'i2', 
    title: '1 Day in Tokyo', 
    duration: '1 Day', 
    description: 'A fast-paced journey through the city\'s absolute must-see spots.', 
    image: 'https://picsum.photos/seed/iti2/800/600',
    agenda: [
      { day: 1, activities: ['Tsukiji Market (Morning)', 'Shibuya Crossing', 'Shinjuku (Night)'] }
    ]
  },
  { 
    id: 'i3', 
    title: 'Weekend Adventure', 
    duration: '2 Days', 
    description: 'Perfect for a quick getaway, focusing on culture and modern vibes.', 
    image: 'https://picsum.photos/seed/iti3/800/600',
    agenda: [
      { day: 1, activities: ['Imperial Palace', 'Akihabara Electric Town', 'Roppongi Hills'] },
      { day: 2, activities: ['Shimokitazawa (Vintage)', 'Daikanyama', 'Ebisu Yokocho'] }
    ]
  },
  { 
    id: 'i4', 
    title: 'Family Friendly Tour', 
    duration: '3 Days', 
    description: 'Fun for all ages, from theme parks to interactive museums.', 
    image: 'https://picsum.photos/seed/iti4/800/600',
    agenda: [
      { day: 1, activities: ['Tokyo Disneyland or DisneySea'] },
      { day: 2, activities: ['Ghibli Museum', 'Inokashira Park', 'Kichijoji'] },
      { day: 3, activities: ['Sunshine City (Ikebukuro)', 'Pokemon Center', 'Ueno Zoo'] }
    ]
  },
];

export const OTHER_CITIES = [
  { name: 'Osaka', image: 'https://picsum.photos/seed/osaka/200/200' },
  { name: 'Kyoto', image: 'https://picsum.photos/seed/kyoto/200/200' },
  { name: 'Fukuoka', image: 'https://picsum.photos/seed/fukuoka/200/200' },
  { name: 'Sapporo', image: 'https://picsum.photos/seed/sapporo/200/200' },
  { name: 'Nagoya', image: 'https://picsum.photos/seed/nagoya/200/200' },
  { name: 'Yokohama', image: 'https://picsum.photos/seed/yokohama/200/200' },
];

export const HOTEL_RECOMMENDATIONS: Hotel[] = [
  {
    id: 'h1',
    name: 'Park Hyatt Tokyo',
    image: 'https://picsum.photos/seed/hotel1/800/600',
    rating: 4.9,
    reviews: 2450,
    price: 850,
    location: 'Shinjuku',
    tags: ['Luxury', 'Views', 'Iconic'],
    rank: 1,
    review: "The views from the New York Bar are simply unparalleled. A true Tokyo icon."
  },
  {
    id: 'h2',
    name: 'The Peninsula Tokyo',
    image: 'https://picsum.photos/seed/hotel2/800/600',
    rating: 4.8,
    reviews: 1800,
    price: 720,
    location: 'Ginza',
    tags: ['Luxury', 'Service', 'Central'],
    rank: 2,
    review: "Flawless service and a perfect location for high-end shopping in Ginza."
  },
  {
    id: 'h3',
    name: 'Aman Tokyo',
    image: 'https://picsum.photos/seed/hotel5/800/600',
    rating: 4.9,
    reviews: 1200,
    price: 1200,
    location: 'Otemachi',
    tags: ['Minimalist', 'Luxury', 'Spa'],
    rank: 3,
    review: "An urban sanctuary. The minimalist design and massive lobby are breathtaking."
  },
  {
    id: 'h4',
    name: 'Hotel Gracery Shinjuku',
    image: 'https://picsum.photos/seed/hotel3/800/600',
    rating: 4.4,
    reviews: 5600,
    price: 180,
    location: 'Shinjuku',
    tags: ['Godzilla', 'Modern', 'Convenient'],
    rank: 4,
    review: "The Godzilla head is a fun touch, and the location is incredibly convenient."
  },
  {
    id: 'h5',
    name: 'Asakusa View Hotel',
    image: 'https://picsum.photos/seed/hotel4/800/600',
    rating: 4.5,
    reviews: 3200,
    price: 220,
    location: 'Asakusa',
    tags: ['Traditional', 'Views', 'Temple'],
    rank: 5,
    review: "Waking up to the view of Senso-ji temple is a magical experience."
  },
  {
    id: 'h6',
    name: 'Hoshinoya Tokyo',
    image: 'https://picsum.photos/seed/hotel6/800/600',
    rating: 4.8,
    reviews: 950,
    price: 900,
    location: 'Otemachi',
    tags: ['Ryokan', 'Luxury', 'Onsen'],
    rank: 6,
    review: "A luxury ryokan in the heart of the city. The rooftop onsen is a must-try."
  },
  {
    id: 'h7',
    name: 'The Ritz-Carlton Tokyo',
    image: 'https://picsum.photos/seed/hotel7/800/600',
    rating: 4.7,
    reviews: 2100,
    price: 780,
    location: 'Roppongi',
    tags: ['Luxury', 'Skyline', 'Service'],
    rank: 7,
    review: "Located in Tokyo Midtown, it offers some of the best skyline views in the city."
  },
  {
    id: 'h8',
    name: 'Trunk (Hotel)',
    image: 'https://picsum.photos/seed/hotel8/800/600',
    rating: 4.6,
    reviews: 1100,
    price: 350,
    location: 'Shibuya',
    tags: ['Boutique', 'Design', 'Social'],
    rank: 8,
    review: "A trendy boutique hotel with a great social atmosphere and local design."
  },
  {
    id: 'h9',
    name: 'Mandarin Oriental Tokyo',
    image: 'https://picsum.photos/seed/hotel9/800/600',
    rating: 4.8,
    reviews: 1600,
    price: 820,
    location: 'Nihonbashi',
    tags: ['Luxury', 'Dining', 'Views'],
    rank: 9,
    review: "The dining options here are world-class, and the views are spectacular."
  },
  {
    id: 'h10',
    name: 'The Tokyo Station Hotel',
    image: 'https://picsum.photos/seed/hotel10/800/600',
    rating: 4.7,
    reviews: 1400,
    price: 550,
    location: 'Marunouchi',
    tags: ['Historic', 'Luxury', 'Convenient'],
    rank: 10,
    review: "A historic gem located right inside the iconic Tokyo Station building."
  }
];
