import React from "react";
import "./sass/App.scss";

import Navbar from "./components/Navbar/Navbar.component";
import Header from "./components/Header/Header.component";
import AboutMe from "./components/About-me_section/About-me.component";
import Skills from "./components/Skills/Skills.component";
import Projects from "./components/Projects_section/Projects.component";
import Contact from "./components/Contact_section/Contact.component";
import Footer from "./components/Footer/Footer.component";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <AboutMe />
        <Skills />
        <Projects />
      </main>
      <Contact />
      <Footer />
    </>
  );
};

export default App;
