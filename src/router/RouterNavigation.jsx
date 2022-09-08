import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from '../components/navbar/NavBar'
import Home from '../components/home/Home'
import Cards from '../components/cards/Cards'
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
         <Route path='get-card' element={<Cards />}/>
         <Route path='about' element={<About />}/>
         <Route path='support' element={<Support />}/>
         </Routes>
         <Footer />
       </Router>
     </>
  )
}

export default RouterNavigation