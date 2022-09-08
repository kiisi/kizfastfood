import React from 'react'
import './Delivery.css'
import order from '../../../Images/Image 1.png'
import delivery from '../../../Images/Image 2.png'
import quality from '../../../Images/Mask Group 1.png'
const Delivery = () => {
  return (
    <div className="max-wrapper">
        <div className="delivery">
            <div className="delivery-header">
                <p>DELIVERY</p>
                <h1>Delivery Partner</h1>
                <p>With our fast delivery processes, the hungry can raise again.</p>
            </div>
            <div className="delivery-logistics">
                <div className="delivery-logistics-card">
                    <div className="delivery-logistics-card-img">
                        <img src={order} alt="order"/>
                    </div>
                    <div className="delivery-logistics-card-caption">
                        <div className="delivery-logistics-card-caption-main"><h1>Easy To Order</h1></div>
                        <div className="delivery-logistics-card-caption-sub">Our branded online ordering web app is simple to use with new products.</div>
                    </div>
                </div>
                <div className="delivery-logistics-card">
                    <div className="delivery-logistics-card-img">
                        <img src={delivery} alt="delivery"/>
                    </div>
                    <div className="delivery-logistics-card-caption">
                        <div className="delivery-logistics-card-caption-main"><h1>Fastest Delivery</h1></div>
                        <div className="delivery-logistics-card-caption-sub"> We offer a wide range of options for a better and accelerated delivery service.</div>
                    </div>
                </div>
                <div className="delivery-logistics-card">
                    <div className="delivery-logistics-card-img">
                        <img src={quality} alt="quality"/>
                    </div>
                    <div className="delivery-logistics-card-caption">
                        <div className="delivery-logistics-card-caption-main"><h1>Best Quality</h1></div>
                        <div className="delivery-logistics-card-caption-sub">We are best known for good quality and tasty orders, meals and meal kits</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delivery