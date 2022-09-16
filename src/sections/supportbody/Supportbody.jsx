import React from 'react'
import { SupportbodyWrapper, BodyTitle, Quickcontainer, Quickcards} from './SupportbodyElement'
const supportcard = [
    {
        id: 1,
        heading: 'Account Support',
        body: 'To create your account click on the get started button and fill in with the correct details of yours in the become a member section. After successful registration our customer care will contact you and deliver your card in less than 48hrs',
        links: 'Get-Card'
    },
    {
        id: 2,
        heading: 'Activate Support',
        body: 'Registered members are allow to activate their card right after their delivery arrives. In order to activate your card In the homepage of this site activate card button is provided click on it and input the require details and send request.',
        links: 'Load-Card'
    },
    {
        id: 3,
        heading: 'Loading Support',
        body: 'Loading process here is a bit the same as the activation just that the loading process is done every time you wants a 40% share of your burgan wallet money then you load with 60% to get the additional free amount needed.',
        links: 'Load-Card'
    },
    {
      id: 4,
      heading: 'Transaction Support',
      body: 'For trusted and secure transaction between our clients and the burgan team your 60% sent is store in an encrypted blockchain which the money sent is not for burgan nor for you until burgan release the additional 40%. This is to ensure secure and fast transaction for our clients',
      links: 'Get-Card'
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
                            <a href={`/${links.toLowerCase()}`}>{links}</a>
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