import React from 'react'
import './Hero.css'
import bicycle from '../../../Images/Design.png'
import {ReactComponent as PlayButton} from '../../../Images/Icon awesome-play.svg'
import cupcake from '../../../Images/Group 150@2x.png'
import hamburger from '../../../Images/Group 149@2x.png'
import hotdog from '../../../Images/Group 167@2x.png'
const Hero = () => {
  return (
    <div className="max-wrapper">
        <div className="hero">
            <div className="hero-content-wrapper">
                <div className="hero-content">
                    <div className="hero-content-delivery">
                        <p>Free Delivery</p> 
                        <div className="hero-content-img">
                            <img src={bicycle} alt=""/>
                        </div>
                    </div>
                    <div className="hero-content-header">
                        <h1>Tastes So Good, Lovers Ask For It <span>By Name</span></h1>
                    </div>
                    <div className="hero-content-sub">
                        Fast Food provides 24 hours food delivery to clients which needs our services.<br/>
                        We always make the hungry to smile again.
                    </div>
                    <div className="hero-content-btn">
                        <div className="hero-content-btn-order">Order Now</div>
                        <div className="hero-content-btn-play">
                         <PlayButton/>
                        </div>
                        <div className="hero-content-order-process">Order Process</div>
                    </div>
                </div>
            </div>
            <div className="hero-image-wrapper">
                <div className="hero-image">
                    <img src={hamburger} alt="hamburger"className="hamburger"/>
                    <img src={cupcake} alt="cupcake"className="cupcake"/>
                    <img src={hotdog} alt="hotdog"className="hotdog"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero