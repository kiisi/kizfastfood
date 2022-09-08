import React from 'react'
import BurgerOrder from './MenuOrder/BurgerOrder'
import CoffeeOrder from './MenuOrder/CoffeeOrder'
import CupCakeOrder from './MenuOrder/CupCakeOrder'
import IceCreamOrder from './MenuOrder/IceCreamOrder'
import PizzaOrder from './MenuOrder/PizzaOrder'

const MenuOrders = ({activeOrder}) => {

    let activeOrderMenu = <BurgerOrder/>
    switch(activeOrder){
      case 1:
        activeOrderMenu = <BurgerOrder/>
      break;
      case 2:
        activeOrderMenu = <CoffeeOrder/>
      break;
      case 3:
        activeOrderMenu = <CupCakeOrder/>
      break;
      case 4:
        activeOrderMenu = <PizzaOrder/>
      break;
      case 5:
        activeOrderMenu = <IceCreamOrder/>
      break;
      default:
        activeOrderMenu = <BurgerOrder/>
    }

  return (
      <>
        {activeOrderMenu}
      </>

  )
}

export default MenuOrders