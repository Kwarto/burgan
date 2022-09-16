import styled from "styled-components";

export const TestimonialsWrapper = styled.div`
 padding: 100px 0;
`

export const TestimonialContainer = styled.div`
 min-height: 30vh;
 box-shadow: var(--box-shadow);
 padding: 10px;
 h1{
  text-align: center;
  font-size: 50px;
  color: var(--text-color-t);
  opacity: 0.70;
 }

 @media screen and (max-width: 1024px){
   h1{
      font-size: 30px;
  }
 }

 @media screen and (max-width: 768px){
   min-height: 20vh;
 }

`

export const TestimonialWrap = styled.div`
 width: 55%;
 margin: 0 auto;
 transform: translateY(5rem);
 min-height: 65vh;
 box-shadow: var(--box-shadow);
 background: var(--text-color);
 border-radius: .5rem;
 padding: 10px;

 img{
    width: 25%;
    border-radius: 100%;
    position: relative;
    bottom: 45px;
    left: 15rem;
    border: 2px solid var(--btn-color);
 }

 @media screen and (max-width: 1024px){
   width: 90%;
   min-height: 43vh;
   img{
      left: 15rem;
   }
 }

 @media screen and (max-width: 768px){
   width: 100%;
   min-height: 55vh;
   img{
      left: 7.7rem;
   }
 }
`

export const TestCont = styled.div`
 h3{
   text-align: center;
   font-size: 22px;
 }
 p{
   text-align: center;
   text-transform: capitalize;
   padding: 10px 0;
 }

 article{
   display: flex;
   justify-content: space-around;
   align-items: center;

   h5,h6{
      color: var(--text-color-t);
      font-size: 16px;
      opacity: 0.45;
   }
 }

 @media screen and (max-width: 768px){
   p{
      font-size: 13px;
      width: 100%;
   }

   article{
      h5, h6{
         font-size: 12px;
      }
   }
 }
`