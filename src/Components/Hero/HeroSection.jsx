import React from 'react'
import heroStyles from './Hero.module.css'
import Navbar from './Navbar/Navbar'
import FixedFooter from '../FixedFooter/FixedFooter'
function HeroSection() {
  return (
    <section className={heroStyles.container}>
        <Navbar/>
        <img src={'./assets/images/intro-cube 1.png'} className={heroStyles.cube}/>
        <img src={'./assets/images/intro-stairs 1.png'} className={heroStyles.stair}/>
        <img src={'./assets/images/intro-cubes 1.png'} className={heroStyles.cubes}/>
        <div className={heroStyles.text}>
          <h2 className={`${heroStyles.heroHead}`}>
            cash
          </h2>
          <h2 className={`${heroStyles.heroHead} ${heroStyles.app}`}>
            APP
          </h2>
          <img src={'/assets/images/intro-phone 1.png'} className={heroStyles.mobile}/>
        </div>
        <FixedFooter heroSection={true}/>
        <img src={'./assets/images/intro-pillar 1.png'} className={heroStyles.pillar}/>
    </section>
  )
}

export default HeroSection