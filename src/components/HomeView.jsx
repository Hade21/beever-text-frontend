import React from "react";

import KanyeQuoteView from "./KanyeQuoteView";
import PersonalQuoteView from "./PersonalQuoteView";

export default function HomeView() {
  return (
    <main style={{ marginLeft: "5%", marginRight: "5%", marginTop: "10vh" }}>
      <div style={{ marginBottom: "10vh" }}>
        <a href="https://kanye.rest">API SITE</a>
      </div>
      <KanyeQuoteView />
      <PersonalQuoteView />
    </main>
  );
}
