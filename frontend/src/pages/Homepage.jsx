import React from 'react'
import Banner from '../components/Banner';
import About from '../components/About';
import Team from '../components/Team';
import FAQ from '../components/FAQ';


function Homepage() {
  return (
    <div>
     <Banner page="home" />

    <About />
    <Team />
    <FAQ />
   </div>
  )
}

export default Homepage;