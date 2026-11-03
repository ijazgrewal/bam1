export const fleet = [
  { name: "GMC Yukon XL", capacity: "Capacity to be confirmed", use: "Private family transfers", luggage: "Luggage suitability confirmed per journey" },
  { name: "Hyundai Staria", capacity: "Capacity to be confirmed", use: "Family and small-group journeys", luggage: "Luggage suitability confirmed per journey" },
  { name: "Toyota Hiace", capacity: "Capacity to be confirmed", use: "Larger family and group transfers", luggage: "Luggage suitability confirmed per journey" },
  { name: "Sprinter", capacity: "Capacity to be confirmed", use: "Group and multi-stop travel", luggage: "Luggage suitability confirmed per journey" },
];

export const services = [
  { title: "Airport transfers", href: "/airport-transfers", description: "Arrival and departure coordination for journeys to and from the airport." },
  { title: "Intercity transfers", href: "/intercity-transfers", description: "Private travel between Makkah Mukarramah, Madinah Munawwarah and Jeddah." },
  { title: "Ziyarat tours", href: "/ziyarat-tours", description: "Flexible itineraries shaped around your group, preferred stops and availability." },
  { title: "Transport packages", href: "/packages", description: "Transfer bundles with scope, exclusions and arrangements confirmed before booking." },
  { title: "Group transport", href: "/group-transport", description: "Flexible transport planning for larger parties, organisers and multi-stop journeys." },
];

export const routes = [
  { origin: "Jeddah Airport", destination: "Makkah Mukarramah", menuLabel: "Jeddah Airport to Makkah" },
  { origin: "Jeddah Airport", destination: "Madinah Munawwarah", menuLabel: "Jeddah Airport to Madinah" },
  { origin: "Jeddah Airport", destination: "King Abdullah Economic City (KAEC)", menuLabel: "Jeddah Airport to KAEC" },
  { origin: "Makkah Mukarramah", destination: "Madinah Munawwarah", menuLabel: "Makkah to Madinah" },
  { origin: "Madinah Munawwarah", destination: "Makkah Mukarramah", menuLabel: "Madinah to Makkah" },
  { origin: "Madinah Airport", destination: "Madinah Hotel", menuLabel: "Madinah Airport to Madinah Hotel" },
  { origin: "Madinah Munawwarah", destination: "Jeddah Airport", menuLabel: "Madinah to Jeddah Airport" },
  { origin: "Makkah Mukarramah", destination: "Jeddah Airport", menuLabel: "Makkah to Jeddah Airport" },
] as const;

export const routeSlug = (origin: string, destination: string) =>
  `${origin}-to-${destination}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
