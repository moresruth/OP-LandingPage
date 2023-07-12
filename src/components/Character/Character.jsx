import React from 'react';
import './character.css';

const Character = (props) => {
  return (
    <div className="app__character" style={{   backgroundImage: `url(${props.bgProfile})` }}>
        <div className="app__character-wrapper">
            <div className="app__character-profile_img">
                {props.Profile}
            </div>

            <div className="app__character-info">
                <p>{props.smName}</p>
                <div className="app__character-name_container">
                    <h1>{props.bgName}</h1>        
                    <p>{props.japName}</p>
                </div>
                <p className='app__character-dream'>{props.dream}</p>

                <div className="app__character-about">
                    <div className='app__character-about_crewteam'>{props.crewTeam}</div>
                    <div>{props.crewPosition}</div>
                    <div>{props.crewBounty}</div>
                </div>

            </div>





        </div>

    </div>
  )
}

export default Character