import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    LoadCardWrapper, LoadCardContainer, LoadCardLeft, 
    HeadingWrapper, PaymentMethod,MethodWrapper, 
    LoadWrap, LoadCardRight
} from './LoadCardElement'
import MobileImg from '../../images/receive.jpg'
import {GiCash} from 'react-icons/gi'
function LoadCard() {
  const navigate = useNavigate();
  return (
    <>
      <LoadCardWrapper>
        <LoadCardContainer className='container'>
          <LoadCardLeft>
            <HeadingWrapper>
              <h1>BURGAN CARD</h1>
            </HeadingWrapper>
            <PaymentMethod>
                <h2>Payment Method</h2>
                <MethodWrapper>
                    <div>
                        <GiCash className='ico'/>
                        <h5>Bank Transfer</h5>
                    </div>
                    <div>
                        <GiCash className='ico'/>
                        <h5>Mobile Money</h5>
                    </div>
                </MethodWrapper>
            </PaymentMethod>
             <LoadWrap>
               <h2>LOAD YOUR CARD</h2>

               <form action="">
                 <label htmlFor="fullname">Full Name</label>
                 <input type="text" name='username' placeholder='Enter Your Name' required/>
                 <label htmlFor="cardnumber">Card Number</label>
                 <input type="number" name='cardnumber' placeholder='Enter Card Number' required minLength={16}/>
                 <label htmlFor="payslot">Payment Channel</label>
                 <input type="text" placeholder='eg. Bank number, Mobile money number, BTC Wallet' required/>
                 <label htmlFor="payslot">Total Amount</label>
                 <input type="number" placeholder='eg. 100 KD, 100 USD, 100 EUR, 100NR, 100 GH' required/>
                 <button type="submit" onClick={() => {navigate("/buxpaysuccess", { replace: true });}}>Submit Request</button>
               </form>
             </LoadWrap>
          </LoadCardLeft>
          <LoadCardRight>
            <img src={MobileImg} alt="mockup for load on mobile" />
          </LoadCardRight>
        </LoadCardContainer>
      </LoadCardWrapper>
    </>
  )
}

export default LoadCard