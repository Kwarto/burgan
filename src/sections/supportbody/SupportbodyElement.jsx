import styled from "styled-components";

export const SupportbodyWrapper = styled.div`
  margin-top: 5rem;
  padding: 60px 0;
  min-height: 40vh;
`

export const BodyTitle = styled.h3`
  text-align: center;
  color: var(--text-color-t);
  opacity: 0.65;
  width: max-content;
  margin: 0 auto;
  padding: 3px 0;
  font-size: 40px;

  @media screen and (max-width: 1024px){
    font-size: 30px;
  }
`

export const Quickcontainer = styled.div`
 padding: 10px;
`

export const Quickcards = styled.div`
 border-radius: 5px;
 box-shadow:  var(--box-shadow);
 display: flex;
 flex-direction: column;
 margin: 40px 0;
 padding: 20px;
 text-align: center;

 h5{
  font-size: 20px;
  color: var(--btn-color);
 }

 p{
    padding: 10px 0;
 }

 a{
    color: var(--text-color-t);
    font-weight: 600;
    font-size: 13px;
 }

 @media screen and (max-width: 1024px){
  margin-top: 10px;
 }
`   