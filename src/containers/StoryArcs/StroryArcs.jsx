import React from 'react';
import './storyarcs.css';
import { Arc, SubHeading } from '../../components';
import images from '../../constants/images';


const StroryArcs = (props) => {
  return (
    <div className="app__storyarcs" id="arcs">
      <div className="app__storyarcs-wrapper section__padding section__margin">
        <h1>Story Arcs</h1>
        <SubHeading title="ワンピース | 1998 "/>

        <div className="app__storyarcs-containers">
            <Arc
              arcImg={images.ArcEastBlue}
              title="East Blue"
              episode="Episode: 1-61"
              overview="The East Blue Arc in One Piece serves as the starting point for the grand adventure.."
            />

            <Arc
              arcImg={images.ArcGrandline}
              title="Entering Grandline"
              episode="Episode: 62-77"
              overview="As the Straw Hat Pirates enter the Grand Line, they face new challenges, powerful foes, and mysterious islands...."
            />

            <Arc
              arcImg={images.ArcWinterIsland}
              title="At the Winter Island"
              episode="Episode: 78-91"
              overview="On the winter island, the Straw Hat Pirates encounter deadly snowstorms, ancient ruins, and a chilling secret..."
            />

          <Arc
              arcImg={images.ArcAlabasta}
              title="Arrival in Alabasta"
              episode="Episode: 92-103"
              overview="Upon arriving in Alabasta, the Straw Hat Pirates join forces to stop a rebellion and uncover a kingdom's dark secrets..."
            />




        </div>
      </div>
    </div>
  )
}

export default StroryArcs