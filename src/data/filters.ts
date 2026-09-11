export const INITIAL_FILTERS_CHECKED: Record<string, boolean> = {
  b150250: true,
  instock: true,
};

export interface FilterGroup {
  id: string;
  title: string;
  options: { id: string; label: string; count: number }[];
}

export const FILTER_GROUPS: FilterGroup[] = [
  {
    id: "budget",
    title: "Budget",
    options: [
      { id: "u150", label: "Under $150", count: 4 },
      { id: "b150250", label: "$150 – $250", count: 7 },
      { id: "o250", label: "Over $250", count: 3 },
    ],
  },
  {
    id: "brand",
    title: "Brand",
    options: [
      { id: "michelin", label: "Michelin", count: 2 },
      { id: "bridgestone", label: "Bridgestone", count: 3 },
      { id: "yokohama", label: "Yokohama", count: 3 },
      { id: "dunlop", label: "Dunlop", count: 2 },
      { id: "maxxis", label: "Maxxis", count: 2 },
    ],
  },
  {
    id: "driving",
    title: "Driving",
    options: [
      { id: "wet", label: "Wet-weather grip", count: 6 },
      { id: "tread", label: "Long tread life", count: 5 },
      { id: "quiet", label: "Quiet on motorway", count: 4 },
      { id: "at", label: "4x4 / all-terrain", count: 3 },
    ],
  },
  {
    id: "availability",
    title: "Availability",
    options: [
      { id: "instock", label: "In stock, fit today", count: 9 },
      { id: "used", label: "Include second-hand", count: 2 },
    ],
  },
];