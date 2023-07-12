import React from 'react';
import './arc.css';
import Rating from '../Rating/Rating';


const Arc = (props) => {
  return (
    <div className="app__arc">
        <div className="app__arc-img">
            <img src={props.arcImg} alt="" />
            
        </div>

        <div className="app__arc-content">
            <h2>{props.title}</h2>
            <Rating/>
            <div className='app__arc-content_episode'>{props.episode}</div>
            <div className='app__arc-content_overview'>{props.overview}</div>
        </div>

        <div className="app__arc-button">
          <button className="app__button ">Learn More</button>
        </div>
    </div>
  )
}

export default Arc