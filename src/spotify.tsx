import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

export default function Investment() {
  return (
    <div className="project-detail-page">
      <div className="project-detail-header">
        <Link to="/projects" className="cta back-button">
          Back to Projects
        </Link>
        <h1>Global Investment Data Pipeline</h1>
      </div>

      <div className="project-detail-content">
        <p>
          The Global Investment Data Pipeline project is designed to collect,
          process, and analyze investment data from multiple sources, providing
          actionable insights for data-driven decision making.
        </p>

        <h2>Project Overview</h2>
        <p>
          The pipeline ingests data from APIs, CSV files, and financial reports,
          cleans and transforms it, and stores it in a central database.
          Interactive dashboards allow users to monitor performance and identify
          trends in real-time.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li>Automated data ingestion from multiple sources</li>
          <li>Data cleaning and transformation</li>
          <li>Interactive dashboards for portfolio analysis</li>
          <li>Real-time monitoring of market trends</li>
        </ul>

        <h2>Technologies Used</h2>
        <p>
          Python, Pandas, SQL, Tableau, and Flask were used to build the system,
          enabling efficient data processing, visualization, and web deployment.
        </p>

        <img
          src="/images/investment_static.png"
          alt="Investment Project"
          className="project-detail-img"
          style={{ marginTop: "20px", width: "100%", maxWidth: "600px" }}
        />
      </div>
    </div>
  );
}