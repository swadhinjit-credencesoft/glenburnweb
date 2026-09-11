export interface QuoteItem {
  slug: string;
  brand: string;
  name: string;
  size: string;
  qty: number;
  priceEach: number;
}

export const INITIAL_QUOTE_ITEMS: QuoteItem[] = [];
export const INITIAL_QUOTE_COUNT = 0;