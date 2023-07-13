import React from 'react';
import './footer.css';
import Newsletter from '../Newsletter/Newsletter';
import images from '../../constants/images';
import {AiFillFacebook, AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai';



const Footer = () => {
  return (
    <div className="app__footer ">
      <div className="app__footer-wrapper section__padding section__margin">
      <div className="app__newsletter_container flex__center ">
        <Newsletter />
        </div>
        <div className="app__footer-content flex__center">
          <div className="app__footer-links">
            <h3>Contact Us</h3>
            <p>502 Sabaody Archipelago</p>
            <p>111 Whole Cake Island</p>
          </div>
          <div className="app__footer-links_logo">
            <img src={images.logo} alt="logo" />
            <div className="app__footer-motto">
              <p className=''>The dream of the voyage, now towards a new voyage</p>
            </div>
            <div className="app__footer-links_icon">
              <AiFillFacebook/>
              <AiFillInstagram/>
              <AiFillTwitterCircle/>

            </div>
          </div>
          <div className="app__footer-links">
            <h3>Working Hours</h3>
            <p>Monday - Friday  | 3pm- 5pm</p>
            <p>Tuesday - Thursday |  8am - 11am</p>
          </div>
        </div>

            <p className='flex__center app__footer-author'> &copy; 2023 | Designed by Ruth Mores</p>



      </div>
    </div>
  )
}

export default Footer