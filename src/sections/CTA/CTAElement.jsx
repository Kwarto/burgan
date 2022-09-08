import styled from "styled-components";

export const CallInContainer = styled.div`
 padding: 100px 0;

 @media screen and (max-width: 768px){
    padding: 30px 0;
 }

 @media screen and (max-width: 1024px){
    padding: 30px 0;
 }
`

export const CallText = styled.div`
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;

 h1{
    font-size: 45px;
    width: 60%;
    margin: 0 auto;
    text-align: center;
    color: var(--text-color-t);
    opacity: 0.76;
 }

 h4{
    padding: 20px 0;
    font-size: 25px;
 }

 p{
    text-align: center;
    width: 50%;
    opacity: 0.67;
 }

 @media screen and (max-width: 1024px) {
    h1{
        font-size: 30px;
        width: 80%;
    }

    h4{
        text-align: center;
        font-size: 18px;
        padding: 10px 0;
    }

    p{
     width: 80%;
     font-size: 15px;
    }
 }

 @media screen and (max-width: 768px) {
    h1{
        font-size: 20px;
        width: 100%;
    }

    h4{
        text-align: center;
        font-size: 16px;
        padding: 10px 0;
    }

    p{
     width: 100%;
     font-size: 14px;
    }
 }
`