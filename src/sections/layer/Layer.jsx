import React from 'react'
import { LayerWrapper, LayerContainer, LayerImg, LayerText} from './LayerElement'
import IMG1 from '../../images/mockup.gif'
function Layer() {
  return (
    <> 
     <LayerWrapper>
        <LayerContainer className='container col-md-2'>
          <LayerImg>
            <img src={IMG1} alt="mockup" />
          </LayerImg>
          <LayerText>
            <article>
                <h1>GET UNLIMITED VIRTUAL ASSET</h1>
                <div>
                    <p>
                    Become a member of Burgan card, the official digital currency and get unlimited virtual asset.
                    </p>
                </div>
            </article>
            <article>
                <h1>ACTIVATE WITH 60% & SPEND 100%</h1>
                <div>
                  <p>
                  Use your Burgan card to enjoy 40% off your purchase. You can load up your account with cash, or even pay your bill at several locations across the world.
                  </p>
                </div>
            </article>
            <article>
                <h1>PAY LINKS</h1>
                <div>
                    <p>
                    With a Burgan card, you can use specific pay links to ensure easy and fast virtual card load.
                    </p>
                </div>
            </article>
          </LayerText>
        </LayerContainer>
     </LayerWrapper>
    </>
  )
}

export default Layer