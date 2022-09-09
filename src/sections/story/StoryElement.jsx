import styled from "styled-components";

export const StoryWrapper = styled.div`
 padding: 100px 0;
 background: var(--text-color);

 @media screen and (max-width: 1024px){
    padding: 50px 0;
 }
`

export const StoryContainer = styled.div`
  padding: 70px 0;

  @media screen and (max-width: 1024px){
   padding: 50px 0;
  }
`

export const StoryText = styled.div`
 transform: translateY(8rem);

 h1{
    margin-bottom: 15px;
    font-size: 50px;
    color: var(--text-color-t);
 }

 p{
    text-align: start;
    width: 95%;
 }

 @media screen and (max-width: 1024px){
    transform: translateY(0);

    h1{
    font-size: 40px;
   }

    p{
        width: 100%;
    }
 }
`
export const StoryImg = styled.div``