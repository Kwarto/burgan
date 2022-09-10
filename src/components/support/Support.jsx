import React from 'react'
import {SupportWrapper} from './SupportElement'
import Supportheader from '../../sections/supportheader/Supportheader'
import SupportBody from '../../sections/supportbody/Supportbody'
function Support() {
  return (
    <>
     <SupportWrapper>
      <Supportheader />
      <SupportBody />
     </SupportWrapper>
    </>
  )
}

export default Support