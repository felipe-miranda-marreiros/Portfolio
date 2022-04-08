import React from "react";
import "./Header.style.scss";
import heroIllustration from "../../assets/imgs/svg/hero-vector-illustration.svg";

const Header = () => {
  return (
    <header className="hero">
      <div className="container">
        <div className="hero__content">
          <section className="hero__content-text">
            <h1 className="hero__content-text--title">
              Olá, meu nome é{" "}
              <span className="hero__content-text--name">Felipe Miranda</span>
            </h1>
            <p>
              Seja bem-vindo ao meu portfolio. Todos os meus projetos estão
              presentes aqui, bem como minha formação e o que estou estudando
              atualmente.
            </p>
            <a href="#Projetos" className="hero-btn btn">
              Saiba Mais
            </a>
          </section>
          <div className="hero__content-img">
            <img
              src={heroIllustration}
              alt="Felipe Miranda Marreiros"
              title="Felipe Miranda Marreiros"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
