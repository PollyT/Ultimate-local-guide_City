export interface Attraction {
  id: string;
  name: string;
  description: string;
  image: string;
  access: string;
  hours: string;
  holidays: string;
  fees: string;
  rating: number;
  reviews: number;
  rank?: number;
  coordinates: [number, number]; // [x, y] for custom SVG map or [lon, lat]
  url?: string;
}

export interface Event {
  id: string;
  name: string;
  date: string; // ISO format
  description: string;
  image: string;
  type: 'seasonal' | 'holiday' | 'trend' | 'event';
}

export interface Food {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Activity {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  rank: number;
}

export interface Article {
  id: string;
  title: string;
  image: string;
  excerpt: string;
  date: string;
  views?: number;
}

export interface Itinerary {
  id: string;
  title: string;
  duration: string;
  description: string;
  image: string;
  agenda: {
    day: number;
    activities: string[];
  }[];
}

export interface Area {
  id: string;
  name: string;
  path: string; // SVG path data
}

export interface Hotel {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  location: string;
  tags: string[];
  rank: number;
  review: string;
}
