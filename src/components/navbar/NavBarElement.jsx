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
 button{
  background: #fff;
  cursor: pointer;
  display: none;
  .burger-ico{
    font-size: 20px;
  }
 }

 @media screen and (max-width: 1024px){
   padding: 1.5rem 0;
   button{
    display: flex;
    .burger-ico{
      font-size: 20px;
      position: absolute;
      top: 20px;
      left: 25.5rem;
      right: 0;
    }
   }
 }

 @media screen and (max-width: 768px){
   padding: 1.5rem 0;
   button{
    display: flex;
    .burger-ico{
      font-size: 20px;
      position: absolute;
      top: 15px;
      left: 12rem;
      right: 0;
    }
   }
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
 .top-btn{
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
   .top-btn{
      padding: 7px 20px;
      font-size: 14px;
   }
 }
`
