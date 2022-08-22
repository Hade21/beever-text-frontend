import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFavQuotes, setQuote } from "../features/quoteSlice";
import { quoteAPI } from "../provider/api";

export default function KanyeQuoteView() {
  const dispatch = useDispatch();
  const [newQuote, setNewQuote] = React.useState("");
  const quote = useSelector((state) => state.quote.quote);
  const favQuotes = useSelector((state) => state.quote.favQuotes);

  const handleGetQuote = () => {
    quoteAPI
      .get()
      .then((res) => {
        setNewQuote(res.data.quote);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleAddFav = () => {
    dispatch(setFavQuotes(quote));
  };

  useEffect(() => {
    quoteAPI
      .get()
      .then((res) => {
        dispatch(setQuote(res.data.quote));
      })
      .catch((err) => console.log(err));
  }, [dispatch, newQuote]);
  console.log(quote);
  return (
    <section style={{ textAlign: "center" }}>
      <img
        src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
        alt="W3Schools.com"
        style={{ width: "300px" }}
      />
      <h1 style={{ fontSize: "40px", marginTop: "10px" }}>Kanye-West Quote</h1>
      <h3 style={{ fontWeight: "600" }}>{quote}</h3>
      <button onClick={handleGetQuote}>Get Quote</button>
      <button onClick={handleAddFav}>Add Favorite</button>
      <ul style={{ listStyle: "none" }}>
        {favQuotes
          ? favQuotes.map((quote) => {
              return <li>{quote}</li>;
            })
          : null}
      </ul>
    </section>
  );
}
