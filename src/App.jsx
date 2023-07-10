import React from 'react'
import './App.css';

import {Navbar, PirateFlag, Footer} from './components';
import { Header, About, Characters, StoryArcs, Awards} from './containers';


const App = () => {
  return (
    <div className="App">
      <div className="app__bg">

      <Navbar/>
      <Header/>
      </div>
      <PirateFlag/>
      <About/>
      <Characters/>
      <StoryArcs/>
      <Awards/>
      <Footer/>

    </div>
  )
}

export default App