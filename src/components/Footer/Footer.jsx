import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Davidovic</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skill" className="footer__link">
              Skill
            </a>
          </li>

          <li>
            <a href="#contakt" className="footer__link">
              Contakt
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/marko-davidovic-209a601a3/"
            target="_blanc"
            className="home__social-icon"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>

          <a
            href="https://github.com/Marko-Davidovic"
            target="_blanc"
            className="home__social-icon"
          >
            <i className="uil uil-github-alt"></i>
          </a>

          <a
            href="https://www.instagram.com/marko__davidovic/"
            target="_blanc"
            className="home__social-icon"
          >
            <i className="uil uil-instagram"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Davidovic, All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
