import styled from "styled-components";

export const FooterWrapper = styled.div`
 padding: 40px 0;
 background: rgba(174, 168, 226, 0.021);
`

export const FooterContent = styled.div`
 min-height: 300px;
 height: 100%;
`

export const FooterLogo = styled.div`
 margin: 0 auto ;
 text-align: center;
 color: var(--text-color-t);
 opacity: 0.65;
`
export const FooterText = styled.article`
 width: 80%;
 margin: 15px auto;

 p{
    text-align: center;
    width: 80%;
    margin: 0 auto;
 }

 @media screen and (max-width: 1024px){
    width: 90%;
    p{
        width: 90%;
    }
 }

 @media screen and (max-width: 768px){
    padding: 10px 021;
    width: 100%;
    p{
        width: 100%;
    }
 }
`

export const Copyright = styled.div`
padding: 20px 0;
 background: var(--text-color);
 text-align: center;

 p{
     font-size: 18px;
    a{
        color: var(--btn-color);
    }
 }
`