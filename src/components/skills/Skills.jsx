import React from "react";
import "./skills.css"

const Skills = () => {
  return (
    <section className="skills setion" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My tehnical level</span>
       
      <div className="timeline">
        <div>
          <div className="skill__container left-container skill__box">
            <h2>HTML</h2>
            <i className="skill__icon uil uil-html5"></i>
            <span className="left__container__arrow"></span>
          </div>

          <div className="skill__box skill__container right-container">
            <h2>CSS</h2>
            <i className="skill__icon uil uil-css3-simple"></i>
            <span className="right__container__arrow"></span>
          </div>

          <div className="skill__box skill__container left-container">
            <h2>JavaScript</h2>
            <i className="skill__icon uil uil-java-script"></i>
            <span className="left__container__arrow"></span>
          </div>

          <div className="skill__box skill__container right-container">
            <h2>Bootstrap</h2>
            <i className="skill__icon uil uil-blogger-alt"></i>
            <span className="right__container__arrow"></span>
          </div>

          <div className="skill__box skill__container left-container">
            <h2>React</h2>
            <i className="skill__icon uil uil-react"></i>
            <span className="left__container__arrow"></span>
          </div>

          <div className="skill__box skill__container right-container">
            <h2>Material Ui</h2>
            <i className="skill__icon uil uil-medium-m"></i>
            <span className="right__container__arrow"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
