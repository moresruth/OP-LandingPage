import React from 'react';
import './rating.css';
import images from '../../constants/images';

// import images from '../../constant/images';


const Rating = () => {
  return (
    <div className="app__rating">
        <div className="app__rating-content">
            <>Rating</>
             <img src={images.Rating} alt="" />
        </div>
    </div>
  )
}

export default Rating
