import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

export default function Investment() {
  const navigate = useNavigate();

  return (
    <div className="investment-page">
      <div className="projects-header">
        <button className="cta back-button" onClick={() => navigate(-1)}>
          Back
        </button>
        <h1 className="projects-title">Global Investment Data Pipeline</h1>
      </div>
    </div>
  );
}