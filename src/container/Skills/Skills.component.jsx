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
              Atualmente estou estudando React pelo Scrimba e Udemy. Além das
              tecnologias abaixo, estou estudando Algoritmos e Estrutura de
              Dados.
            </p>
            <p>
              Quer ver minha evolução com HTML, CSS e JavaScript? Clique nos
              icones abaixo.
            </p>
            <div>
              <a
                href="https://github.com/felipe-miranda-marreiros/HTML"
                target={"_blank"}
                rel="noreferrer"
              >
                <img
                  src="https://img.icons8.com/color/480/000000/html-5--v1.png"
                  alt="HTML"
                  className="projects-section__skills-img"
                />
              </a>
              <a
                href="https://github.com/felipe-miranda-marreiros/CSS"
                target={"_blank"}
                rel="noreferrer"
              >
                <img
                  src="https://img.icons8.com/color/480/000000/css3.png"
                  alt="HTML"
                  className="projects-section__skills-img"
                />
              </a>
              <a
                href="https://github.com/felipe-miranda-marreiros/JavaScript"
                target={"_blank"}
                rel="noreferrer"
              >
                <img
                  src="https://img.icons8.com/color/480/000000/javascript--v1.png"
                  alt="HTML"
                  className="projects-section__skills-img"
                />
              </a>
            </div>
            <section>
              <h3>O futuro</h3>
              <p>
                JavaScript é a minha primeira linguagem de programação. Gostei
                como ela funciona por debaixo dos panos e futuramente espero
                estudar Node JS e TypeScript. Minha meta é ser FullStack quando
                tiver mais experiência.
              </p>
            </section>
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
