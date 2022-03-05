import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppProviders from "./context";
import "./index.css";
import "src/fonts/Tajawal-Medium.ttf";
ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <main className="font">
        <App />
      </main>
    </AppProviders>
  </React.StrictMode>,
  document.getElementById("root")
);
