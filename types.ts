export type ActiveTab = 'home' | 'about' | 'gallery' | 'contact';

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  emoji: string;
  details: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'stucco' | 'siding' | 'parging' | 'moulding';
  image: string;
  location: string;
  description: string;
}

export interface StatItem {
  id: string;
  count: string;
  label: string;
}

export interface DifferenceItem {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
}
