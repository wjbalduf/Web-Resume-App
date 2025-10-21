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
      text: "Began with cleaning a dataset by removing outliers, nulls, and standardizing text. A snippet of the cleaned dataset is on the left."
    },
    {
      img: "/images/correlation_matrix.png",
      alt: "Correlation Matrix",
      text: "A correlation matrix was created with the data to highlight the relationships between different song features to help identify patterns in the dataset. This specific matrix can show us that loudness has the greatest correlation with a song's popularity."
    },
    {
      img: "/images/comparison.png",
      alt: "Comparison Chart",
      text: "Comparison chart of loudness and popularity. The upward skew points to loud songs being more popular."
    },
    {
      img: "/images/box_plot.png",
      alt: "Box Plot",
      text: "Box plot showing the popularity distribution by genre. Pop songs tend to be the most popular while movie songs are the least popular."
    },
  ];

  return (
    <div className="selected-page">
      {/* Header */}
      <div className="projects-header">
        <button className="cta back-button" onClick={() => navigate(-1)}>
          Back
        </button>
        <h1 className="projects-title">Spotify Song Exploratory Data Analysis</h1>
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