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
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit nam quam veritatis blanditiis quisquam porro mollitia laudantium quasi vel at.
                    </p>
                </div>
            </article>
            <article>
                <h1>ACTIVATE WITH 40% & SPEND 100%</h1>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque tenetur ducimus blanditiis. Quia culpa quos similique accusamus illum? Nemo, inventore.
                  </p>
                </div>
            </article>
            <article>
                <h1>PAY LINKS</h1>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur fuga eius, ad omnis hic voluptates voluptatem quasi quibusdam facilis aspernatur?
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