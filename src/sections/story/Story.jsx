import React from 'react'
import {StoryWrapper, StoryContainer, StoryText, StoryImg} from './StoryElement'
import SideImg from '../../images/cards.jpg'
function Story() {
  return (
    <StoryWrapper>
        <StoryContainer className='container col-md-2'>
        <StoryText>
            <h1>OUR STORY</h1>
            <p>
                Burgan is a pseudonymous online virtual cards use by 
                freelancers, sellers, SMB/SMEs and digital level entrepreneurs as a reliable 
                source of payments and online asset. This card was created with the aim of reducing
                financial problem.
            </p>
        </StoryText>
        <StoryImg>
            <img src={SideImg} alt="" />
        </StoryImg>
        </StoryContainer>
    </StoryWrapper>
  )
}

export default Story