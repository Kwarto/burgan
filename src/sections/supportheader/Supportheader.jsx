import React from 'react'
import { SupportWrapper, WrapperItems, Wrap, WrapTitle, WrapText, WrapBtn, Servicecenter, Customer, Socials} from './SupporheaderElement'
import supportImg from '../../images/support.jpg'
// buxpaysucess
function Supportheader({facebook, twitter, instagram, linkedin, github}) {
   const acc = [
      facebook='facebook.com',
      twitter='twitter.com',
      linkedin='linkedin.com',
      instagram='instagram.com',
      github='github.com'
   ]
  return (
    <>
      <SupportWrapper>
         <WrapperItems>
            <Wrap className='col-md-2'>
                <img src={supportImg} alt='support center' />
                <WrapText>
                <WrapTitle>SUPPORT 24/7</WrapTitle>
                <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   Saepe beatae consectetur officia eum voluptatum dolore eligendi 
                   est doloremque nemo minima.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <WrapBtn>More</WrapBtn>
               </WrapText>
             </Wrap>
         </WrapperItems>
          <Servicecenter>
            <Customer>Customer Service Center</Customer>
            <Socials {...acc}>
                  <a href={`https://${linkedin}/bingui`} target='_blank' rel="noreferrer">Linkedin</a>
                  <a href={`https://${twitter}/bingui`} target='_blank' rel="noreferrer">Twitter</a>
                  <a href={`https://${facebook}/bingui`} target='_blank' rel="noreferrer">Facebook</a>
                  <a href={`https://${instagram}/bingui`} target='_blank' rel="noreferrer">Instagram</a>
                  <a href={`https://${github}/bingui`} target='_blank' rel="noreferrer">Github</a>
            </Socials>
          </Servicecenter>
      </SupportWrapper>
    </>
  )
}

export default Supportheader