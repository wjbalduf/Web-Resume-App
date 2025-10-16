import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const projects = [
  {
    title: "Global Investment Data Pipeline",
    gif: "/gifs/investment.gif",
    staticImg: "/images/investment_static.png"
  },
  {
    title: "Walmart Demand Forecasting",
    gif: "/gifs/walmart.gif",
    staticImg: "/images/walmart_static.png"
  },
  {
    title: "Boston Housing Price Prediction",
    gif: "/gifs/boston.gif",
    staticImg: "/images/boston_static.png"
  },
  {
    title: "Spotify Song Dataset Analysis",
    gif: "/gifs/spotify.gif",
    staticImg: "/images/spotify_static.png"
  },
];

export default function Projects() {
  return (
    <div className="projects-page">
      {/* Header */}
      <div className="projects-header">
        <Link to="/" className="cta back-button">
          Back
        </Link>
        <h1 className="projects-title">Projects</h1>
      </div>

      {/* Project grid */}
      <div className="project-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <img
              src={proj.staticImg}
              alt={proj.title}
              className="project-img"
              onMouseEnter={e => (e.currentTarget.src = proj.gif)}
              onMouseLeave={e => (e.currentTarget.src = proj.staticImg)}
            />
            <p>{proj.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}