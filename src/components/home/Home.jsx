import React from 'react'
import CTA from '../../sections/CTA/CTA'
import Hero from '../../sections/hero/Hero'
import LastCall from '../../sections/lastcall/LastCall'
import Layer from '../../sections/layer/Layer'

function Home() {
  return (
    <>
     <Hero />
     <CTA />
     <Layer />
     <LastCall />
    </>
  )
}

export default Home