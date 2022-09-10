import React from 'react'
import { SupportbodyWrapper, BodyTitle, Quickcontainer, Quickcards} from './SupportbodyElement'
const supportcard = [
    {
        id: 1,
        heading: 'Account Support',
        body: 'This is a simple text content from bingui',
        links: 'Get Support'
    },
    {
        id: 2,
        heading: 'Activate Support',
        body: 'This is a simple text content from bingui',
        links: 'Get Support'
    },
    {
        id: 3,
        heading: 'Loading Support',
        body: 'This is a simple text content from bingui',
        links: 'Get Support'
    },
    {
      id: 4,
      heading: 'Transaction Support',
      body: 'This is a simple text content from bingui',
      links: 'Get Support'
    }

]

function Supportbody() {
  return (
    <>
      <SupportbodyWrapper>
          <BodyTitle>Quick Support For</BodyTitle>
          <Quickcontainer className='col-md-2 container'>
            {
                supportcard.map(({heading, body, links}) =>{
                    return(
                      <Quickcards>
                           <h5>{heading}</h5>
                            <p>{body}</p>
                            <a href='/support-query'>{links}</a>
                      </Quickcards>
                    )
                })
            }
          </Quickcontainer>
      </SupportbodyWrapper>
    </>
  )
}

export default Supportbody