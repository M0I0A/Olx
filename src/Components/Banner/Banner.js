import React from 'react';

import './Banner.css';
import Arrow from '../../Assets/Arrow'
function Banner() {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <Arrow></Arrow> 
          </div>
          <div className="otherQuickOptions">
            <span>Cars</span>
            <span>Motorcy...</span>
            <span>Mobile Ph...</span>
            <span>For Sale:Houses & Apart...</span>
            <span>Scoot...</span>
            <span>Commercial & Other Ve...</span>
            <span>For Rent: House & Apart...</span>
          </div>
        </div>
        <div className="banner">
          <img
            src="https://raw.githubusercontent.com/Packapeer/React_tutorial_olx_clone/main/assets/images/banner%20copy.png"
            alt=""
          />
        </div>
      </div>
      
    </div>
  );
}

export default Banner;