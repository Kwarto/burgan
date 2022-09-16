import React from 'react'
import {FooterWrapper, FooterContent, FooterLogo, FooterText, Copyright} from './FooterElement'
function Footer() {
  return (
    <>
    <FooterWrapper>
     <FooterContent className='container'>
      <FooterLogo>
       <h1>BURGAN</h1>
       <p>بطاقة افتراضية</p>
      </FooterLogo>
      <FooterText>
        <p>
          Burgan is A Financial Technology Company And Not A Bank. We provide quality, secure and fast e-transaction to businesses and individuals with our virtual cards.
          Clients with our cards are eligible to access our 40% automatic payment cut off when transacting with our cards.
        </p>
      </FooterText>
     </FooterContent>
    </FooterWrapper>
    <Copyright>
    <p><a href="/">Burgan</a> | &copy; 2018 All Copyright Reserved</p>
   </Copyright>
  </>
  )
}

export default Footer