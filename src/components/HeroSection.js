import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-2.mp4' autoPlay loop muted />
        <h1>SIMON HICKLING</h1>
        <p>Modern Design Technologies</p>
        <div className='hero-btns'>
            <Button 
                className='btns' 
                path='./design-ideas'
                buttonStyle='btn--outline' 
                buttonSize='btn--large'>
            Design
            </Button>
            <Button 
                className='btns' 
                path='./js-apps'
                buttonStyle='btn--primary' 
                buttonSize='btn--large'>
            Applications <i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
  )
}

export default HeroSection
