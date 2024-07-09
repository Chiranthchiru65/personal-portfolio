import React from "react";
// import "projects.css";
import "./projectsCard.css";
function ProjectsCard({ details }) {
  const listItemStyle = {
    display: "inline-block",
    marginRight: "10px",
  };

  return (
    <div className="work-experience-card">
      <div>
        <h4 style={{ display: "flex", justifyContent: "space-between" }}>
          {details.projectName}
          <span>
            <button
              className="card-button"
              onClick={() => window.open(`${details.livelink}`)}
            >
              {"live </>"}
            </button>
          </span>
        </h4>
      </div>

      <div className="work-duration ">
        {details.TechUsed.map((tech, i) => (
          <li key={i} style={listItemStyle}>
            {tech}
          </li>
        ))}
      </div>

      <ul>
        {details.discription.map((dis, i) => (
          <li key={i} className="discription">
            {dis}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectsCard;
