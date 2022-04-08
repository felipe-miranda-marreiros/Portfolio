import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.style.scss";

const Navbar = () => {
  const navbarLinks = [
    "Sobre Mim",
    "Skills",
    "Projetos",
    "Currículo ",
    "Contato",
  ];
  const navBarElements = navbarLinks.map((links, i) => {
    return (
      <li key={i}>
        <a href={`#${links}`}>{links}</a>
      </li>
    );
  });

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("showNavbar");
  };

  return (
    <nav className="navbar">
      <span className="logo">Felipe Miranda</span>
      <ul className="navbar__items" ref={navRef}>
        {navBarElements}
      </ul>
      <button className="navbar__btns" onClick={showNavbar}>
        <FaTimes className="navbar__menu" name="close-outline" />
        <FaBars className="navbar__menu" />
      </button>
    </nav>
  );
};

export default Navbar;
