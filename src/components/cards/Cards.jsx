import React from 'react'
import { 
  CardsWrapper, CardHeadGrid, HeaderGridText, 
  GridText, GridBtn, HeaderGridImg, MockUpImg,
} from './CardsElement'

import MobileImg from '../../images/mobile.png'


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
      </>
  )
}

export default Cards