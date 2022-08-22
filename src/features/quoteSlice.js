import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quote: "",
  myQuote: "",
  myQuotes: [],
  favQuotes: [],
};

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    setQuote: (state, action) => {
      state.quote = action.payload;
    },
    setMyQuote: (state, action) => {
      state.myQuote = action.payload;
    },
    setMyQuotes: (state, action) => {
      if (!state.myQuotes.includes(action.payload)) {
        state.myQuotes.push(action.payload);
        state.myQuote = "";
      }
    },
    setFavQuotes: (state, action) => {
      if (!state.favQuotes.includes(action.payload)) {
        state.favQuotes.push(action.payload);
      }
    },
  },
});

export const { setQuote, setMyQuote, setMyQuotes, setFavQuotes } =
  quoteSlice.actions;
export default quoteSlice.reducer;
