import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router'; // Make sure to import from 'react-router-dom'

// Import the components
import Food from './Food';
import Aboutus from './Aboutus';
import Home from './Home';

export default function App() {
  return (
    <Router>
      <nav className='navbar'>
        <h1>FOODIE HEAVEN</h1>
        <Link to="/Home">HOME</Link>
        <Link to="/Food">FOOD</Link>
        <Link to="/Aboutus">ABOUT US</Link>

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi_cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
        </svg>
      </nav>

      <Routes>
        {/* Define the route for the root path */}
        <Route path="/" element={<Home />} /> {/* Add this route for '/' */}
        <Route path="/Food" element={<Food />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}
