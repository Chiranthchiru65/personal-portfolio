import "./Skills.css";
import { SKILLS } from "./data";
import SkillCard from "./SkillCard";
import { useState } from "react";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";
function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  function handleSelectedSkill(data) {
    setSelectedSkill(data);
  }

  return (
    <section className="skills-container">
      <h5>Technical proficiency</h5>

      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item, i) => (
            <SkillCard
              key={i}
              title={item.title}
              iconUrl={item.icon}
              isActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSelectedSkill(item);
              }}
            />
          ))}
        </div>

        <div className="skills-info">
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
}
export default Skills;
