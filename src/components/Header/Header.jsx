import React, { useState } from 'react'
import  "./header.css"

const Header = () => {
  //Toggle Menu
  const [Toggle, showMenu] = useState(false);
  return (
    <header className='header' >
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Davidovic</a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"} >
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a href="#home" className="nav__link active-link">
                <i className='uli uli-estate nav__icon'>
                  Home
                </i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#about" className="nav__link">
                <i className='uli uli-user nav__icon'>
                  About
                </i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#skills" className="nav__link">
                <i className='uli uli-file-alt nav__icon'>
                  Skills
                </i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#portofolio" className="nav__link">
                <i className='uli uli-scenery nav__icon'>
                  Portofolio
                </i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#contact" className="nav__link">
                <i className='uli uli-message nav__icon'>
                  Contact
                </i>
              </a>
            </li>
          </ul>

          <i className='uil uil-times nav__close' onClick={()=> showMenu(!Toggle)}></i>

        </div>
        <div className='nav__toggle' onClick={()=> showMenu(!Toggle)}>
          <i className='uil uil-apps'></i>
        </div>
      </nav>
    </header>
  )
}

export default Header
