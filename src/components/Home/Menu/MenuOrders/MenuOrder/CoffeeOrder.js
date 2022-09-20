import React from 'react'
import './MenuOrder.css'
import coffee1 from '../../../../../Images/coffee1.jpg'
import coffee2 from '../../../../../Images/coffee2.jpg'
import coffee3 from '../../../../../Images/coffee3.jpg'
import coffee4 from '../../../../../Images/coffee4.jpg'
import coffee5 from '../../../../../Images/coffee5.jpg'

const Image = React.memo(function Image({src}){
    return <img src={src} alt="Coffees"/>
})

const CoffeeOrder = () => {

    return (
            <div className="menu-content-orders-content">
                <Image src={coffee1}/>
                <Image src={coffee2}/>
                <Image src={coffee3}/>
                <Image src={coffee4}/>
                <Image src={coffee5}/>
            </div>
    )
}

export default CoffeeOrder
