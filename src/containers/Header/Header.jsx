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
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo doloribus exercitationem, facere, mollitia quis, animi nostrum error reiciendis perferendis voluptates distinctio tenetur nisi harum consequatur quibusdam eum excepturi expedita id.</p>

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