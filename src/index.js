import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
