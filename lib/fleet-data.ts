export type FleetVehicle = { slug: string; name: string; image: string | null; use: string };
type FleetVehicleWithImage = FleetVehicle & { image: string };

export const approvedFleet: readonly FleetVehicleWithImage[] = [
  { slug: "gmc-yukon-xl", name: "GMC Yukon XL", image: "/fleet-gmc-yukon-xl.webp", use: "Private family transfers and premium point-to-point journeys." },
  { slug: "hyundai-staria", name: "Hyundai Staria", image: "/fleet-hyundai-staria.webp", use: "Family and small-group journeys with luggage reviewed before confirmation." },
  { slug: "toyota-hiace", name: "Toyota Hiace", image: "/fleet-toyota-hiace.webp", use: "Larger family and group transfers across Saudi Arabia." },
  { slug: "sprinter", name: "Sprinter", image: "/fleet-sprinter.webp", use: "Spacious private group transport for connected family and multi-stop journeys." },
] as const;

export const fleetDetails: readonly FleetVehicle[] = approvedFleet;
