import React from 'react'
import CardItem from './CardItem' 
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Explore a range of applications using JavaScript and API requests for enhanced functionality</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src="images/IP_Address_Tile.jpg"
                    text="IP Address location search app, demostrating use of API query and JavaScript"
                    label='JS API'
                    path='https://ip-address-tracker-master-ruddy.vercel.app/'
                    />
                    <CardItem 
                    src="images/Tip_Calculator_Tile.jpg"
                    text="Tip Calculator App, demonstrating use of JavaScript to achieve mathematical calculations"
                    label='Mathematics Functions'
                    path='https://tip-calculator-delta-sable.vercel.app/'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src="images/Activity_Tracker_Tile.jpg"
                    text="Activity Tracker App, using JSON query to update activity time-frames"
                    label='Activity Tracker'
                    path='https://activity-tracker-dashboard-tau.vercel.app/'
                    />
                    <CardItem 
                    src="images/Music_Player_Tile.jpg"
                    text="Music Player App with shuffle functionality"
                    label='Music Player'
                    path='https://portfolio-simon-hickling.vercel.app/Music_Player/MPIndex.html'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
