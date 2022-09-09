import React from 'react'
import { TestimonialsWrapper, TestimonialContainer, TestimonialWrap, TestCont} from './TestimonialsElement'
import Avatar1 from '../../images/avatar3.jpg'
import Avatar2 from '../../images/avatar4.jpg'
import Avatar3 from '../../images/img-3.jpg'
import Avatar4 from '../../images/img-2.jpg'

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
    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic tenetur, nisi aperiam laborum impedit veniam accusantium iste dicta! Animi placeat officiis architecto! Inventore, impedit.',
    prof: 'Expert Digital Trader',
    country: 'South Africa'
  },
  {
    id: 2,
    avatar: Avatar2,
    client: 'Amira Muhammad',
    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic tenetur, nisi aperiam laborum impedit veniam accusantium iste dicta! Animi placeat officiis architecto! Inventore, impedit.',
    prof: 'Digital Entrepreneur',
    country: 'Kuwait'
  },
  {
    id: 3,
    avatar: Avatar4,
    client: 'Akaliza Keza',
    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic tenetur, nisi aperiam laborum impedit veniam accusantium iste dicta! Animi placeat officiis architecto! Inventore, impedit.',
    prof: 'Software Engineer',
    country: 'Rwanda'
  },
  {
    id: 3,
    avatar: Avatar3,
    client: 'Ali Huzaifa',
    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic tenetur, nisi aperiam laborum impedit veniam accusantium iste dicta! Animi placeat officiis architecto! Inventore, impedit.',
    prof: 'Engineer',
    country: 'Freelancer'
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