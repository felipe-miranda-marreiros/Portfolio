import React from "react";
import "./Skills.style.scss";
import skills from "../../assets/imgs/svg/undraw_programming_re_kg9v.svg";
const Skills = () => {
  return (
    <div className="skills-section" id="Skills">
      <div className="container">
        <div className="skills-section__content">
          <section className="skills-section__content-text">
            <h2>Skills</h2>
            <p>
              Como estou migrando para área de TI, não quis negligenciar os
              fundamentos, então comecei por HTML, CSS e JavaScript para então
              embarcar em uma framework.
            </p>
            <p>
              Atualmente estou estudando React pelo Scrimba e Udemy. Faço parte
              também do programa Oracle Next na Alura. Além das tecnologias
              abaixo, estou estudando Algoritmos e Estrutura de Dados.
            </p>
          </section>
          <div className="skills-section__content-img">
            <img src={skills} alt="" />
          </div>
        </div>
        <div className="skills-section__items">
          <img
            src="https://img.icons8.com/color/480/000000/html-5--v1.png"
            alt="HTML"
            title="HTML"
          />
          <img
            src="https://img.icons8.com/color/480/000000/css3.png"
            alt="CSS"
            title="CSS"
          />
          <img
            src="https://img.icons8.com/color/480/000000/javascript--v1.png"
            alt="JavaScript"
            title="JavaScript"
          />
          <img
            src="https://img.icons8.com/color/480/000000/sass.png"
            alt="SASS"
            title="SASS"
          />
          <img
            src="https://img.icons8.com/color/480/000000/npm.png"
            alt="NPM"
            title="NPM"
          />
          <img
            src="https://img.icons8.com/color/480/000000/react-native.png"
            alt="React"
            title="React"
          />
          <img
            src="https://img.icons8.com/color/480/000000/git.png"
            alt="Git"
            title="Git"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
