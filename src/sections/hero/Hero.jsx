import React from 'react'
import { HeroContainer, HeroWrapper, HeroText, HeroImg} from './HeroElement'
import HeaderImg from '../../images/hero.png'
function Hero() {
  return (
    <>
     <HeroContainer>
     <HeroWrapper className='container col-md-2'>
        <HeroText>
            <h1>PAY & GET PAID WORLDWIDE</h1>
            <p>
                Burgan Virtual Card (BVC) is a pseudonymous online virtual cards use by 
                freelancers, sellers, SMB/SMEs and digital level entrepreneurs as a reliable 
                source of payments and online asset
            </p>

            <a href="/load-card">Activate Card</a>
        </HeroText>
        <HeroImg>
            <img src={HeaderImg} alt="" />
        </HeroImg>
    </HeroWrapper>
     </HeroContainer>
    </>
  )
}

export default Hero