import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { BookingState } from "@/data/booking";
import { INITIAL_BOOKING } from "@/data/booking";
export type { BookingState } from "@/data/booking";

const initialState: BookingState = INITIAL_BOOKING;

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBookingField(
      state,
      action: PayloadAction<{ field: keyof BookingState; value: string }>
    ) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (state as any)[action.payload.field] = action.payload.value;
    },
    toggleService(state, action: PayloadAction<string>) {
      state.services[action.payload] = !state.services[action.payload];
    },
    setTimeOfDay(state, action: PayloadAction<"morning" | "afternoon">) {
      state.timeOfDay = action.payload;
    },
  },
});

export const { setBookingField, toggleService, setTimeOfDay } =
  bookingSlice.actions;
export default bookingSlice.reducer;
