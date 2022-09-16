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
            <p>Note: To pay dial <strong>*713#</strong> select option 3 and use the reference code <strong>6695</strong></p>
            <a href="/">Go Back</a>
          </SuccessText>
       </LoadSuccessContainer>
     </LoadSuccessWrapper>
    </>
  )
}

export default BuxPaySuccess