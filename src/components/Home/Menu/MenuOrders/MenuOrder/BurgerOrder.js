import React from 'react'
import './MenuOrder.css'
import chickenburger from '../../../../../Images/chicken-burger-wooden-board-side-view (1).png'
import chickenburger_a from '../../../../../Images/chicken-burger-wooden-board-side-view.png'
import chickenburger_b from '../../../../../Images/chicken-burger-wooden-board-tomato-lettuce-side-view.png'
import burger1 from '../../../../../Images/burger1.jpg'
import burger2 from '../../../../../Images/burger2.png'

const Image = React.memo(function Image({src}){
    return <img src={src} alt="Burgers"/>
})
const BurgerOrder = () => {
    
    return (
        <>
            <div className="menu-content-orders-content">
                <Image src={chickenburger}/>
                <Image src={chickenburger_a}/>
                <Image src={chickenburger_b}/>
                <Image src={burger1}/>
                <Image src={burger2}/>
            </div>
        </>
    )
}

export default BurgerOrder
