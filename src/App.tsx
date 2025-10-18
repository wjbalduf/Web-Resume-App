import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="appBody">
      <div className="hero">
        <h1 className="animated-name">
          Hey! I’m <span>William Balduf</span>
        </h1>
        <p className="tagline">
          Data Science Major & Management Information Systems Minor @ Worcester Polytechnic Institute
        </p>
        <div className="button-group">
          <Link to="/projects" className="cta">View My Projects</Link>
          <Link to="/internships" className="cta secondary">Professional Experience</Link>
        </div>
      </div>
    </div>
  );
}

export default App;