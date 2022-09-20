import React from 'react'
import './MenuOrder.css'
import pizza1 from '../../../../../Images/pizza1.jpg'
import pizza2 from '../../../../../Images/pizza2.png'
import pizza3 from '../../../../../Images/pizza3.jpg'
import pizza4 from '../../../../../Images/pizza4.jpg'
import pizza5 from '../../../../../Images/pizza5.jpg'
import pizza6 from '../../../../../Images/pizza6.jpg'
import pizza7 from '../../../../../Images/pizza7.jpg'


const Image = React.memo(function Image({src}){
    return <img src={src} alt="Pizza"/>
})

const PizzaOrder = () => {

    return (
            <div className="menu-content-orders-content">
                <Image src={pizza1} />
                <Image src={pizza2} />
                <Image src={pizza3} />
                <Image src={pizza4} />
                <Image src={pizza5} />
                <Image src={pizza6} />
                <Image src={pizza7} />
            </div>
    )
}

export default PizzaOrder
