import React from 'react';
import './header.css';

import images from '../../constants/images';

const Header = () => {
  return (
    <div className="app__header section__margin section__padding" id='home'>
      <div className="app__header-wrapper">
        <div className="app__header-wrapper_info">
          <h3>ワンピース</h3>
          <h1>One Piece</h1>
          <p className='app__poppins-p'>Welcome to the One Piece Landing Page, an immersive digital destination that invites you to embark on a thrilling journey into the captivating world of One Piece. Designed with the utmost attention to detail, this page serves as a gateway to the epic tales of Monkey D. Luffy and his crew, the Straw Hat Pirates. </p> 
          
          <br />
          <p className='app__poppins-p'> Discover the rich lore, exhilarating adventures, and profound themes that have made One Piece a beloved anime and manga series worldwide. Engage with interactive elements, explore character profiles, delve into the Grand Line, and uncover the secrets of the One Piece treasure. Join us as we celebrate the enduring legacy of One Piece and provide fans with a visually stunning and engaging online experience..</p>

          <button className="app__button">
            Learn More
          </button>
        </div>

        <div className="app__header-img">
          <img src={images.HeroImg} alt="heroImg" />

        </div>

      </div>
    </div>
  )
}

export default Header