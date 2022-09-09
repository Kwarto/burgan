import React from 'react'
import { 
  AboutWrapper, AboutContent, AboutUsAndU, AboutImg, 
  AboutText, TopChat, TransactStatus, RecordList, ListWrapper, List } from './AboutElement'
import IMG1 from '../../images/story.jpg'

import {AiOutlineTransaction} from 'react-icons/ai'
import {FaUserSecret, FaFlag, FaGlobeEurope} from 'react-icons/fa'
import {GiWallet} from 'react-icons/gi'
import {BiCreditCard} from 'react-icons/bi'
import Story from '../../sections/story/Story'
function About() {
  return (
    <>
     <AboutWrapper>
      <AboutContent className='container'>
        <h1>WE MAKE PAYMENTS EASIER, FASTER AND SECURE</h1>
      </AboutContent>
     </AboutWrapper>
     <AboutUsAndU className='col-md-2 container'>
      <AboutImg>
        <TopChat>
          <p>Thanks Geek</p>
          <small>🙏</small>
        </TopChat>
        <img src={IMG1} alt="" />
        <TransactStatus>
          <h2>د.ك,1000.00</h2>
          <h6>Cash Received</h6>
          <p>+449859****87</p>
          <small>View</small>
        </TransactStatus>
      </AboutImg>
      <AboutText>
        <article>
         <h1>You and BVC</h1>
         <p>بنك برقان</p>
        </article>
        <p>
          BVC is a fintech company that helps you save money and time for the things that matter. How? By making digital payments faster and as easier than ever. Our products and services are built with you in mind – to be there on your way to financial independence, so you can get more out of life
        </p>
      </AboutText>
     </AboutUsAndU>
     <RecordList>
      <h1>BVC IN NUMBERS</h1>
      <ListWrapper className='container col-md-3'>
        <List>
           <AiOutlineTransaction className='icons'/>
           <h2>60 MILLION TRANSACTIONS</h2>
           <p>Done some months ago</p>
        </List>
        <List>
          <FaUserSecret className='icons'/>
          <h2>2.5 Million Clients</h2>
          <p>Are enjoying our system of payment and virtual assets</p>
        </List>
        <List>
          <BiCreditCard className='icons'/>
          <h2>3 Million Cards</h2>
          <p>Share across the globe 2020</p>
        </List>
        <List>
          <FaFlag className='icons'/>
          <h2>0ver 45 nationalities</h2>
          <p>Are currently present as our clients</p>
        </List>
        <List>
          <FaGlobeEurope className='icons'/>
          <h2>In more than 30 countries</h2>
          <p>Across Europe & Asia people use our transaction system</p>
        </List>
        <List>
          <GiWallet className='icons'/>
          <h2>Over 1 Million Cards</h2>
          <p>Pushed to bin</p>
        </List>
      </ListWrapper>
     </RecordList>
     <Story />
    </>
  )
}

export default About