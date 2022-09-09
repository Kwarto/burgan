import React from 'react'
import CTA from '../../sections/CTA/CTA'
import Hero from '../../sections/hero/Hero'
import LastCall from '../../sections/lastcall/LastCall'
import Layer from '../../sections/layer/Layer'
import Testimonials from '../../sections/testimonials/Testimonials'

function Home() {
  return (
    <>
     <Hero />
     <CTA />
     <Layer />
     <LastCall />
     <Testimonials />
    </>
  )
}

export default Home