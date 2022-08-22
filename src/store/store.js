import { configureStore } from "@reduxjs/toolkit";
import quoteSlice from "../features/quoteSlice";

export const store = configureStore({
  reducer: {
    quote: quoteSlice,
  },
});
