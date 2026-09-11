export interface Badge {
  text: string;
  variant: "amber" | "blue" | "dark";
}

export interface Chip {
  text: string;
  green?: boolean;
}

export interface Tyre {
  slug: string;
  brand: string;
  name: string;
  size: string;
  priceEach: number;
  multiLabel: string;
  badge?: Badge;
  chips: Chip[];
  wetGrip?: number;
  treadLife?: number;
  stockLine: string;
  stockLow?: boolean;
  best?: boolean;
  usedNote?: string;
}

export interface SpecRow {
  k: string;
  v: string;
}

export interface FittingSlot {
  id: string;
  day: string;
  time: string;
  off?: boolean;
}
