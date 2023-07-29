import React from 'react'
import heroStyles from './Hero.module.css'
import Navbar from './Navbar/Navbar'
import FixedFooter from '../FixedFooter/FixedFooter'
function HeroSection() {
  const toggleMenu = (e) => {
    const navbarList = document.getElementById('navbarList');
    if(navbarList.classList.contains('active') && e.target.className !== "navbarToggle" && e.target.className !== "bar"){
      navbarList.classList.remove('active')
    }
  // toggle('active');
}
  return (
    <section className={heroStyles.container} onClick={toggleMenu}>
        <Navbar/>
        <img alt='intro cube' src={'./assets/images/intro-cube 1.png'} className={heroStyles.cube}/>
        <img alt='intro stairs' src={'./assets/images/intro-stairs 1.png'} className={heroStyles.stair}/>
        <img alt='intro cubes' src={'./assets/images/intro-cubes 1.png'} className={heroStyles.cubes}/>
        <div className={heroStyles.text}>
          <img alt='cash' src={'/assets/images/CASH.png'} className={heroStyles.cash}/>
          <img alt='app' src={'/assets/images/APP.png'} className={heroStyles.app}/>
          <img alt='phone' src={'/assets/images/intro-phone 1.png'} className={heroStyles.mobile}/>
        </div>
        <FixedFooter heroSection={true}/>
        <img alt='pillar' src={'./assets/images/intro-pillar 1.png'} className={heroStyles.pillar}/>
    </section>
  )
}

export default HeroSection