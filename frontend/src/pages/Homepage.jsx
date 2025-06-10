// React library ko import kar rahe hain
import React from 'react'

// Banner, About, Team, aur FAQ components ko import kar rahe hain
import Banner from '../components/Banner';
import About from '../components/About';
import Team from '../components/Team';
import FAQ from '../components/FAQ';

// Homepage naam ka functional component define kar rahe hain
function Homepage() {
  return (
    // Pure homepage ko ek <div> me wrap kiya gaya hai
    <div>
      {/* Banner component render ho raha hai jisme page="home" diya gaya hai 
          iska matlab home page ke banner image dikhani chahiye */}
      <Banner page="home" />

      {/* About section ko render kar rahe hain */}
      <About />

      {/* Team section ko render kar rahe hain jisme team members show honge */}
      <Team />

      {/* FAQ (Frequently Asked Questions) section render kar rahe hain */}
      <FAQ />
    </div>
  )
}

// Component ko export kar rahe hain taaki isse App.js ya routing file me use kiya ja sake
export default Homepage;
