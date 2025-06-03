import React, { useState } from "react";
import skillsData from "../SkillsData";
import '../css/Skills.css'

const categories = ["All", "Frontend", "Backend", "Tools"];

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills = selectedCategory === "All"
    ? skillsData
    : skillsData.filter(skill => skill.category === selectedCategory);

  return (
    <div className="skills-container">
        
      <div className="tabs">
        <h1>My <span>Skills</span></h1><br /><br />
        {categories.map(cat => (
          <button
            key={cat}
            className={`tab ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {filteredSkills.map(skill => (
          <div key={skill.name} className="skill-card">
            <div className="skill-name">{skill.name}</div>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${skill.level}%` }}></div>
            </div>
            <div className="skill-percent">{skill.level}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

