import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { CheckoutState } from "@/data/checkout";
import { INITIAL_CHECKOUT } from "@/data/checkout";

const initialState: CheckoutState = INITIAL_CHECKOUT;

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setPayment(state, action: PayloadAction<string>) {
      state.payment = action.payload;
    },
    setField(
      state,
      action: PayloadAction<{ field: keyof Omit<CheckoutState, "payment">; value: string }>
    ) {
      state[action.payload.field] = action.payload.value;
    },
  },
});

export const { setPayment, setField } = checkoutSlice.actions;
export default checkoutSlice.reducer;
