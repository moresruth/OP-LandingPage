import React from 'react';
import "./newsletter.css";
import SubHeading from '../SubHeading/SubHeading';

const Newsletter = () => {
  return (
    <div className="app__newsletter newsletter_bg">
        <div className="app__newsletter-heading">
            
            <h1 className=''>Subscribe To Our Newsletter</h1>
            <SubHeading title ="ワンピース | 1998 "/>
        </div>

        <p className="app__newsletter-p flex__center">and never miss latest episode</p>
        <div className="app__newsletter-input flex__center">
            <input type="email" placeholder='Enter your Email' />
            <button className="app__button">Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter