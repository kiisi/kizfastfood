import React from 'react'
import Deal from './Deal/Deal'
import './Deals.css'
const Deals = () => {
  return (
    <div className="max-wrapper">
        <div className="deals">
            <div className="deals-header">
                <p>BUCKET</p>
                <h1>Make Your Own Deals</h1>
                <p>Make a right decision in selecting any fast food meal in our deals-pack </p>
            </div>
            <Deal/>
        </div>
    </div>
  )
}

export default Deals