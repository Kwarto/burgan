import styled from "styled-components";

export const CardsWrapper = styled.div`
 margin-top: 5rem;

 @media screen and (max-width: 1024px){
    margin-top: 7rem;
 }
`

export const CardHeadGrid = styled.div`
 min-height: 100vh;
 padding: 30px 0;


 @media screen and (max-width: 1024px){
    min-height: 50vh;
 }
`

export const HeaderGridText = styled.div`
 margin-top: 8.4rem;
 h1{
    color: var(--text-color-t);
    font-size: 50px;
    position: relative;

    &:after{
      position: absolute;
      content: '';
      background: var(--btn-color);
      border-radius: 50px;
      width: 10px;
      height: 10px;
      bottom: 25px;
      margin-left: 5px;
    }
 }

 @media screen and (max-width: 1024px){
    margin-top: 2rem;

    h1{
        font-size: 35px;
    }
 }
`

export const GridText = styled.p`
 line-height: 1.7;
 width: 90%;
 padding: 15px 0;

 @media screen and (max-width: 1024px){
    width: 100%;
    font-size: 14px;
 }
`

export const GridBtn = styled.button`
 background: var(--text-color);
 border: 1px solid var(--btn-color);
 padding: 12px 40px;
 font-size: 18px;
 font-weight: 600;
 color: var(--text-color-t);
 border-radius: .2rem;
 cursor: pointer;

 &:hover{
    box-shadow: var(--box-shadow);
    background: var(--btn-color);
    color: var(--text-color);
    border-radius: 50px;
 }
`

export const HeaderGridImg = styled.div`
 min-height: 20vh;
`

export const MockUpImg = styled.div`
 min-height: 50vh;
 margin: 0 auto;
 background: var(--text-color);
 width: 50%;
 box-shadow: 1rem 1rem 1rem 20px rgba(156, 71, 226, 0.055);
 border-radius: 40px;

 @media screen and (max-width: 768px){
    width: 100%;
 }

 @media screen and (max-width: 1024px){
    min-height: 35vh;
 }
`
