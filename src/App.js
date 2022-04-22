import React from "react";
import "./sass/App.scss";

import Navbar from "./container/Navbar/Navbar.component";
import Header from "./container/Header/Header.component";
import AboutMe from "./container/About-me_section/About-me.component";
import Skills from "./container/Skills/Skills.component";
import Projects from "./container/Projects_section/Projects.component";
import Contact from "./container/Contact_section/Contact.component";
import Footer from "./container/Footer/Footer.component";
import Courses from "./container/Courses/Courses.component";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <AboutMe />
        <Skills />
        <Courses />
        <Projects />
      </main>
      <Contact />
      <Footer />
    </>
  );
};

export default App;
