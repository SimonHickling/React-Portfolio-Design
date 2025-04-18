import React from 'react'
import CardItem from './CardItem' 
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Click below to explore some different projects, from web-design to functional applications</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src="images/Design_Tile.jpg"
                    text="Explore design ideas, using modern, flexible and scaleable frameworks"
                    label='Design Ideas'
                    path='/design-ideas'
                    />
                    <CardItem 
                    src="images/JS_App_Tile.jpg"
                    text="Explore application functionality using JavaScript and API technologies"
                    label='JavaScript Applications'
                    path='/js-apps'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src="images/Portfolio_Link_Tile.jpg"
                    text="Visit my Linkedin page to find out more, or to send me a message"
                    label='LinkedIn'
                    path='https://www.linkedin.com/in/simon-hickling-35435a157/'
                    />
                    <CardItem 
                    src="images/img-6.jpg"
                    text="For any further information, or any questions regarding my work, please click here"
                    label='Contact'
                    path='/contact'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
