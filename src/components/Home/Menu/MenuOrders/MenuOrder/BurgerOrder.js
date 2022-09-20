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
                <img src={chickenburger} alt="burger" />
                <img src={chickenburger_a} alt="burger" />
                <img src={chickenburger_b} alt="burger" />
                <img src={burger1} alt="burger" />
                <img src={burger2} alt="burger" />
            </div>
        </>
    )
}

export default BurgerOrder
