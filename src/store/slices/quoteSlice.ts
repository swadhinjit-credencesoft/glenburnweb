import { createSlice } from "@reduxjs/toolkit";
import type { QuoteItem } from "@/data/quote";
import { INITIAL_QUOTE_ITEMS } from "@/data/quote";

interface QuoteState {
  items: QuoteItem[];
  count: number;
}

const initialState: QuoteState = {
  items: INITIAL_QUOTE_ITEMS,
  count: 0,
};

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    setQuoteCount(state, action: { payload: number }) {
      state.count = action.payload;
    },
    addToQuote(state, action: { payload: QuoteItem }) {
      const existing = state.items.find((i) => i.slug === action.payload.slug);
      if (existing) {
        existing.qty = action.payload.qty;
      } else {
        state.items.push(action.payload);
      }
      state.count = state.items.reduce((sum, i) => sum + i.qty, 0);
    },
    clearQuote(state) {
      state.items = [];
      state.count = 0;
    },
  },
});

export const { setQuoteCount, addToQuote, clearQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
