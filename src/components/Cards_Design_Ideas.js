import React from 'react'
import CardItem from './CardItem' 
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these design ideas for front-end projects and website functionality</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src="images/Landing_Page_Tile1.jpg"
                    text="Explore design ideas, using modern, flexible and scaleable frameworks"
                    label='Landing Page Example 1'
                    path='https://room-homepage-two-silk.vercel.app/'
                    />
                    <CardItem 
                    src="images/Landing_Page_Tile2.jpg"
                    text="Modern design, with responsive and interactive card animations"
                    label='Landing Page Example 2'
                    path='https://loopstudios-landing-page-ecru.vercel.app/'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src="images/Newsletter_Tile.jpg"
                    text="Example of website newsletter asset, using JS to verify input validity"
                    label='Newsletter Sign-up Form'
                    path='https://newsletter-signup-form-mu.vercel.app/'
                    />
                    <CardItem 
                    src="images/NFT_Tile.jpg"
                    text="An example of a simple and clean card design, with avatar and hover effects"
                    label='NFT Preview Card'
                    path='https://nft-preview-card-seven-rho.vercel.app/'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
