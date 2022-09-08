import React from 'react'
import { Link } from 'react-router-dom'
import {NavBarWrapper,LogoWrapper,NavList,HeaderBtn} from './NavBarElement'
function NavBar() {
  return (
     <>
      <NavBarWrapper>
        <LogoWrapper>BURGAN</LogoWrapper>
         <NavList>
            <Link to='/' className='nav-list'>Home</Link>
            <Link to='about' className='nav-list'>About</Link>
            <Link to='support' className='nav-list'>Support</Link>
         </NavList>
        <HeaderBtn>
          <a href="/">Get Started</a>
        </HeaderBtn>
      </NavBarWrapper>
     </>
  )
}

export default NavBar