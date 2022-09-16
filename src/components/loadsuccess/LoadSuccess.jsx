import React from 'react'
import {LoadSuccessWrapper, LoadSuccessContainer,SIcon,SuccessText} from './LoadSuccessElement'
import {FaCheck} from 'react-icons/fa'
function BuxPaySuccess() {
  return (
    <>
     <LoadSuccessWrapper>
       <LoadSuccessContainer className='container'>
          <SIcon><FaCheck className='success'/></SIcon>
          <SuccessText>
            <h1>Card Load Successfully</h1>
            <a href="/">Go Back</a>
          </SuccessText>
       </LoadSuccessContainer>
     </LoadSuccessWrapper>
    </>
  )
}

export default BuxPaySuccess