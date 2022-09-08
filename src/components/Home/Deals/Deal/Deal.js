import React from 'react'
import './Deal.css'
import sandwich from '../../../../Images/Group 167.png'
import milkshake from '../../../../Images/Group 149.png'
import hotdogbun from '../../../../Images/Group 197.png'
import saltyfries from '../../../../Images/Group 150.png'
import object from '../../../../Images/Object.png'
import objects from '../../../../Images/Objects.png'
import DealItem from './DealItem/DealItem'
import DealItemFix from './DealItemFix/DealItemFix'
const Deal = () => {
  return (
    <section className="deal-wrapper">
      <DealItem img={sandwich}/>
      <DealItem img={milkshake}/>
      <DealItem img={hotdogbun}/>
      <DealItem img={saltyfries}/>
      <DealItemFix img={object}/>
      <DealItemFix img={objects}/>
      
    </section>
  )
}

export default Deal