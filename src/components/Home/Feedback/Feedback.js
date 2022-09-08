import React from 'react'
import './Feedback.css'
import feedback from '../../../Images/Group 3671.png'
import review from '../../../Images/Image 5.png'
const Feedback = () => {
  return (
    <div className="max-wrapper">
        <div className="feedback">
            <div className="feedback-img-wrapper">
                <div className="feedback-img">
                    <img src={feedback} alt="feedback_image"/>
                </div>
            </div>
            <div className="feedback-content-wrapper">
                <div className="feedback-content">
                    <h2>WHAT THEY SAY</h2>
                    <h1>What Our Customers Say About Us</h1>
                    <p>The customer service was excellent, and it was a very pleasant experience. Thank you very much for your honesty, professionalism, dedication, patience, kindness, willingness to provide the service, which complies with the most strict requirements of the most demanding inspectors.  YOU ARE AN EXCEPTIONAL COMPANY!!! THANK YOU, THANK YOU, THANK YOU!!!.</p>
                </div>
                <div className="feedback-review">
                    <img src={review} alt="review"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feedback