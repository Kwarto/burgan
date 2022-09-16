import React from 'react'
import { TestimonialsWrapper, TestimonialContainer, TestimonialWrap, TestCont} from './TestimonialsElement'
import Avatar1 from '../../images/avatar3.jpg'
import Avatar2 from '../../images/avatar4.jpg'
import Avatar3 from '../../images/img-3.jpg'

import {Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const test = [
  {
    id: 1,
    avatar: Avatar1,
    client: 'Siyabonga Bandile',
    caption: 'Burgan gave Us many options to enable fast flexible payments with our customers and partners via their virtual credit cards.',
    prof: 'Expert Digital Trader',
    country: 'South Africa'
  },
  {
    id: 2,
    avatar: Avatar2,
    client: 'Amira Muhammad',
    caption: 'After becoming a member, I have been able to save a lot of money with the aid of their 40%  payment cut off on transactions.',
    prof: 'Digital Entrepreneur',
    country: 'Kuwait'
  },
  {
    id: 3,
    avatar: Avatar3,
    client: 'Ali Huzaifa',
    caption: 'I was so amazed how my card was delivered to me after just 48hrs of becoming a member and now I enjoy every step of payment with my burgan card both online and offline transactions.  ',
    prof: 'Freelancer',
    country: 'Pakistan'
  }
]
function Testimonials() {
  return (
    <>
    <TestimonialsWrapper>
       <TestimonialContainer className='container'>
         <h1>Happy Clients Say !!</h1>
         <Swiper
             modules={[Autoplay]}
             spaceBetween={40}
             slidesPerView={1}
             autoplay={{ delay: 5000 }}>
         {
          test.map(({avatar, client, caption, prof, country}, index) => {
            return(
              <>
               <SwiperSlide className='slider'>
               <TestimonialWrap key={index} className='slider'>
                <img src={avatar} alt="" />
                <TestCont>
                <h3>{client}</h3>
                <p>
                  {caption}
                </p>
                <article>
                 <h5>{prof}</h5>
                 <h6>{country}</h6>
                </article>
               </TestCont>
               </TestimonialWrap> 
               </SwiperSlide>
              </>
            )
          })
         } 
         </Swiper>
       </TestimonialContainer>
       
    </TestimonialsWrapper>
    </>
  )

}

export default Testimonials