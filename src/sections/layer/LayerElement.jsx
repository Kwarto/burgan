import styled from "styled-components";

export const LayerWrapper = styled.div`
    padding: 100px 0;
`

export const LayerContainer = styled.div``

export const LayerImg= styled.div``

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
`