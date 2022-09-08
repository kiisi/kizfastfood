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
                <img src={coffee1} alt="coffee1"/>
                <img src={coffee2} alt="coffee2"/>
                <img src={coffee3} alt="coffee3"/>
                <img src={coffee4} alt="coffee4"/>
                <img src={coffee5} alt="coffee5"/>
            </div>
    )
}

export default CoffeeOrder
