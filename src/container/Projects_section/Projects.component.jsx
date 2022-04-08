import { useState, useEffect } from "react";
import ProjectItem from "../../components/Project-item/Project-item.component";
import { urlFor, client } from "../../client";
import "./Projects.style.scss";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]';
    client.fetch(query).then((data) => {
      setProjects(data);
    });
  }, []);

  const ProjectItemElement = projects.map((project) => {
    return (
      <ProjectItem
        img={urlFor(project.imageurl)}
        title={project.title}
        description={project.description}
        source={project.url}
        key={project._id}
      />
    );
  });

  return (
    <div className="projects-section container" id="Projetos">
      <div className="projects-section-container">
        <h2>Projetos</h2>
        <p>
          Tenho feito projetos ligados a Front-End desde que aprendi CSS.
          Utilizo, principalmente, Frontend Mentor para isso, além de
          plataformas como Udemy, Scrimba e atualmente Oracle Next Education. A
          seguir estão os meus projetos que mais gostei de fazer.
        </p>
      </div>
      <div className="projects-section__container">{ProjectItemElement}</div>
    </div>
  );
};

export default Projects;
