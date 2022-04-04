import "./About-me.style.scss";
import portfolioAuthor from "../../assets/imgs/profile/felipe-miranda-marreiros.jpeg";

const AboutMe = () => {
  return (
    <>
      <div className="about-me-section container" id="Sobre Mim">
        <section className="about-me-section__content">
          <div>
            <img
              src={portfolioAuthor}
              alt="Um foto de perfil com fundo branco"
              className="about-me-section__content-img"
            />
          </div>
          <div className="about-me-section__content-text">
            <h2 className="about-me-section__content-text--title">Sobre Mim</h2>
            <p>
              Meu nome é Felipe Miranda Marreiros, tenho 24 anos e sou formado
              em Gestão de Recursos Humanos pelo Instituto Federal de Ciência e
              Tecnologia do Amapá.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutMe;
