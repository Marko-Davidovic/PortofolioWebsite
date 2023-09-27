import React, { useState } from "react";
import "./header.css";

const Header = () => {
  //scrollUp
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  //Toggle Menu
  const [Toggle, showMenu] = useState(true);
  const [activeNav, setActiveNav] = useState("");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Davidovic
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uli uli-estate nav__icon" >Home</i>
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uli uli-user nav__icon">About</i>
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uli uli-file-alt nav__icon">Skills</i>
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portofolio"
                onClick={() => setActiveNav("#portofolio")}
                className={
                  activeNav === "#portofolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uli uli-scenery nav__icon">Portofolio</i>
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uli uli-message nav__icon">Contact</i>
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
