import React from 'react'
import "./global.css"
import Hero from './Hero';
import Article from './Article';
import Study from './Study';
import Shop from './Shop';
import Youtube from './Youtube';
import End from './End';

const App = () => {
  return (
    <>
    <div>
    <Hero/>
    <Article/>
    <Study/>
    <Shop/>
    <Youtube/>
    <End/>
    </div>
    </>
  )
}

export default App;
