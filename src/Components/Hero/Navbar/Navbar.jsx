/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Navbar.css'
function Navbar() {
  const toggleMenu = (e) => {
      const navbarList = document.getElementById('navbarList');
    navbarList.classList.toggle('active');
  }
  return (
    <nav className={"navbar"}>
          <img alt='logo' src={'./logo.svg'} className={"logo"}/>
          <div className={"navbarToggle"} onClick={toggleMenu}>
            <div className={"bar"}></div>
            <div className={"bar"}></div>
            <div className={"bar"}></div>
          </div>
          <ul className={"navList"} id='navbarList'>
            <li>
              <a href="/" onClick={(e) => e.preventDefault()}>SIGN IN</a>
            </li>
            <li>
              <a href="/" onClick={(e) => e.preventDefault()}>LEGAL</a>
            </li>
            <li>
              <a href="/" onClick={(e) => e.preventDefault()}>LICENCES</a>
            </li>
            <li>
              <a href="/" onClick={(e) => e.preventDefault()}>SECURITY</a>
            </li>
            <li>
              <a href="/" onClick={(e) => e.preventDefault()}>CAREERS</a>
            </li>
            <li>
              <a href="/" onClick={(e) => e.preventDefault()}>PRESS</a>
            </li>
            <li>
              <a href="/" onClick={(e) => e.preventDefault()}>SUPPORT</a>
            </li>
            <li>
              <a href="/" onClick={(e) => e.preventDefault()}>STATUS</a>
            </li>
            <li>
              <a href="/" onClick={(e) => e.preventDefault()}>CODEBLOG</a>
            </li>
          </ul>
          <img alt='eye' src={'./eyeButton.svg'} className={"eye"}/>
        </nav>
  )
}

export default Navbar