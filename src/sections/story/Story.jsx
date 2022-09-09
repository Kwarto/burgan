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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure distinctio ratione id possimus enim milique earum illo, a dolore quibusdam voluptatem sequi exercitationem? Ea quibusdam alias, explicabo error qui sed temporibus delectus obcaecati adipisci, eligendi laborum quia.
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