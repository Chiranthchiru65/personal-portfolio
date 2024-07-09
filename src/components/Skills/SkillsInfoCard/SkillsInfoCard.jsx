import React from "react";
import "./SkillsInfoCard.css";
function SkillsInfoCard({ heading, skills }) {
  return (
    <div className="skills-info-card">
      <h1>{heading}</h1>

      <div className="skills-info-content">
        {skills.map((item, i) => (
          <React.Fragment key={i}>
            <div className="skill-info">
              <p> {item.skill}</p>
              <p className="percentage">{item.percentage}</p>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress"
                style={{ width: item.percentage }}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default SkillsInfoCard;
