import React from "react";
import "./Projects.style.scss";
import SkillsCard from "../Skills-card/Skills-card.component";

import projeto1 from "../../assets/imgs/png/omnifood.png";
import projeto2 from "../../assets/imgs/png/forkify.png";
import projeto3 from "../../assets/imgs/png/mapty.png";
import projeto4 from "../../assets/imgs/png/fylo.png";
import projeto5 from "../../assets/imgs/png/intro-signup.png";
import projeto6 from "../../assets/imgs/png/forca.png";
import projeto7 from "../../assets/imgs/png/criptografar.png";

const Projects = () => {
  return (
    <div className="projects-section container" id="Projetos">
      <h2>Projetos</h2>
      <div className="projects-section__container">
        <div className="projects-section__items">
          <div className="projects-imgs">
            <img src={projeto1} alt="Projeto" />
          </div>
          <div className="projects-section__content">
            <SkillsCard />
            <h3>Omnifood</h3>
            <p>
              É uma Lading Page com base em um app de delivery fictício,
              Omnifood. Foi utilizado HTML Semântico, Flexbox, Grid e Vanilla
              JavaScript. Além do uso de Web Components como Card, Forms e
              Footer.
            </p>
            <a
              className="btn"
              href="https://github.com/felipe-miranda-marreiros/Omnifood"
              target={`_blank`}
            >
              Saiba Mais...
            </a>
          </div>
        </div>
        <div className="projects-section__items">
          <div>
            <img src={projeto2} alt="Projeto" />
          </div>
          <div className="projects-section__content">
            <SkillsCard />
            <h3>Forkify</h3>
            <p>
              É uma Single Page Application que permite o usuário buscar
              receitas (em inglês). Principal objetivo desse projeto é a
              utilização de conceitos como MVC, ES6 Modules, Event Handlers e o
              uso de Fetch API - Try, Catch.
            </p>
            <a
              className="btn"
              href="https://github.com/felipe-miranda-marreiros/Forkify"
              target={`_blank`}
            >
              Saiba Mais...
            </a>
          </div>
        </div>
        <div className="projects-section__items">
          <div>
            <img src={projeto3} alt="Projeto" />
          </div>
          <div className="projects-section__content">
            <SkillsCard />
            <h3>Mapty</h3>
            <p>
              É um site que permite fazer track de exercícios físicos do usuário
              como corrida ou ciclismo. Foi utilizado a biblioteca Leaflet com
              Geolocation API e POO como forma de estruturar o código.
            </p>
            <a
              className="btn"
              href="https://github.com/felipe-miranda-marreiros/Mapty-App"
              target={`_blank`}
            >
              Saiba Mais...
            </a>
          </div>
        </div>
        <div className="projects-section__items">
          <div>
            <img src={projeto4} alt="Projeto" />
          </div>
          <div className="projects-section__content">
            <SkillsCard />
            <h3>Fylo</h3>
            <p>
              Meu primeiro challenge nível júnior no Frontend Mentor. É uma
              Landing Page com Navbar, Hero, How it Works e Forms.
            </p>
            <a
              className="btn"
              href="https://github.com/felipe-miranda-marreiros/fylo_landingPage"
              target={`_blank`}
            >
              Saiba Mais...
            </a>
          </div>
        </div>
        <div className="projects-section__items">
          <div>
            <img src={projeto5} alt="Projeto" />
          </div>
          <div className="projects-section__content">
            <SkillsCard />
            <h3>Intro Component Sign-Up</h3>
            <p>
              Challenge também do Frontend Mentor. É um componente com
              apresentação e forms. Com ele, aprendi a validar email, senha,
              nome, etc.
            </p>
            <a
              className="btn"
              href="https://github.com/felipe-miranda-marreiros/Frontend-Mentor-Challenges/tree/main/intro-component-with-signup-form-master"
              target={`_blank`}
            >
              Saiba Mais...
            </a>
          </div>
        </div>
        <div className="projects-section__items">
          <div>
            <img src={projeto6} alt="Projeto" />
          </div>
          <div className="projects-section__content">
            <SkillsCard />
            <h3>Jogo da Forca</h3>
            <p>
              Challenge proposto pelo programa Oracle Next. O intuíto é utilizar
              Vanilla JavaScript e DOM para fazer um jogo da forca.
            </p>
            <a
              className="btn"
              href="https://github.com/felipe-miranda-marreiros/jogo-da-forca"
              target={`_blank`}
            >
              Saiba Mais...
            </a>
          </div>
        </div>
        <div className="projects-section__items">
          <div>
            <img src={projeto7} alt="Projeto" />
          </div>
          <div className="projects-section__content">
            <SkillsCard />
            <h3>Criptografar</h3>
            <p>
              Challenge proposto pelo programa Oracle Next. Fazer um algoritmo
              que, de acordo com o input, permita criptografar uma palavra ou
              frase.
            </p>
            <a
              className="btn"
              href="https://github.com/felipe-miranda-marreiros/challenge-oracle-one"
              target={`_blank`}
            >
              Saiba Mais...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
