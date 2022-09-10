import styled from "styled-components";

export const SupportWrapper = styled.div`
  min-height: 10vh;
`

export const WrapperItems = styled.div`
  display: flex;
  justify-content: center;
  margin: 6rem 30px;
`

export const Wrap = styled.div`
  gap: 1rem;
  img{
    width: 100%;
  }
`

export const WrapText = styled.div`
   padding-top: 40px;
  p{
    width: 95%;
    text-align: start;
    padding: 15px 0;
  }

  @media screen and (max-width: 1024px){
    padding-top: 5px;
    p{
      width: 100%;
    }
  }

  @media screen and (max-width: 768px){
    p{
      width: 100%;
      padding: 5px 0;
      font-size: 12px;
    }
  }
`

export const WrapTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: var(--text-color-t);

  @media screen and (max-width: 1024px){
    font-size: 30px;
  }
`

export const WrapBtn = styled.div`
  background: var(--btn-color);
  color: var(--text-color);
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  width: 200px;
  text-align: center;
  padding: 10px 15px;
  border-radius: 50px;
`

export const Servicecenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  margin: 0 10px;

  @media screen and (max-width: 10248px){
    display: flex;
  }

  @media screen and (max-width: 768px){
    flex-direction: column; 
    gap: 1rem;
  }
`

export const Socials = styled.div`
  background: var(--text-color);
  border-radius: 0 0 50px 50px;
  box-shadow:  var(--box-shadow);
  font-weight: 700;
  margin: 0 2px;
  padding: 10px 25px;
  width: max-content;
  left: 0;
  cursor: pointer;

  a{
    margin: 10px;
    color: blue;
  }

  @media screen and (max-width: 1024px){
   display: block;
   a{
    margin: 5px;
   }
  }

  @media screen and (max-width: 768px){
   display: none;
  }
`

export const Customer = styled(WrapBtn)`
  border-radius: 0 0 50px 50px;
  width: 450px;
  padding: 10px 25px;
  background: var(--text-color-t);
  cursor: default;

  @media screen and (max-width: 1024px){ 
    width: 350px;
    font-size: 12px;
    margin-left: 15px;
  }
  @media screen and (max-width: 768px){ 
    width: 350px;
    font-size: 12px;
  }
`