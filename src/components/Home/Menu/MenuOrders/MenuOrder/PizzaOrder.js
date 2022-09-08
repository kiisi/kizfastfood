import React from 'react'
import './MenuOrder.css'
import pizza1 from '../../../../../Images/pizza1.jpg'
import pizza2 from '../../../../../Images/pizza2.png'
import pizza3 from '../../../../../Images/pizza3.jpg'
import pizza4 from '../../../../../Images/pizza4.jpg'
import pizza5 from '../../../../../Images/pizza5.jpg'
import pizza6 from '../../../../../Images/pizza6.jpg'
import pizza7 from '../../../../../Images/pizza7.jpg'

const PizzaOrder = () => {

    

    return (
            <div className="menu-content-orders-content">
                <img src={pizza1} alt="pizza1"/>
                <img src={pizza2} alt="pizza2"/>
                <img src={pizza3} alt="pizza3"/>
                <img src={pizza4} alt="pizza4"/>
                <img src={pizza5} alt="pizza5"/>
                <img src={pizza6} alt="pizza6"/>
                <img src={pizza7} alt="pizza7"/>
            </div>
    )
}

export default PizzaOrder
