import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Projects from "./Projects";
import Internships from "./Internships";
import Investment from "./investment";
import Walmart from "./walmart";
import Spotify from "./spotify";
import Boston from "./boston";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/global-investment-data-pipeline" element={<Investment />} />
        <Route path="/projects/walmart-demand-forecasting" element={<Walmart />} />
        <Route path="/projects/spotify-song-dataset-analysis" element={<Spotify />} />
        <Route path="/projects/boston-housing-price-prediction" element={<Boston />} />
        <Route path="/internships" element={<Internships />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);