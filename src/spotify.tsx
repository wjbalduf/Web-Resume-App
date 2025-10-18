import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";
import "./spotify.css";

export default function Spotify() {
  const navigate = useNavigate();

  // Content sections with image and text
  const sections = [
    {
      img: "/images/spotify.png",
      alt: "Spotify Dataset",
      text: "This is the main Spotify dataset visualization showing the distribution of song features across different genres."
    },
    {
      img: "/images/correlation_matrix.png",
      alt: "Correlation Matrix",
      text: "A correlation matrix highlighting relationships between different song features, helping identify patterns in the dataset."
    },
    {
      img: "/images/comparison.png",
      alt: "Comparison Chart",
      text: "Comparison chart of top artists and their songs, giving insight into popular trends and music characteristics."
    },
    {
      img: "/images/box_plot.png",
      alt: "Box Plot",
      text: "Box plots showing the distribution of song attributes like tempo, loudness, and danceability across the dataset."
    },
  ];

  return (
    <div className="selected-page">
      {/* Header */}
      <div className="projects-header">
        <button className="cta back-button" onClick={() => navigate(-1)}>
          Back
        </button>
        <h1 className="projects-title">Spotify Song Dataset Analysis</h1>
      </div>

      {/* Sections */}
      <div className="spotify-sections">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`spotify-section ${index % 2 === 0 ? "normal" : "reverse"}`}
          >
            <img
              src={section.img}
              alt={section.alt}
              className="spotify-img"
            />
            <p className="spotify-text">{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}