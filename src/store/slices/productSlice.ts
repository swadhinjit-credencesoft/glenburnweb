import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ProductState } from "@/data/product";
import { INITIAL_PRODUCT } from "@/data/product";

const initialState: ProductState = INITIAL_PRODUCT;

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setQty(state, action: PayloadAction<number>) {
      state.qty = action.payload;
    },
    setSlot(state, action: PayloadAction<string>) {
      state.slotId = action.payload;
    },
    toggleAddon(state, action: PayloadAction<string>) {
      state.addons[action.payload] = !state.addons[action.payload];
    },
    setAddon(state, action: PayloadAction<{ id: string; checked: boolean }>) {
      state.addons[action.payload.id] = action.payload.checked;
    },
  },
});

export const { setQty, setSlot, toggleAddon, setAddon } = productSlice.actions;
export default productSlice.reducer;
