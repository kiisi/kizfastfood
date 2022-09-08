import React, {useState} from 'react'
import './MenuItems.css';
import burger from '../../../../Images/hamburger.png'
import ice_cream from '../../../../Images/ice-cream.png'
import pizza from '../../../../Images/pizza.png'
import cupcakes from '../../../../Images/cupcake.png'
import coffee from '../../../../Images/coffee-cup.png'

const MenuItems = ({setActiveOrderHandler}) => {

    const [active, setActive] = useState(1);

    const click_1 = () =>{
        setActive(1)
        setActiveOrderHandler(1)
    }
    const click_2 = () =>{
        setActive(2)
        setActiveOrderHandler(2)
    }
    const click_3 = () =>{
        setActive(3)
        setActiveOrderHandler(3)
    }
    const click_4 = () =>{
        setActive(4)
        setActiveOrderHandler(4)
    }
    const click_5 = () =>{
        setActive(5)
        setActiveOrderHandler(5)
    }


    return (
        <>
            <div className={active === 1 ? "menu-content-orders active-order" : "menu-content-orders"} onClick={click_1} data-order={active === 1 ? '1' : ''}>
                <div className="menu-content-orders-img">
                    <img src={burger} alt="burger" />
                </div>
                <div className="menu-content-orders-caption">Burger</div>
            </div>
            <div className={active === 2 ? "menu-content-orders active-order" : "menu-content-orders"} onClick={click_2} data-order={active === 2 ? '2' : ''}>
                <div className="menu-content-orders-img">
                    <img src={coffee} alt="coffee" />
                </div>
                <div className="menu-content-orders-caption">Coffee</div>
            </div>
            <div className={active === 3 ? "menu-content-orders active-order" : "menu-content-orders"} onClick={click_3} data-order={active === 3 ? '3' : ''}>
                <div className="menu-content-orders-img">
                    <img src={cupcakes} alt="cupcakes" />
                </div>
                <div className="menu-content-orders-caption">Cup Cakes</div>
            </div>
            <div className={active === 4 ? "menu-content-orders active-order" : "menu-content-orders"} onClick={click_4} data-order={active === 4 ? '4' : ''}>
                <div className="menu-content-orders-img">
                    <img src={pizza} alt="pizza" />
                </div>
                <div className="menu-content-orders-caption">Pizza</div>
            </div>
            <div className={active === 5 ? "menu-content-orders active-order" : "menu-content-orders"} onClick={click_5} data-order={active === 5 ? '5' : ''}>
                <div className="menu-content-orders-img">
                    <img src={ice_cream} alt="ice_cream" />
                </div>
                <div className="menu-content-orders-caption">Ice Cream</div>
            </div>
        </>
    )
}

export default MenuItems