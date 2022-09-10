import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {NavBarWrapper,LogoWrapper,NavList,HeaderBtn} from './NavBarElement'
import {FaBars, FaTimes} from 'react-icons/fa'
function NavBar() {
  const [isMobile, setIsMobile] = useState(true)
  return (
     <>
      <NavBarWrapper>
        <LogoWrapper>BURGAN</LogoWrapper>
         <NavList 
          onClick={() => setIsMobile(false)} 
          className={ isMobile ? "nav-links-mobile" : "nav-links"}
         >
            <Link to='/' className='nav-list'>Home</Link>
            <Link to='about' className='nav-list'>About</Link>
            <Link to='support' className='nav-list'>Support</Link>
         </NavList>
          <button className='burger' onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <FaTimes className='burger-ico'/> : <FaBars className='burger-ico'/>}
          </button>
        <HeaderBtn>
          <Link to='get-card' className='top-btn'>Get Started</Link>
        </HeaderBtn>
      </NavBarWrapper>
     </>
  )
}

export default NavBar