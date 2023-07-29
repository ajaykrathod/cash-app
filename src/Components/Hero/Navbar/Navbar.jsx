import React from 'react'
import './Navbar.css'
function Navbar() {
  const toggleMenu = (e) => {
      const navbarList = document.getElementById('navbarList');
    navbarList.classList.toggle('active');
  }
  return (
    <nav className={"navbar"}>
          <img src={'./logo.svg'} className={"logo"}/>
          <div className={"navbarToggle"} onClick={toggleMenu}>
            <div className={"bar"}></div>
            <div className={"bar"}></div>
            <div className={"bar"}></div>
          </div>
          <ul className={"navList"} id='navbarList'>
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
          <img src={'./eyeButton.svg'} className={"eye"}/>
        </nav>
  )
}

export default Navbar