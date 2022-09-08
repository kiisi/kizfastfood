import React from 'react'
import './MenuOrder.css'
import chickenburger from '../../../../../Images/chicken-burger-wooden-board-side-view (1).png'
import chickenburger_a from '../../../../../Images/chicken-burger-wooden-board-side-view.png'
import chickenburger_b from '../../../../../Images/chicken-burger-wooden-board-tomato-lettuce-side-view.png'
import burger1 from '../../../../../Images/burger1.jpg'
import burger2 from '../../../../../Images/burger2.png'

const BurgerOrder = () => {
    
    return (
        <>
            <div className="menu-content-orders-content">
                <img src={chickenburger} alt="chickenburger" />
                <img src={chickenburger_a} alt="chickenburger" />
                <img src={chickenburger_b} alt="chickenburger" />
                <img src={burger1} alt="burger1" />
                <img src={burger2} alt="burger2" />
            </div>
        </>
    )
}

export default BurgerOrder
