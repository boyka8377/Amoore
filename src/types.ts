export interface HeroSlide {
  id: number;
  tag: string;
  subtag: string;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaAction: string;
}

export interface ServicePackage {
  id: string;
  number: string;
  categoryTag: string;
  category: string;
  title: string;
  price: string;
  numericPrice: number;
  badge: string;
  bullets: string[];
  subline: string;
  image: string;
}

export interface PortfolioItem {
  id: number;
  numberStr: string;
  title: string;
  subtitle: string;
  tag: string;
  image: string;
  baseZ: number;
  description: string;
  accentColor: string;
}

export interface BranchStudio {
  id: 'uttara' | 'mirpur';
  code: string;
  title: string;
  shortTitle: string;
  secTag: string;
  address: string;
  hours: string;
  phone: string;
  parking: string;
  mapQuery: string;
  directionsUrl: string;
  statusText: string;
}

export interface BookingSubmission {
  name: string;
  phone: string;
  atelier: string;
  service: string;
  date: string;
  timeSlot: string;
  bookingRef: string;
  createdAt: string;
}
