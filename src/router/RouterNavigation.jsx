import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from '../components/navbar/NavBar'
import Home from '../components/home/Home'
import Card from '../components/cards/Cards'
import LoadCard from '../components/loadcard/LoadCard'
import BuxPaySuccess from '../components/buxpaysuccess/BuxPaySuccess'
import About from '../components/about/About'
import Support from '../components/support/Support'
import Footer from '../components/footer/Footer'


function RouterNavigation() {
  return (
     <>
       <Router>
        <NavBar />
         <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='get-card' element={<Card />}/>
          <Route path='load-card' element={<LoadCard/>}/>
          <Route path='buxpaysuccess' element={<BuxPaySuccess />}/>
          <Route path='about' element={<About />}/>
          <Route path='support' element={<Support />}/>
         </Routes>
         <Footer />
       </Router>
     </>
  )
}

export default RouterNavigation