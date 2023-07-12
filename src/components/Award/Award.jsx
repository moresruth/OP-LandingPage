import React from 'react';
import './award.css';
import images from '../../constants/images';

const Award = (props) => {
  return (
    <div className="app__award">
        <div className="app__award-img">
            <img src={images.AwardImg} alt="awardlogo" />
        </div>
        <div className="app__award-content">
            <h1>{props.awardTitle}</h1>
            <p>{props.awardDesc}</p>
        </div>
    </div>
  )
}

export default Award