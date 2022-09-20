import React from 'react'
import './MenuOrder.css'
import icecream1 from '../../../../../Images/ice-cream1.jpg'
import icecream2 from '../../../../../Images/ice-cream2.jpg'
import icecream3 from '../../../../../Images/ice-cream3.jpg'
import icecream4 from '../../../../../Images/ice-cream4.jpg'
import icecream5 from '../../../../../Images/ice-cream5.jpg'
import icecream6 from '../../../../../Images/ice-cream6.jpg'
import icecream7 from '../../../../../Images/ice-cream7.jpg'
import icecream8 from '../../../../../Images/ice-cream8.jpg'
import icecream9 from '../../../../../Images/ice-cream9.png'

const Image = React.memo(function Image({src}){
    return <img src={src} alt="Ice-creams"/>
})

const IceCreamOrder = () => {

    return (
            <div className="menu-content-orders-content">
                <Image src={icecream1}/>
                <Image src={icecream2}/>
                <Image src={icecream3}/>
                <Image src={icecream4}/>
                <Image src={icecream5}/>
                <Image src={icecream6}/>
                <Image src={icecream7}/>
                <Image src={icecream8}/>
                <Image src={icecream9}/>
            </div>
    )
}

export default IceCreamOrder
