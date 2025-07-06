import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // loads your sniper bot
import "./index.css"; // styles (Tailwind)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
