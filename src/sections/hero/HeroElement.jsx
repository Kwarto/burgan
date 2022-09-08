import styled from "styled-components";

export const HeroContainer = styled.div`
 background: rgba(174, 168, 226, 0.021);
`

export const HeroWrapper = styled.div`
 padding: 9rem 0;
`

export const HeroText = styled.div`
 h1{
    font-size: 60px;
    width: 100%;
    color: var(--text-color-t);
    letter-spacing: 2px;
    text-align: start;
    opacity: 0.87;
 }

 p{
    font-size: 18px;
    width: 90%;
    text-align: justify;
    padding: 20px 0;
 }

 a{
    background: red;
    padding: 15px 40px;
    color: var(--text-color);
    font-size: 18px;
    font-weight: 600;
    border-radius: .5rem;
    box-shadow: var(--box-shadow);
 }

 @media screen and (max-width: 1024px) {
   h1{
      font-size: 45px;
      width: 100%;
      letter-spacing: 0;
   }

   p{
      width: 100%;
      letter-spacing: 0;
   }
 }
`

export const HeroImg = styled.div``