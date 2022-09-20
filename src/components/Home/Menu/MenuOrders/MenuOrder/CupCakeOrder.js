import React from 'react'
import './MenuOrder.css'
import cupcake1 from '../../../../../Images/cupcake1.jpg'
import cupcake2 from '../../../../../Images/cupcake2.png'
import cupcake3 from '../../../../../Images/cupcake3.jpg'
import cupcake4 from '../../../../../Images/cupcake4.jpg'
import cupcake5 from '../../../../../Images/cupcake5.jpg'
import cupcake6 from '../../../../../Images/cupcake6.jpg'
import cupcake7 from '../../../../../Images/cupcake7.jpg'

const Image = React.memo(function Image({src}){
    return <img src={src} alt="Cupcakes"/>
})

const CupCakeOrder = () => {

    return (
            <div className="menu-content-orders-content">
                <Image src={cupcake1}/>
                <Image src={cupcake2}/>
                <Image src={cupcake3}/>
                <Image src={cupcake4}/>
                <Image src={cupcake5}/>
                <Image src={cupcake6}/>
                <Image src={cupcake7}/>
            </div>
    )
}

export default CupCakeOrder
