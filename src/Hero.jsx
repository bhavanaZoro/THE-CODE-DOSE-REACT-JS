import React from 'react'
import "./global.css"
import Nav from './Nav'

const Hero = () => {
  return (
    <>
    
    <div className='hero-div'>
    <Nav/>
    <h1 className='uppercase dis-InlineBlock Hero-head'>
    WANT TO LEARN TO
    <br />
    <div className='Rotate span-div'>
    <span id='code' >CODE</span></div> ?
    </h1>
    <p className='Hero-p'>Do you want to learn computer programming but don't know where to start?
      <br />
      This beginner's guide will help you find the best resources to start coding today.
    </p>
    <div className='text-align dis just-cont start-div'>
    <a href="" className='start-here just-cont align-item dis pl-pr pt-pb'>START HERE</a>
    </div>
    </div>
    </>
    
  )
}

export default Hero
