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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ab laboriosam? Similique laboriosam accusamus itaque possimus pariatur facilis quo voluptatem cumque autem suscipit quos magnam id, dolore a quasi inventore laborum. Deleniti ad aspernatur animi debitis, nemo possimus eaque suscipit.
        </p>
      </FooterText>
     </FooterContent>
    </FooterWrapper>
    <Copyright>
    <p><a href="/">Burgan</a> | &copy; 2022 All Copyright Reserved</p>
   </Copyright>
  </>
  )
}

export default Footer