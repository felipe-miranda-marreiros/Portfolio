import React from "react";
import "./Skills-card.style.scss";

const SkillsCard = () => {
  return (
    <div className="projects-section__skills">
      <img
        src="https://img.icons8.com/color/480/000000/html-5--v1.png"
        alt="HTML"
        className="projects-section__skills-img"
      />
      <img
        src="https://img.icons8.com/color/480/000000/css3.png"
        alt="HTML"
        className="projects-section__skills-img"
      />
      <img
        src="https://img.icons8.com/color/480/000000/javascript--v1.png"
        alt="HTML"
        className="projects-section__skills-img"
      />
    </div>
  );
};

export default SkillsCard;
