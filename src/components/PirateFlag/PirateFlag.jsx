import React from 'react';
import './pirateflag.css';

import images from '../../constants/images';

const PirateFlag = () => {
  return (
    <div className="app__pirateflag">
        <div className="app__pirateflag-wrapper">
         <div className="app__pirateflag-img">
          <img src={images.RogerPirates} />
          </div>
          <div className="app__pirateflag-img">
          <img src={images.RedHairPirates} />
          </div>
          <div className="app__pirateflag-img">
          <img src={images.WhitebeardPirates} />
          </div>
          <div className="app__pirateflag-img">
          <img src={images.BeastPirates} />
          </div>

          <div className="app__pirateflag-img">
          <img src={images.BigMomPirates} />
          </div>
          <div className="app__pirateflag-img">
          <img src={images.BlackbeardPirates} />
          </div>

          <div className="app__pirateflag-img">
          <img src={images.KidPirates} />
          </div>
          <div className="app__pirateflag-img">
          <img src={images.HeartPirates} />
          </div>
        </div>
    </div>
  )
}

export default PirateFlag