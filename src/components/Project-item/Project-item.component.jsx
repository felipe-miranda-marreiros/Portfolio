import "./Project-item.style.scss";
import SkillCards from "../Skills-card/Skills-card.component";

const ProjectItem = (props) => {
  return (
    <div className="projects-section__items" key={props.id}>
      <div className="projects-section-img__container">
        <img src={props.img} alt="Projeto" className="projects-section-img" />
      </div>
      <SkillCards />
      <div className="projects-section__content">
        <h3>{props.title}</h3>
        <p className="projects-section__content-description">
          {props.description}
        </p>
        <a className="btn" href={props.source} target={`_blank`}>
          Saiba Mais...
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
