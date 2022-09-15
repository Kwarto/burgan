import styled from "styled-components";
export const CardsWrapper = styled.div`
 margin-top: 5rem;
 background: rgba(174, 168, 226, 0.021);

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

 @media screen and (max-width: 768px){

    h1{
        font-size: 28px;
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

export const CardList = styled.div`
  padding: 50px 0;
  min-height: 100vh;
  background: var(--text-color);
`

export const ListContainer = styled.div`
`


export const ListHeading = styled.div`
 position: absolute;
 right: 0;
 display: flex;
 flex-direction: column;

  h1{
    font-size: 45px;
    width: 95%;
    text-align: center;
    color: var(--text-color-t);
    padding-top: 15px;
 }

 p{
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
  margin-right: 50px;
  color: var(--btn-color);
 }

 @media screen and (max-width: 1024px){
    h1{
        font-size: 25px;
    }
 }

 @media screen and (max-width: 768px){
    h1{
        font-size: 23px;
    }
}
`

export const ListWrapper = styled.div`
 position: relative;
 top: 10rem;
 gap: 3rem;
`

export const CardDesignWrapper = styled.div`
  margin-top: 10rem;
  @media screen and (max-width: 1024px){
    margin-top: 14rem;
  }
  @media screen and (max-width: 768px){
    margin-top: 3rem;
  }
`

export const CardDesign = styled.div`
 border-radius: 30px;
 img{
    border-radius: 30px;
 }

 @media screen and (max-width: 768px){
   top: 4rem;
   transform: scale(1.02);
   @keyframes animate {
    0%{
      transform: translateX(0);
      opacity: 0.86;
    } 
     100%{
      transform: translateX(2px);
      opacity: 1;
    }
  }

  img{
    width: 100%;
  }
}
`

export const SecCard = styled.div`
 border-radius: 30px;
 position: absolute;
 transform: scale(1.04);
 top: 18rem;
 animation:  2s linear infinite;
  @keyframes animate {
    0%{
      transform: translateX(0);
      opacity: 0.97;
    } 
     100%{
      transform: translateX(15px);
      opacity: 1;
    }
 } 
 img{
    border-radius: 30px;
 }

@media screen and (max-width: 1024px){
   top: 20rem;

   @keyframes animate {
    0%{
      transform: translateX(0);
      opacity: 0.86;
    } 
     100%{
      transform: translateX(2px);
      opacity: 1;
    }
   }

   img{
    width: 68%;
   }
}

@media screen and (max-width: 768px){
   top: 10rem;

   @keyframes animate {
    0%{
      transform: translateX(0);
      opacity: 0.86;
    } 
     100%{
      transform: translateX(2px);
      opacity: 1;
    }
   }

   img{
    width: 98%;
   }
}
`


export const CardSideText = styled.div`
 margin-top: 60px;
`

export const SideItems = styled.div`
 min-height: 30vh;
 background: var(--text-color);
 box-shadow: var(--box-shadow);
 border-radius: 0 8px 8px 0;
 position: relative;
 border-left: .2rem solid var(--btn-color);
 margin: 20px 0;

 &::before{
    content: '';
    position: absolute;
    top: -1.5rem; left: -18px;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    background: var(--btn-color);
 }

 div{
    margin: 0 auto;
    text-align: center;
    width: 40%;
    padding: 10px 0;

    .c-ico{
        font-size: 55px;
        background: var(--btn-color);
        color: var(--text-color);
        padding: 10px;
        border-radius: 50px;
    }
 }

 h1{
    text-align: center;
    font-size: 16px;
 }

 p{
    text-align: center;
    padding-bottom: 5px;
 }
 @media screen and (max-width: 1024px){
   min-height: 20vh;
 }
 @media screen and (max-width: 1024px){
   min-height: 20vh;
 }
`

export const UseDirect = styled.div`
 margin: 10rem 40px;
 position: relative;
 h3{
    font-size: 30px;
    color: var(--text-color-t);
    &:after{
        position: absolute;
        content: '';
        width: 46%;
        height: 5px;
        background: var(--btn-color);
        border-radius: 10px;
        top: 20px;
        right: 2rem;


        @media screen and (max-width: 1024px){
            width: 47%;
            right: 5px;
        }

        @media screen and (max-width: 768px){
            width: 47%;
            right: 0;
            top: 10px;
        }
    }
 }

 @media screen and (max-width: 1024px){
     margin-top: 5px;
  }

  @media screen and (max-width: 768px){
     margin-top: 10rem;

     h3{
        font-size: 20px;
     }
  }
`

export const UsageAndTerms = styled.div`
 padding: 30px 0;

 h1{
   font-size: 50px;
   width: 60%;
   text-align: center;
   color: var(--text-color-t);
   transform: translateX(-40px);
   margin-bottom: 30px;
 }

 @media screen and (max-width: 1024px){
   h1{
     font-size: 35px;
     transform: translateX(15px);
   }
 }

 @media screen and (max-width: 768px){
   h1{
     font-size: 23px;
     transform: translateX(10px);
   }
 }
`

export const UsageCards = styled.div`
 min-height: 50vh;
 height: 100%;
 padding: 10px;

 @media screen and (max-width: 1024px){
   min-height: 30vh;
 }

 @media screen and (max-width: 768px){
   padding: 2px;
 }
`

export const UsageList = styled.div`
   min-height: 200px;
   background: rgba(174, 168, 226, 0.021);
   box-shadow: var(--box-shadow);
   border-radius: .3rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 10px;
   text-align: center;
   position: relative;
   &:after{
      position: absolute;
      content: 'بنك برقان';
      width: 25%;
      height: 30%;
      bottom: -35px;
      border-radius: 100%;
      background: var(--btn-color);
      box-shadow: var(--box-shadow);
      color: var(--text-color);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      opacity: 0.86;
      border: 5px solid var(--text-color);
      animation:  6s linear infinite;

      @keyframes Spinner {
         0%{
           transform: rotate(0);
         }
         100%{
            transform: rotate(360deg);
         }
      }
      &:hover{
         border: 5px solid rgba(174, 168, 226, 0.021);
      }

      @media screen and (max-width: 768px){
         height: 28%;
      }
   }

   &:hover{
      background: var(--text-color);
      transform: translateY(-8px);
   }

   h2{
      padding: 20px 0;
      text-transform: uppercase;
      font-size: 28px;
      color: var(--text-color-t);

      @media screen and (max-width: 768px){
         font-size: 20px;
      }
   }

   p{
      font-size: 16.7px;
      line-height: 1.7;
   }


   @media screen and (max-width: 1024px){
     min-height: 310px;
     width: 400px;

     :nth-child(3){
      margin-left: 50%;
      transform: translateY(10px);
     }

     p{
      padding-top: 15px;
      font-size: 15px;
      line-height: 1.7;
     }

     &:after{
       width: 23%;
     }
   }

   @media screen and (max-width: 768px){
     margin: 30px 0;
     min-height: 300px;
     width: 350px;

     :nth-child(3){
      margin-left: 0;
      transform: translateY(10px);
     }

     p{
      padding-top: 15px;
      font-size: 15px;
      line-height: 1.7;
     }

     &:after{
       width: 23%;
     }
   }
`