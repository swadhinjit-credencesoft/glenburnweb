import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INITIAL_FILTERS_CHECKED } from "@/data/filters";

export interface FiltersState {
  checked: Record<string, boolean>;
  sort: number;
}

const initialState: FiltersState = {
  checked: INITIAL_FILTERS_CHECKED,
  sort: 0,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleFilter(state, action: PayloadAction<string>) {
      state.checked[action.payload] = !state.checked[action.payload];
    },
    setSort(state, action: PayloadAction<number>) {
      state.sort = action.payload;
    },
  },
});

export const { toggleFilter, setSort } = filtersSlice.actions;
export default filtersSlice.reducer;
