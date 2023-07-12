import React from 'react';
import './characters.css';
import { Character, SubHeading } from '../../components';
import images from '../../constants/images';


const Characters = () => {
   
  return (
    <div className="app__characters" id="character">
        <div className="app__characters-wrapper section__padding section__margin">
            <h1>Characters</h1>
            <SubHeading title="ワンピース  |  1998"/>

            <ul className="app__characters-pirates ">
                <li className="app__characters-pirates_links .p__poppins-p">All</li>
                <li className="app__characters-pirates_links .p__poppins-p active">Straw Hats</li>
                <li className="app__characters-pirates_links .p__poppins-p">Roger Pirates</li>
                <li className="app__characters-pirates_links .p__poppins-p">Red Hair Pirates</li>
                <li className="app__characters-pirates_links .p__poppins-p">Marines</li>
                <li className="app__characters-pirates_links .p__poppins-p">Devil Fruit Users</li>
            </ul>


            <div className="app__characters-pirate_containers">
                <Character
                 bgProfile={images.bgLuffy}
                 Profile = {<img src={images.Luffy} />}
                 smName = "MONKEY D."
                 bgName = "LUFFY"
                 japName ="ルフィ"

                 dream = "THE MAN WHO WILL BECOME THE PIRATE KING!"
                 crewTeam = "STRAW HATS PIRATES"
                 crewPosition = "CAPTAIN"
                 crewBounty ="BOUNTY:  3,000,000,000 Berries"
                 

                />


            <Character
                 bgProfile={images.bgZoro}
                 Profile = {<img src={images.Zoro} />}
                 smName = "RORONOA "
                 bgName = "ZORO"
                 japName ="ゾロ"

                 dream = "I’M GOING TO BE THE WORLD’S GREATEST SWORDSMAN"
                 crewTeam = "STRAW HATS PIRATES"
                 crewPosition = "SWORDSMAN"
                 crewBounty ="BOUNTY:  1,111,000,000 Berries"
                 

                />


                <Character
                 bgProfile={images.bgNami}
                 Profile = {<img src={images.Nami} />}
                 smName = "CAT BULGAR"
                 bgName = "NAMI"
                 japName ="ナミ"

                 dream = "I’M GOING TO DRAW A MAP OF THE WORLD"
                 crewTeam = "STRAW HATS PIRATES"
                 crewPosition = "NAVIGATOR"
                 crewBounty ="BOUNTY:  366,000,0000 Berries"
                 

                />
            </div>
            <div className="app__character-button flex__center">
            <button className="app__custom-button ">Load More</button>
            </div>
            


        </div>

       

    </div>
  )
}

export default Characters