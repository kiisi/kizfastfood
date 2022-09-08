import { useEffect, useState, useRef } from 'react'
import './Menu.css'
import MenuItems from './MenuItems/MenuItems'
import MenuOrders from './MenuOrders/MenuOrders'

const Menu = () => {

  const leftRef= useRef();
  const rightRef= useRef();

  useEffect(()=>{
    let s = document.querySelector(".menu-content-orders-content")
    const left = leftRef.current

    if(s.scrollLeft === 0){
      left.classList.add("menu-indicator-opacity-hide")
    }else{
      left.classList.add("menu-indicator-opacity-show")
    }
  })

  const left = () => {
    const right = rightRef.current
    const left = leftRef.current

    right.classList.remove("menu-indicator-opacity-hide")
    let s = document.querySelector(".menu-content-orders-content")
    console.log(s.scrollLeft, s.scrollWidth)
    if(s.scrollLeft <= 250){
      left.classList.add("menu-indicator-opacity-hide")
    }else{
      left.classList.remove("menu-indicator-opacity-hide")
    }
    
    s.scrollLeft -= 250;
  }
  const right = () => {
      let s = document.querySelector(".menu-content-orders-content")
      const left = leftRef.current
      const right = rightRef.current
      left.classList.remove("menu-indicator-opacity-hide")

      s.onscroll = () =>{
        let rightScroll = s.scrollLeft + s.offsetWidth; 

        if (rightScroll < s.scrollWidth){
          right.classList.remove("menu-indicator-opacity-hide")
        }else{
          right.classList.add("menu-indicator-opacity-hide")
        }

      }

      
      s.scrollLeft += 250;
  }

  const [activeOrder, setActiveOrder] = useState(1);

  const setActiveOrderHandler = (order_num) => {
    setActiveOrder(order_num)
  }
  return (
    <div className="max-wrapper menu-wrapper">
      <div className="menu">
        <div className="menu-header">
          <div className="menu-header-main">
            <h2>SERVING</h2>
            <h1>Our Menu</h1>
            <p>Explore our mouth watering collection of taste bud tantalising dishes on our menu. </p>
          </div>
        </div>
        <div className="menu-content">
          <div className="menu-content-orders-wrapper">
            <MenuItems setActiveOrderHandler={setActiveOrderHandler} />
          </div>
          <MenuOrders activeOrder={activeOrder} />
          <div className="menu-indicator-circle menu-indicator-circle-left" ref={leftRef} onClick={left}>
            <span className="material-icons">arrow_back_ios_new</span>
          </div>
          <div className="menu-indicator-circle menu-indicator-circle-right" ref={rightRef} onClick={right}>
            <span className="material-icons">arrow_forward_ios</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu