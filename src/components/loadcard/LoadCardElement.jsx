import styled from "styled-components";

export const LoadCardWrapper = styled.div`
 padding: 100px 0;
`

export const LoadCardContainer = styled.div`
    margin-top: 3rem;
    min-height: 600px;
    height: 100%;
    display: grid;
    grid-template-columns: 70% 30%;
    padding: 10px;

    @media screen and (max-width: 768px){
        grid-template-columns: 100%;
        gap: 2rem;
    }
` 

export const LoadCardLeft = styled.div`
 background: var(--text-color);
 min-height: 40vh;
 border-radius: 10px;
 box-shadow: var(--box-shadow);
 padding: 10px;
`
export const HeadingWrapper = styled.div`
 min-height: 15vh;
 background-color: rgba(141, 132, 223, 0.075);
 display: flex;
 align-items: center;
 h1{
    font-size: 40px;
    margin-left: 30px;
    color: var(--text-color-t);
    opacity: 0.80;
 }

 @media screen and (max-width: 768px){
    h1{
        font-size: 30px;
    }
 }
`

export const PaymentMethod = styled.div`
 width: 95%;
 padding: 5px;
 h2{
    font-size: 23px;
    margin-left: 30px;
    padding: 15px 0;
 }
`

export const MethodWrapper = styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;
 margin-top: 10px;

 .ico{
    color: var(--btn-color);
    font-size: 25px;
 }

 @media screen and (max-width: 768px){
  display: flex;
  flex-direction: column;
 }
 
 div{
    border: 1px solid var(--text-color-t);
    min-height: 80px;
    width: 15vw;
    text-align: center;
    padding: 5px;
    box-shadow: 0 1rem .5rem rgba(185, 22, 22, 0.021);
    border-radius: 5px;

    h5{
        font-size: 20px;
        padding-top: 5px;
        font-weight: 500;
    }
    @media screen and (max-width: 1024px){
       width: 400px;
       margin: 20px 5px;
    }
    @media screen and (max-width: 768px){
       width: 85%;
       margin: 20px 0;
    }
 }
`
export const LoadWrap = styled.div`
margin-top: 5px;
 h2{
    margin-left: 30px;
    font-size: 23px;
 }

 form{
   margin-left: 5%;
   width: 90%;
   margin: 0 auto;
   input{
     display: flex;
     flex-direction: column;
     padding: 10px 15px;
     margin-top: 10px;
     outline: none;
     width: 70%;

     @media screen and (max-width: 768px){
        width: 95%;
     }
     @media screen and (max-width: 1024px){
        width: 96%;
     }
   }

   button{
     margin: 10px 20%;
     padding: 10px 20px;
     border: none;
     background: var(--text-color-t);
     box-shadow: var(--box-shadow);
     border-radius: .2rem;
     color: var(--text-color);
     cursor: pointer;
     outline: none;
     font-weight: 600;
     @media screen and (max-width: 768px){
        margin: 10px 0%;
   }
}
}
`
export const LoadCardRight = styled.div`
position: relative;
right: 8px;
border-radius:  50px;

img{
    margin-top: 50px;
}
`