import React from 'react'
import Deals from './Deals/Deals'
import Delivery from './Delivery/Delivery'
import Feedback from './Feedback/Feedback'
import Hero from './Hero/Hero'
import Menu from './Menu/Menu'
import Team from './Team/Team'

const Home = () => {
  return (
   <section className="max-wrapper">
      <Hero/>
      <Deals/>
      <Delivery/>
      <Menu/>
      <Feedback/>
      <Team/>
   </section> 
  )
}

export default Home