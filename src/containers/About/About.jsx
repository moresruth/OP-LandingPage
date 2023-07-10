import React from 'react';
import './about.css';
import images from '../../constants/images';
import { Rating, SubHeading } from '../../components';

const About = () => {
  return (
    <div className="app__about " id="about">
     

      
      
      <div className="app__about-img">
        <img src={images.AboutImg} alt="one piece " />
      </div>

      {/* <div className="app__about-maroon">
        <div className="app__about-maroon_box"></div>
      </div> */}

      <div className="app__about-verticaltext">
        <p>ワンピース</p>
       
      </div>

      <div className="app__about-content">
        <h1>About Us</h1>
        <SubHeading title="ワンピース  |  1998 "/>
        <p>Genre: action, adventure, comedy, drama, fantasy, and shounen.</p>
        <Rating/>
      </div>


    </div>
  )
}

export default About