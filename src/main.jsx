import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// ✅ Bootstrap CSS (if not yet added)
import "bootstrap/dist/css/bootstrap.min.css";

// ✅ Bootstrap JS (THIS is the correct place)
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
);
