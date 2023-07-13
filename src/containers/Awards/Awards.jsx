import React from 'react';
import "./awards.css";
import { Award, SubHeading } from '../../components';
import images from '../../constants/images';

const Awards = (props) => {
  return (
    <div className="app__awards section__padding section__margin" id="awards">
        <div className="app__section-heading">
          <h1>Awards and Recognition</h1>
          
          <SubHeading title="ワンピース | 1998 "/>
        </div>
      <div className="app__awards-wrapper">

        <div className="app__awards-container">
          
          <Award
              awardTitle = "Guinness World Records"
              awardDesc = "One Piece has been recognized multiple times in the Anime Grand Prix, an annual anime awards event in Japan. It has won awards in various categories, including Best TV Anime Series and Best Male Character."
          />

          <Award
              awardTitle = "Anime Grand Prix"
              awardDesc = "One Piece holds several Guinness World Records, including the record for the most copies published for the same comic book series by a single author.The series has consistently topped the record for manga with the highest print circulation"
          />
  
          <Award
              awardTitle = "Shogakukan Manga Award"
              awardDesc = "One Piece has won multiple Shogakukan Manga Awards, which are prestigious manga awards in Japan. It won the award in the shonen category in 2001 and received the special award in 2011."
          />

          <Award
              awardTitle = "Tezuka Osamu Cultural Prize"
              awardDesc = "One Piece was honored with the Tezuka Osamu Cultural Prize in 2012. This award recognizes outstanding contributions to the manga and anime industry."
          />



        </div>


        <div className="app-awards-sideImg flex__center">
          <img src={images.AwardSideImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Awards