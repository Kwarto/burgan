import styled from "styled-components";

export const LayerWrapper = styled.div`
    padding: 100px 0;
`

export const LayerContainer = styled.div``

export const LayerImg= styled.div`

 @media screen and  (max-width: 1024px){
    transform: translateY(8rem);
 }

 @media screen and  (max-width: 768px){
    transform: translateY(0);
 }
`

export const LayerText = styled.div`
 display: flex;
 flex-direction: column;
 gap: 1rem;

 article {
    padding: 20px 20px;
    
    h1{
        text-align: center;
        padding: 15px 0;
        position: relative;
        &:after{
            position: absolute;
            left: 10px;
            top: 5px;
            content: '';
            width: 5%;
            height: 30px;
            background: red;
            border-radius: 30px 0 30px 0;
            box-shadow: var(--box-shadow);
        }
    }
 }
 div{
    box-shadow: var(--box-shadow);
    padding: 20px;

    p{
        text-align: center;
    }
 }

 @media screen and  (max-width: 1024px){
    article {
        h1{
            font-size: 16px;

            &:after{
                left: -8px; 
            }
        }

        div{
            padding: 16px;
            p{
              font-size: 14px;
            }
        }
    }
 }
`