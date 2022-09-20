import React from 'react'
import './MenuOrder.css'
import coffee1 from '../../../../../Images/coffee1.jpg'
import coffee2 from '../../../../../Images/coffee2.jpg'
import coffee3 from '../../../../../Images/coffee3.jpg'
import coffee4 from '../../../../../Images/coffee4.jpg'
import coffee5 from '../../../../../Images/coffee5.jpg'

const CoffeeOrder = () => {

    return (
            <div className="menu-content-orders-content">
                <img src={coffee1} alt="coffee"/>
                <img src={coffee2} alt="coffee"/>
                <img src={coffee3} alt="coffee"/>
                <img src={coffee4} alt="coffee"/>
                <img src={coffee5} alt="coffee"/>
            </div>
    )
}

export default CoffeeOrder
