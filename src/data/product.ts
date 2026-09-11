export interface ProductState {
  slug: string;
  qty: number;
  slotId: string;
  addons: Record<string, boolean>;
}

export const INITIAL_PRODUCT: ProductState = {
  slug: "bluearth-gt-ae51",
  qty: 4,
  slotId: "mon-1030",
  addons: { alignment: true, inspection: false },
};