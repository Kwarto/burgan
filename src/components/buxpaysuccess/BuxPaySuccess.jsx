import React from 'react'
import {BuxPaySuccessWrapper, BuxPaySuccessContainer,SIcon,SuccessText} from './BuxPaySuccessElement'
import {FaCheck} from 'react-icons/fa'
function BuxPaySuccess() {
  return (
    <>
     <BuxPaySuccessWrapper>
       <BuxPaySuccessContainer className='container'>
          <SIcon><FaCheck className='success'/></SIcon>
          <SuccessText>
            <h1>Card Purchased Successfully</h1>
            <a href="/">Go Back</a>
          </SuccessText>
       </BuxPaySuccessContainer>
     </BuxPaySuccessWrapper>
    </>
  )
}

export default BuxPaySuccess