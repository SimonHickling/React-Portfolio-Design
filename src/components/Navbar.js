import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            SIMON HICKLING <i className='fab fa-typo3'></i> 
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/design-ideas' className='nav-links' onClick={closeMobileMenu}>
                    Design Ideas
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/js-apps' className='nav-links' onClick={closeMobileMenu}>
                    JS Apps
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links-mobile' onClick={() => alert('Sorry, not currently operational!')}>
                    Contact
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline' onClick={() => alert('Sorry, not currently operational!')}>Contact</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
