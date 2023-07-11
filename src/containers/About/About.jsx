import React from 'react';
import './about.css';
import images from '../../constants/images';
import { Rating, SubHeading } from '../../components';

const About = () => {
  return (

    
    <div className="app__about " id="about">
     
      <div className="app__about-wrapper">

      <div className="app__about-img">
        <img src={images.AboutImg} alt="one piece " />
      </div>

      {/* <div className="app__about-maroon">
        <div className="app__about-maroon_box"></div>
      </div> */}

      <div className="app__about-verticaltext">
        ワ <br/>
        ン <br/>
        ピ <br/>
        ー <br/>
        ス <br/>
       
      </div>

      <div className="app__about-content">
        <h1>About Us</h1>
        <SubHeading title="ワンピース  |  1998 "/>
        <p>Genre: action, adventure, comedy, drama, fantasy, and shounen.</p>
        <Rating/>


      
      <br />
      <br />
      <br />
        
        <p className='app__about-info' > One Piece is an extraordinary manga and anime series that has taken the world by storm. Created by Eiichiro Oda, it transports us to a vast and captivating world of pirates, treasure, and boundless adventure. The story revolves around Monkey D. Luffy, a rubber-powered pirate captain, and his loyal crew, the Straw Hat Pirates. Together, they set sail on the Grand Line, facing formidable foes, uncovering ancient mysteries, and chasing after the legendary treasure known as the One Piece.</p>
        <br />

        <p className='app__about-info'> In this epic journey, One Piece weaves a tapestry of compelling characters, breathtaking battles, and heartwarming moments. Luffy's crewmates, each with their unique abilities and dreams, bring depth and a to the story. As they navigate treacherous seas and encounter powerful enemies, they form unbreakable bonds of friendship and display unwavering determination in the pursuit of their dreams.</p>
        <br />

        <p className='app__about-info'>With its blend of action, humor, and heartfelt storytelling, One Piece has captured the hearts of millions worldwide. It explores themes of freedom, dreams, and the resilience of the human spirit. As the series unfolds, it reveals a meticulously crafted world filled with rich lore, intriguing Devil Fruits, and a grand tapestry of interconnected characters and stories. One Piece is a timeless adventure that continues to inspire and entertain fans, leaving an indelible mark on the landscape of manga and anime.</p>

        

        
      </div>

      </div>

       
      


    </div>
    
    
  )
}

export default About