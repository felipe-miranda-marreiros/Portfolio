import "./Footer.style.scss";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-section__container container">
        <section className="footer-section__content">
          <h2 className="logo">Felipe Miranda</h2>
          <p>
            Desenvolvido por <span>Felipe Miranda</span> - 2022 . Todos os
            direitos reservados, mas pode copiar se quiser. Quer saber como eu
            fiz esse portfolio?{" "}
            <a
              href="https://github.com/felipe-miranda-marreiros/Portfolio"
              target="_blank"
            >
              Clique aqui.
            </a>
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
