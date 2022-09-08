import React from 'react'
import star from '../../../../../Images/Icon ionic-ios-star-1.svg'
import add from '../../../../../Images/Icon simple-addthis-1.svg'
import cart from '../../../../../Images/Group 206.svg';
import './DealItemFix.css'
const DealItemFix = ({img}) => {
  return (
    <div className="deal">
            <div className="deal-img-wrapper">
              <div className="deal-img deal-img-fix">
                <img src={img} alt={img}/>
              </div>
              <div className="deal-img-cart">
                <img src={cart} alt="cart"/>
              </div>
            </div>
            <div className="deal-name">Italian Sandwich</div>
            <div className="deal-price-wrapper">
              <div className="deal-price">
                <div>
                  <img src={star} alt="star"/>
                  <span>4.7</span>
                  </div>
                <h1>$18.7</h1>
              </div>
              <div className="deal-price-img">
                <img src={add} alt="add"/>
              </div>
            </div>
        </div>
  )
}

export default DealItemFix