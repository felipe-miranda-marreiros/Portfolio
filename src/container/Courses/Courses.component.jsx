import React from "react";
import "./Courses.style.scss";

const Courses = () => {
  return (
    <section className="courses container">
      <h2>Cursos</h2>
      <ul className="courses-content">
        <li>
          Build Responsive Real-World Websites with HTML and CSS by Jonas
          Schmedtmann - Udemy
        </li>
        <li>
          The Complete JavaScript Course 2022: From Zero to Expert! by Jonas
          Schmedtmann - Udemy.
        </li>
        <li>Iniciante em Programação - Oracle Next Education + Alura</li>
        <li>Formação Front-End - Oracle Next Education + Alura</li>
        <li>React Basics - Scrimba</li>
      </ul>
    </section>
  );
};

export default Courses;
