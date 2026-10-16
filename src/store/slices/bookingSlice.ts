import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { BookingState } from "@/data/booking";
import { BOOKING_SLOTS, INITIAL_BOOKING } from "@/data/booking";
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
      state.slot = BOOKING_SLOTS[action.payload][0];
    },
    setBookingSlot(state, action: PayloadAction<string>) {
      state.slot = action.payload;
      state.timeOfDay = BOOKING_SLOTS.afternoon.includes(action.payload)
        ? "afternoon"
        : "morning";
    },
    submitBooking(state) {
      state.submitted = true;
    },
  },
});

export const {
  setBookingField,
  toggleService,
  setTimeOfDay,
  setBookingSlot,
  submitBooking,
} = bookingSlice.actions;
export default bookingSlice.reducer;
