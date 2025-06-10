// React ko import kar rahe hain
import React from 'react'

// Banner aur About components ko import kar rahe hain
import Banner from '../components/Banner'
import About from '../components/About'

// Aboutuspage naam ka functional component define kiya gaya hai
function Aboutuspage() 
{
  return (
    // Page ka main wrapper div
    <div>
      
       {/* Banner component ko call kar rahe hain aur 'about' page ka naam bhej rahe hain 
           jisse banner image dynamically backend se fetch ho sake */}
       <Banner page="about" />

       {/* About section ko render kar rahe hain */}
        <About />
      
    </div>
  )
}

// Is component ko export kar rahe hain taaki isse dusri files me use kiya ja sake
export default Aboutuspage;
