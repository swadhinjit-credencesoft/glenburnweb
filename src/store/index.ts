import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./slices/quoteSlice";
import productReducer from "./slices/productSlice";
import checkoutReducer from "./slices/checkoutSlice";
import filtersReducer from "./slices/filtersSlice";
import bookingReducer from "./slices/bookingSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      quote: quoteReducer,
      product: productReducer,
      checkout: checkoutReducer,
      filters: filtersReducer,
      booking: bookingReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
