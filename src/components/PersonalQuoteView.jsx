import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMyQuote, setMyQuotes } from "../features/quoteSlice";

export default function PersonalQuoteView() {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote.myQuote);
  const myQuotes = useSelector((state) => state.quote.myQuotes);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setMyQuotes(quote));
  };

  return (
    <section style={{ textAlign: "center", marginTop: "60px" }}>
      <hr style={{ maxWidth: "30%" }} />
      <h2>My Quotes</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Quote"
          onChange={(e) => {
            dispatch(setMyQuote(e.target.value));
          }}
          value={quote}
        />
        <button type={`submit`}>Submit</button>
      </form>
      <ul style={{ marginBottom: "16px" }}>
        {myQuotes
          ? myQuotes.map((quote) => {
              return <li style={{ listStyle: "none" }}>{quote}</li>;
            })
          : null}
      </ul>
    </section>
  );
}
