export type FleetVehicle = { slug: string; name: string; image: string | null; use: string; capacity: string; luggage: string; features: readonly string[]; bestFor: string };
type FleetVehicleWithImage = FleetVehicle & { image: string };

export const approvedFleet: readonly FleetVehicleWithImage[] = [
  { slug: "gmc-yukon-xl", name: "GMC Yukon XL", image: "/fleet-gmc-yukon-xl.webp", use: "Private family transfers and premium point-to-point journeys.", capacity: "TODO(BAM): confirm passenger capacity", luggage: "TODO(BAM): confirm luggage capacity", features: ["Private transfer", "Air-conditioned cabin", "TODO(BAM): confirm vehicle features"], bestFor: "Airport arrivals and premium point-to-point journeys" },
  { slug: "hyundai-staria", name: "Hyundai Staria", image: "/fleet-hyundai-staria.webp", use: "Family and small-group journeys with luggage reviewed before confirmation.", capacity: "TODO(BAM): confirm passenger capacity", luggage: "TODO(BAM): confirm luggage capacity", features: ["Private transfer", "Air-conditioned cabin", "TODO(BAM): confirm vehicle features"], bestFor: "Airport and city journeys for families" },
  { slug: "toyota-hiace", name: "Toyota Hiace", image: "/fleet-toyota-hiace.webp", use: "Larger family and group transfers across Saudi Arabia.", capacity: "TODO(BAM): confirm passenger capacity", luggage: "TODO(BAM): confirm luggage capacity", features: ["Private transfer", "Air-conditioned cabin", "TODO(BAM): confirm vehicle features"], bestFor: "Larger family and group transfers" },
  { slug: "sprinter", name: "Mercedes-Benz Sprinter", image: "/fleet-sprinter.webp", use: "Spacious private group transport for connected family and multi-stop journeys.", capacity: "TODO(BAM): confirm passenger capacity", luggage: "TODO(BAM): confirm luggage capacity", features: ["Private transfer", "Air-conditioned cabin", "TODO(BAM): confirm vehicle features"], bestFor: "Intercity and multi-stop group journeys" },
] as const;

export const fleetDetails: readonly FleetVehicle[] = approvedFleet;
