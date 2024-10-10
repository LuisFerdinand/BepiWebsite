// src/pages/Home.jsx
import React from 'react';
import '../styles/Home.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="hero">
        <div className="heroContainer">
          <h1>BEPI</h1>
          <p>Timorese Artist (Singer, Songwriter) born and raised in Dili, Timor-Leste - Master of Ceremony for formal events, Influencer and Brand Ambassador for big and premium brands such as Samsung, Nike Timor-Leste and Aero Dili.</p>
          <div className="btnContainer">
            <Link to="/career" className="button">Career</Link>
            <Link to="/music-video" className="button">Music</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
