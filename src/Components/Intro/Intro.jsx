import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'

 
const Intro = () => {
  return (
    <div className="Intro">
      <div className="i-left">
        <div className="i-name">
            <span>Hy! I am </span>
            <span>Darshana Jayawardana</span>
            <span>Frontend Developer with high level of experience in web designing and development, producting the Quality work.</span>
          </div>

          <button className="button i-button">Hire me</button>
          <div className="i-icons">
            <a href="https://github.com/DarshanaJK"><img src={Github} alt="" /></a>
            
            <a href="https://www.linkedin.com/in/darshana-jayawardana/"><img src={LinkedIn} alt="" /></a>   

          </div>
      </div>

        
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" /> 
      </div>
    </div>
  )
}

export default Intro