import React from 'react'
import { 
  CardsWrapper, CardHeadGrid, HeaderGridText, 
  GridText, GridBtn, HeaderGridImg, MockUpImg,
  CardList, ListContainer, ListHeading, ListWrapper,
  CardDesignWrapper,CardDesign, CardSideText,
  SecCard,SideItems,UseDirect, UsageAndTerms,
  UsageCards, UsageList, BecomeAMember, 
  MemberContainer, MemberBtn, RegisterForm,
  FormGroup

} from './CardsElement'
import MobileImg from '../../images/mobile.png'
import CardmImg from '../../images/card-mockup.png'
import {FaPlaneDeparture} from 'react-icons/fa'
import {VscActivateBreakpoints} from 'react-icons/vsc'
import {GiCash} from 'react-icons/gi'
import {AiOutlineArrowDown} from 'react-icons/ai'
import CTA from '../../sections/CTA/CTA'


const usage = [
  {
    id: 1,
    heading: 'User Manual',
    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic tenetur, nisi aperiam laborum impedit veniam accusantium iste dicta!architecto! Inventore',
  },
  {
    id: 2,
    heading: 'Cash Per Week',
    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic tenetur, nisi aperiam laborum impedit veniam accusantium iste dicta!architecto! Inventore',
  },
  {
    id: 3,
    heading: 'T & C',
    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic tenetur, nisi aperiam laborum impedit veniam accusantium iste dicta!architecto! Inventore',
  }
]

function Cards() {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
      <>
       <CardsWrapper>
        <CardHeadGrid className='col-md-2 container'>
          <HeaderGridText>
            <h1>Burgan Virtual Card</h1>
            <GridText>
            A virtual card is a digital card that only exists on your phone, which is why at burgan, our virtual card feature is called the burgan digital card. Get all the benefits of the burgan card - spend online, in-store and abroad while saving on currency conversion fees, with the extra layer of security of the burgan digital card.
            </GridText>
            <a href="#process"><GridBtn>Get your card now</GridBtn></a>
          </HeaderGridText>
          <HeaderGridImg>
            <MockUpImg>
             <img src={MobileImg} alt="" />
            </MockUpImg>
          </HeaderGridImg>
        </CardHeadGrid>
       </CardsWrapper>
       <CardList id='process'>
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
       <UsageAndTerms>
         <h1>Card Usage, Terms & Conditions</h1>
         <UsageCards className='col-md-3 container'>
           {
            usage.map(({id, heading, caption}) => {
              return(
                <>
                 <UsageList key={id}>
                    <h2>{heading}</h2>
                    <p>{caption}</p>
                 </UsageList>
                </>
              )
            })
           }
         </UsageCards>
       </UsageAndTerms>
       <CTA />
       <BecomeAMember>
         <MemberContainer className='container'>
         <a href="#sheetdb-form"><MemberBtn >Register To Get A Card<AiOutlineArrowDown className='a-down'/></MemberBtn></a>
         </MemberContainer>
         <RegisterForm id='sheetdb-form'>
          <form action="https://sheetdb.io/api/v1/i2fxorty0z8dr" method="POST">
           <fieldset>
           <legend>Personal Details</legend>
             <FormGroup>
              <input type="text" name='data[firstname]' placeholder='Enter your firstname' required/>
              <input type="text" name='data[lastname]'  placeholder='Enter your lastname' required/>
             </FormGroup>
             <FormGroup>
              <input type="email" name='data[email]' placeholder='Enter email address' required/>
              <input type="text" name='data[contact]'  placeholder='Enter Telephone No' required/>
             </FormGroup>
             <FormGroup>
              <input type="text" name='data[country]' placeholder='Country / State' required/>
              <input type="text" name='data[city]'  placeholder='City / Town' required/>
             </FormGroup>
             <FormGroup>
              <input type="text" name='data[residentialaddress]' placeholder='Enter Resident Address' required/>
              <select name="data[transactionchannel]" required>
                <option>---Select Channel---</option>
                <option value="Mobile Money">Mobile Money</option>
                <option value="Bank Transfer">Bank Transfer</option>
              </select>
             </FormGroup>
            <button type='submit' onClick={() => openInNewTab(`https://selar.co/jj3i`)}>Join For Your Card</button>
           </fieldset>
          </form>
         </RegisterForm>
       </BecomeAMember>  
      </>
  )
}

export default Cards