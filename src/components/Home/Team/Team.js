import React from 'react'
import './Team.css'
import kiisi_2 from '../../../Images/kiisi_2.jpg'
import ali from '../../../Images/maaz0.jpg'
import glass from '../../../Images/glass.svg'
const Team = () => {
  return (
    <div className="max-wrapper team-wrapper">
      <div className="team">
        <div className="team-header">
          <h1>Team Work</h1>
        </div>
        <div className="team-main">
          <div className="team-main-content">
            <div className="team-card">
              <div className="team-card-img-wrapper">
                <div className="item-card-img item-card-img-k">
                  <img src={kiisi_2} alt="kiisi_1"/>
                </div>  
              </div>
              <div className="team-card-content">
                <h1>Kiisi Felix</h1>
                <p>Front-End Developer</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-card-img-wrapper">
                <div className="item-card-img item-card-img-m">
                  <img src={ali} alt="kiisi_1"/>
                </div>  
              </div>
              <div className="team-card-content">
                <h1>Maaz Ali</h1>
                <p>UI/UX Designer</p>
              </div>
            </div>
          </div>
          <div className="team-main-image-wrapper">
            <div className="team-main-image">
              <img src={glass} alt="glass"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team