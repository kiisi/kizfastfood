import React from 'react'
import './MenuOrder.css'
import cupcake1 from '../../../../../Images/cupcake1.jpg'
import cupcake2 from '../../../../../Images/cupcake2.png'
import cupcake3 from '../../../../../Images/cupcake3.jpg'
import cupcake4 from '../../../../../Images/cupcake4.jpg'
import cupcake5 from '../../../../../Images/cupcake5.jpg'
import cupcake6 from '../../../../../Images/cupcake6.jpg'
import cupcake7 from '../../../../../Images/cupcake7.jpg'

const CupCakeOrder = () => {

    

    return (
            <div className="menu-content-orders-content">
                <img src={cupcake1} alt="cupcake1"/>
                <img src={cupcake2} alt="cupcake2"/>
                <img src={cupcake3} alt="cupcake3"/>
                <img src={cupcake4} alt="cupcake4"/>
                <img src={cupcake5} alt="cupcake5"/>
                <img src={cupcake6} alt="cupcake6"/>
                <img src={cupcake7} alt="cupcake7"/>
            </div>
    )
}

export default CupCakeOrder
