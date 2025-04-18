 import React from 'react'
 import { Button } from './Button'
 import './Footer.css'
import { Link } from 'react-router-dom'
 
 function Footer() {
   return (
     <div className='footer-container'>
       <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Site constructed using ReactJS
        </p>
        <p className='footer-subscription-text'>
            Don't hesitate if you want any further information about my work
        </p>
        <div className='input-areas'>
          <form>
            <input className='footer-input' type='email' name='email' placeholder='illustration purposes only' />
            <Button buttonStyle='btn--outline' onClick={() => alert('Sorry, not currently operational!')} >Submit</Button>
          </form>
        </div>
       </section>
       <div className='footer-links'>
        <div className='footer-links-wrapper'>
          <div className='footer-links-items'>
            <h2>Address</h2>
            <Link to='/contact'>Hillfield Park</Link>
            <Link to='/'>Muswell Hill</Link>
            <Link to='/'>London</Link>
            <Link to='/'>N10 3QU</Link>
            <Link to='/'>United Kingdom</Link>
          </div>
        </div>
        <div className='footer-links-wrapper'>
          <div className='footer-links-items'>
            <h2>Contact Me</h2>
            <Link to='/'>simon.hickling6@gmail.com</Link>
            <Link to='/'>07525778322</Link>
            <Link to='https://www.linkedin.com/in/simon-hickling-35435a157/'>LinkedIn</Link>
            <Link to='/'>Site designed using React.JS</Link>
          </div>
        </div>
       </div>
       <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            SIMON HICKLING <i className='fab fa-typo3'></i>
            </Link>
          </div>
          <small className='website-rights'>Simon Hickling © 2025</small>
          <div className='social-icons'>
            <Link to='/' target='_blank' aria-label='Facebook' className='social-icon-link facebook'>
            <i className='fab fa-facebook-f'></i>
            </Link>
            <Link to='/' target='_blank' aria-label='Instagram' className='social-icon-link instagram'>
            <i className='fab fa-instagram'></i>
            </Link>
            <Link to='https://www.linkedin.com/in/simon-hickling-35435a157/' target='_blank' aria-label='Linkedin' className='social-icon-link linkedin'>
            <i className='fab fa-linkedin'></i>
            </Link>
            <Link to='/' target='_blank' aria-label='Bluesky' className='social-icon-link bluesky'>
            <i className='fab fa-bluesky'></i>
            </Link>
          </div>
        </div>
       </section>
     </div>
   )
 }
 
 export default Footer
 