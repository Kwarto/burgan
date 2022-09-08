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
export const HeaderBtn = styled.div`
 margin-right: 40px;
 a{
    background: red;
    padding: 12px 30px;
    border-radius: 50px;
    box-shadow: var(--box-shadow);
    color: var(--text-color);
    font-size: 16px;
    font-weight: 600;
 }
 @media screen and (max-width: 1024px){
   margin-right: 10px;
 }
`
