import React from 'react'
import navbarStyles from './Navbar.module.css'
function Navbar() {
  return (
    <nav className={navbarStyles.navbar}>
          <img src={'./logo.svg'} className={navbarStyles.logo}/>
          <ul className={navbarStyles.navList}>
            <li>
              <a href="">SIGN IN</a>
            </li>
            <li>
              <a href="">LEGAL</a>
            </li>
            <li>
              <a href="">LICENCES</a>
            </li>
            <li>
              <a href="">SECURITY</a>
            </li>
            <li>
              <a href="">CAREERS</a>
            </li>
            <li>
              <a href="">PRESS</a>
            </li>
            <li>
              <a href="">SUPPORT</a>
            </li>
            <li>
              <a href="">STATUS</a>
            </li>
            <li>
              <a href="">CODEBLOG</a>
            </li>
          </ul>
          <img src={'./eyeButton.svg'} className={navbarStyles.logo}/>
        </nav>
  )
}

export default Navbar