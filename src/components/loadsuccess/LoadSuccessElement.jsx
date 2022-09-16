import styled from "styled-components";

export const LoadSuccessWrapper = styled.div`
 padding: 100px 0;
`

export const LoadSuccessContainer = styled.div`
 margin-top: 3rem;
 min-height: 30vh; 
`

export const SIcon = styled.div`
 margin: 0 auto;
 width: 15%;
 .success{
    font-size: 12rem;
    padding: 20px 10px;
    background-color: rgba(41, 238, 41, 0.74);
    text-align: center;
    border-radius: 100%;
    color: var(--text-color);
 }


 @media screen and (max-width: 1024px){
    width: 30%;
 }

 @media screen and (max-width: 768px){
    width: 54%;
 }
`

export const SuccessText = styled.div`
  padding: 20px 0;
  text-align: center;
  margin-top: 30px;

  a{
    text-decoration: underline;
    padding: 30px 0;
    color: var(--text-color-t);
  }



 @media screen and (max-width: 1024px){
   h1{
    font-size: 30px;
   }
 }
`