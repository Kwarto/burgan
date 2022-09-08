import styled from "styled-components";

export const LastCallContainer = styled.div`
  padding: 70px 0;
  background: rgba(174, 168, 226, 0.021);
`

export const LastWrapper = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

 h1{
    font-size: 50px;
    width: 48%;
    text-align: center;
    color: var(--text-color-t);
    opacity: 0.76;
    padding-bottom: 10px;
 }

 h4{
    font-size: 20px;
    width: 50%;
    text-align: center;
    padding: 8px 0;
 }

 p{
    text-align: center;
    width: 46%;
 }


 @media screen and (max-width: 1024px){
    h1{
      font-size: 30px;
      width: 80%;
      padding-bottom: 5px;
    }

    h4{
        width: 60%;
        font-size: 18px;
    }

    p{
        width: 80%;
    }
 }

 @media screen and (max-width: 768px){
    h1{
      font-size: 20px;
      width: 100%;
      padding-bottom: 5px;
    }

    h4{
        width: 95%;
        font-size: 15px;
    }

    p{
        width: 100%;
        font-size: 13px;
    }
 }
`