// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import './app.css';

import Homepage from './pages/Homepage';
import Aboutuspage from './pages/Aboutuspage';
import Contactuspage from './pages/Contactuspage';

const App = () => {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutuspage />} />
        <Route path="/contact" element={<Contactuspage />} />
      </Routes>
      
      <Footer />
    </Router>
  );
};

export default App;
