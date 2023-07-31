import React from "react";
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'


function Home() {
  return (
    <div className="Home">

      <div className="home-card">
          <h1>Welcome to</h1>
          <span className="home-icon">
            <FontAwesomeIcon icon={faCompactDisc} />
          </span>          
          <h1>Tuner App</h1>

      </div>
    </div>
  );
}

export default Home;