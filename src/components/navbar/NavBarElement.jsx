import styled from "styled-components";

export const NavBarWrapper = styled.div`
 background: var(--text-color);
 padding: 1rem 0;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 z-index: 100;
 box-shadow: var(--box-shadow);
 display: flex;
 justify-content: space-between;
 align-items: center;
 @media screen and (max-width: 1024px){
   padding: 1.5rem 0;
 }
`

export const LogoWrapper = styled.div`
 color: var(--text-color-t);
 font-size: 30px;
 font-weight: 700;
 letter-spacing: 2px;
 margin-left: 40px;
 position: relative;
 @media screen and (max-width: 1024px){
   margin-left: 10px;
 }

 &::after{
    position: absolute;
    content: 'بطاقة افتراضية';
    bottom: -15px;
    left: 14px;
    font-size: 12px;
 }
`
export const NavList = styled.ul`
 .nav-list{
   margin: 0 30px;
   color: var(--text-color-t);
   font-size: 16px;
   font-weight: 600;
 }

 @media screen and (max-width: 1024px){
   display: none;
   justify-content: center;
   align-items: center;
   flex-flow: column;
   position: fixed;
   z-index: 100;
   top: 5.5rem;
   background: linear-gradient(254deg, var(--btn-color), var(--text-color-t));
   box-shadow: var(--box-shadow);
   width: 20rem;
   min-height: 20vh;
   padding: 0 10px;
   transform: translateX(10px);

   .nav-list{
      margin: 30px 0;
      padding: 20px 50px;
      background: #fff;
      width: 100%;
      text-align: center;
      font-size: 18px;
   }

 }
`

export const HeaderBtn = styled.div`
 margin-right: 40px;
 a{
    background: var(--btn-color);
    padding: 12px 30px;
    border-radius: 50px;
    box-shadow: var(--box-shadow);
    color: var(--text-color);
    font-size: 16px;
    font-weight: 600;
 }
 @media screen and (max-width: 1024px){
   margin-right: 10px;
   a{
      padding: 7px 20px;
      font-size: 14px;
   }
 }
`
