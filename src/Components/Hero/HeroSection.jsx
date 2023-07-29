import React from 'react'
import heroStyles from './Hero.module.css'
import Navbar from './Navbar/Navbar'
import FixedFooter from '../FixedFooter/FixedFooter'
function HeroSection() {
  const toggleMenu = (e) => {
    const navbarList = document.getElementById('navbarList');
    console.log(e.target.className);
    if(navbarList.classList.contains('active') && e.target.className !== "navbarToggle" && e.target.className !== "bar"){
      navbarList.classList.remove('active')
    }
  // toggle('active');
}
  return (
    <section className={heroStyles.container} onClick={toggleMenu}>
        <Navbar/>
        <img src={'./assets/images/intro-cube 1.png'} className={heroStyles.cube}/>
        <img src={'./assets/images/intro-stairs 1.png'} className={heroStyles.stair}/>
        <img src={'./assets/images/intro-cubes 1.png'} className={heroStyles.cubes}/>
        <div className={heroStyles.text}>
            <img src={'/assets/images/CASH.png'} className={heroStyles.cash}/>
            <img src={'/assets/images/APP.png'} className={heroStyles.app}/>
          {/* <div className={`${heroStyles.heroHead}`}>
          </div>
          <div className={`${heroStyles.heroHead} ${heroStyles.app}`}>
          </div> */}
          <img src={'/assets/images/intro-phone 1.png'} className={heroStyles.mobile}/>
        </div>
        <FixedFooter heroSection={true}/>
        <img src={'./assets/images/intro-pillar 1.png'} className={heroStyles.pillar}/>
    </section>
  )
}

export default HeroSection