import React from 'react'
import { 
  CardsWrapper, CardHeadGrid, HeaderGridText, 
  GridText, GridBtn, HeaderGridImg, MockUpImg,
  CardList, ListContainer, ListHeading, ListWrapper,
  CardDesignWrapper,CardDesign, CardSideText,
  SecCard,SideItems,UseDirect

} from './CardsElement'
import MobileImg from '../../images/mobile.png'
import CardmImg from '../../images/card-mockup.png'
import {FaPlaneDeparture} from 'react-icons/fa'
import {VscActivateBreakpoints} from 'react-icons/vsc'
import {GiCash} from 'react-icons/gi'

function Cards() {
  return (
      <>
       <CardsWrapper>
        <CardHeadGrid className='col-md-2 container'>
          <HeaderGridText>
            <h1>Burgan Virtual Card</h1>
            <GridText>
            A virtual card is a digital card that only exists on your phone, which is why at burgan, our virtual card feature is called the burgan digital card. Get all the benefits of the burgan card - spend online, in-store and abroad while saving on currency conversion fees, with the extra layer of security of the burgan digital card.
            </GridText>
            <GridBtn>Get your card now</GridBtn>
          </HeaderGridText>
          <HeaderGridImg>
            <MockUpImg>
             <img src={MobileImg} alt="" />
            </MockUpImg>
          </HeaderGridImg>
        </CardHeadGrid>
       </CardsWrapper>
       <CardList>
          <ListContainer className='container'>
            <ListHeading>
             <h1>Receive Your Burgan Card Anywhere</h1>
             <p>Delivery In 48Hrs</p>
            </ListHeading>

            <ListWrapper className='col-md-2'>
               <CardDesignWrapper>
                 <CardDesign>
                  <img src={CardmImg} alt="" />
                 </CardDesign>
                 <SecCard>
                   <img src={CardmImg} alt="" />
                 </SecCard>
               </CardDesignWrapper>
               <CardSideText>
                  <SideItems>
                    <div><FaPlaneDeparture className='c-ico'/></div>
                    <h1>Global Delivery</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                  </SideItems>
                  <SideItems>
                    <div><VscActivateBreakpoints className='c-ico'/></div>
                    <h1>Activate Card</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                  </SideItems>
                  <SideItems>
                    <div><GiCash className='c-ico'/></div>
                    <h1>Use Card</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                  </SideItems>
               </CardSideText>
            </ListWrapper>
          </ListContainer>
       </CardList>
       <UseDirect>
        <h3>PROCESS</h3>
       </UseDirect>
      </>
  )
}

export default Cards