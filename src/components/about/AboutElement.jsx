import styled from "styled-components";
import aboutBg from '../../images/about.jpg'
export const AboutWrapper = styled.div`
 padding: 100px 0;
 background: linear-gradient(rgba(0, 0, 0, 0.466), rgba(0, 0, 0, 0.459)),url(${aboutBg});
 min-height: 100vh;
 background-position: center;
 background: cover;

 @media screen and (max-width: 1024px){
    min-height: 70vh;
 }
 min-height: 8   0vh;
 @media screen and (max-width: 768px){
    min-height: 8   0vh;
 }
`


export const AboutContent = styled.div`
 position: absolute;
 top: 18rem;
 h1{
    text-align: center;
    color: var(--text-color);
    font-size: 50px;
 }

 @media screen and (max-width: 768px){
    top: 13rem;

    h1{
        font-size: 25px;
    }
 }
`

export const AboutUsAndU = styled.div`
 padding: 100px 0;
`

export const AboutImg = styled.div`
 position: relative;
 img{
    border-radius: .5rem;
 }
`
export const AboutText = styled.div`
 margin-top: 5rem;
 article{
    h1{
    text-align: center;
    font-size: 40px;
    color: var(--text-color-t);
    }
    p{
        text-align: center;
        font-size: 25px;
    }
 }

 p{
    text-align: start;
    margin-top: 20px 0;
    text-align: center;
 }
 
 @media screen and (max-width: 1024px){
    margin-top: 2px;

    article{
        h1{
            font-size: 35px;
        }
        p{
            margin: 0 0;
        }
    }
 }

 @media screen and (max-width: 768px){
    margin-top: 8rem;
}

`

export const TransactStatus = styled.div`
 background-color: rgb(243, 240, 240);
 min-height: 38%;
 width: 36%;
 border-radius: 0 40px 30px 30px;
 position: absolute;
 right: -50px;
 bottom: -6rem;
 box-sizing: var(--box-shadow);
 text-align: center;
 margin: 0 auto;

 h2{
    margin-top: 12px;
    color: var(--text-color-t);
    font-weight: 500;
 }

 h6{
    font-size: 16px;
    font-weight: 200;
 }

 p{
    padding: 10px 0;
 }

 small{
     background: var(--text-color);
     padding: 8px 50px;
     border-radius: 50px;
     border: 1px solid var(--text-color-t);
 }

 @media screen and (max-width: 1024px){
    width: 65%;
    min-height: 16vh;
    right: -20px;
 }
 @media screen and (max-width: 768px){
    right: 0;
    min-height: 20vh;
    width: 70%;
}
`

export const TopChat = styled.div`
 background: rgb(243, 240, 240);
 width: 30%;
 min-height: 6vh;
 text-align: center;
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 9px;
 font-size: 20px;
 border-radius: 25px 20px 20px 0px;
 box-shadow: var(--box-shadow);
 position: absolute;
 top: 20px;
 left: 20px;

 p{
    font-size: 16px;
 }

 @media screen and (max-width: 1024px){
    width: 45%;
    min-height: 5vh;
 }
`

export const RecordList = styled.div`
 padding: 100px 0;
 background: rgba(174, 168, 226, 0.021);

 h1{
    text-align: center;
    font-size: 45px;
    color: var(--text-color-t);
 }

 @media screen and (max-width: 1024px){
    h1{
       font-size: 30px;
    }
 }
`

export const ListWrapper = styled.div`
 padding: 50px 10px;
 min-height: 350px;
`

export const List = styled.div`
 background: rgb(255, 255, 255);
 min-height: 35vh;
 padding: 20px;
 text-align: center;
 box-shadow: var(--box-shadow);
 border-radius: 5px;
 .icons{
    font-size: 80px;
    background: var(--btn-color);
    color: var(--text-color);
    padding: 10px;
    border-radius: 50px;
 }

 h2{
    text-transform: uppercase;
    margin-top: 10px;
    font-size: 20px;
    color: var(--text-color-t);
 }

 p{
    margin-top: 10px;
 }

 &:hover{
    transform: translateY(-5px);
 }

 @media screen and (max-width: 1024px){
    min-height: 20vh;
 }
 @media screen and (max-width: 768px){
    min-height: 25vh;
 }
`