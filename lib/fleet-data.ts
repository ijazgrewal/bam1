export type FleetVehicle = { slug: string; name: string; image: string | null; use: string };
type FleetVehicleWithImage = FleetVehicle & { image: string };

export const approvedFleet: readonly FleetVehicleWithImage[] = [
  { slug: "gmc-yukon-xl", name: "GMC Yukon XL", image: "/fleet-gmc-yukon-xl.png", use: "Private family transfers and premium point-to-point journeys." },
  { slug: "hyundai-staria", name: "Hyundai Staria", image: "/fleet-hyundai-staria.png", use: "Family and small-group journeys with luggage reviewed before confirmation." },
  { slug: "toyota-hiace", name: "Toyota Hiace", image: "/fleet-toyota-hiace.png", use: "Larger family and group transfers across Saudi Arabia." },
] as const;

export const fleetDetails: readonly FleetVehicle[] = [
  ...approvedFleet,
  { slug: "sprinter", name: "Sprinter", image: null, use: "Group and multi-stop transport, subject to vehicle and journey confirmation." },
];
