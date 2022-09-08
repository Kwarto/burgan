import React from 'react'
import {NavBarWrapper,LogoWrapper,HeaderBtn} from './NavBarElement'
function NavBar() {
  return (
     <>
      <NavBarWrapper>
        <LogoWrapper>BURGAN</LogoWrapper>
        <HeaderBtn>
          <a href="/">Get Started</a>
        </HeaderBtn>
      </NavBarWrapper>
     </>
  )
}

export default NavBar