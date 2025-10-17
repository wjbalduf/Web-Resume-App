import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

export default function Walmart() {
  const navigate = useNavigate();

  return (
    <div className="investment-page">
      <div className="projects-header">
        <button className="cta back-button" onClick={() => navigate(-1)}>
          Back
        </button>
        <h1 className="projects-title">Walmart Demand Casting</h1>
      </div>
    </div>
  );
}