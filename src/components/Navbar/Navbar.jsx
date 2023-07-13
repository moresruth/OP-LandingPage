import React from 'react';
import { useState } from 'react';
import "./navbar.css";
import {GiHamburgerMenu} from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

import  images  from '../../constants/images';

const Navbar = () => {
  const [toggleMenu, setToggleMune] = useState(false);
  
  return (
    
 
      <div className="app__navbar section__margin  ">
        <div className="app__navbar-logo">
          <img src={images.logo} alt="" />
        </div>
        <ul className="app__navbar-links">

          <li className="app__poppins-p"><a href="#home">Home</a></li>
          <li className="app__poppins-p"><a href="#about">About</a></li>
          <li className="app__poppins-p"><a href="#characters">Characters</a></li>
          <li className="app__poppins-p"><a href="#arcs">Arcs</a></li>
          <li className="app__poppins-p"><a href="#awards">Awards</a></li>
      

        </ul>

        <div className="app__navbar-smallscreen">
            <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMune(true)}/>

            {toggleMenu && (

            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <AiOutlineClose className="overlay__close" fontSize={27} onClick={() => setToggleMune(false)} />
              <ul className="app__navbar-smallscreen_links">
                <li className="p__poppins"><a href="#home">Home</a></li>
                <li className="p__poppins"><a href="#about">About</a></li>
                <li className="p__poppins"><a href="#caharaters">Characters</a></li>
                <li className="p__poppins"><a href="#arcs">Arcs</a></li>
                <li className="p__poppins"><a href="#awards">Awards</a></li>
                
            </ul>
            </div> 
            )}

        </div>
      </div>
    
  )
}

export default Navbar