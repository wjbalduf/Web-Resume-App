import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

const projects = [
  {
    title: "Global Investment Data Pipeline",
    gif: "/gifs/investment.gif",
    staticImg: "/images/investment_static.png",
    slug: "global-investment-data-pipeline",
  },
  {
    title: "Walmart Demand Forecasting",
    gif: "/gifs/walmart.gif",
    staticImg: "/images/walmart_static.png",
    slug: "walmart-demand-forecasting",
  },
  {
    title: "Boston Housing Price Prediction",
    gif: "/gifs/boston.gif",
    staticImg: "/images/boston_static.png",
    slug: "boston-housing-price-prediction",
  },
  {
    title: "Spotify Song Dataset Analysis",
    gif: "/gifs/spotify.gif",
    staticImg: "/images/spotify_static.png",
    slug: "spotify-song-dataset-analysis",
  },
];

export default function Projects() {
  const navigate = useNavigate();

  const handleClick = (slug: string) => {
    navigate(`/projects/${slug}`);
  };

  return (
    <div className="projects-page">
      <div className="projects-header">
        <button className="cta back-button" onClick={() => navigate("/")}>
          Back
        </button>
        <h1 className="projects-title">Projects</h1>
      </div>

      <div className="project-grid">
        {projects.map((proj) => (
          <div key={proj.slug} className="project-card">
            <img
              src={proj.staticImg}
              alt={proj.title}
              className="project-img"
              onMouseEnter={(e) => (e.currentTarget.src = proj.gif)}
              onMouseLeave={(e) => (e.currentTarget.src = proj.staticImg)}
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(proj.slug)} 
            />
            <p
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(proj.slug)} 
            >
              {proj.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
