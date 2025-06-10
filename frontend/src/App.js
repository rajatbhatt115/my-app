// React library ko import kar rahe hain
import React from 'react';

// React Router ke components ko import kar rahe hain routing ke liye
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Apne custom components ko import kar rahe hain
import Header from './components/Header';     // Header bar
import Footer from './components/Footer';     // Footer bar

// Global CSS file ko import kar rahe hain
import './app.css';

// Pages ko import kar rahe hain jo routing me use honge
import Homepage from './pages/Homepage';           // Home page
import Aboutuspage from './pages/Aboutuspage';     // About Us page
import Contactuspage from './pages/Contactuspage'; // Contact Us page

// App naam ka main functional component banaya gaya hai
const App = () => {
  return (
    // Router se application ke andar routing system setup kar rahe hain
    <Router>
      {/* Sabhi pages me Header upar show hoga */}
      <Header />
      
      {/* Routes define kiye gaye hain - kis path par kaunsa component dikhega */}
      <Routes>
        {/* "/" path ke liye Homepage component render hoga */}
        <Route path="/" element={<Homepage />} />

        {/* "/about" path ke liye Aboutuspage component render hoga */}
        <Route path="/about" element={<Aboutuspage />} />

        {/* "/contact" path ke liye Contactuspage component render hoga */}
        <Route path="/contact" element={<Contactuspage />} />
      </Routes>
      
      {/* Sabhi pages me Footer neeche show hoga */}
      <Footer />
    </Router>
  );
};

// App component ko export kar rahe hain taaki index.js me use kiya ja sake
export default App;
