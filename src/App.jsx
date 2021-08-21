import React from 'react'
import Footer from './page/Footer'
import Gallery from './page/Gallery'
import Home from './page/Home'
import Navbar from './page/Navbar'
import Order from './page/Order'
import Popular from './page/Popular'
import Rieview from './page/Rieview'
import Speciality from './page/Speciality '
import speciality from './page/Speciality '
import Step from './page/Step'
import "./styles/main.css"
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
            <Navbar/>
            <Home/>
            <Speciality/>
            <Popular/>
            <Step/>
            <Gallery/>
            <Rieview/>
            <Order/>
            <Footer/>
    </>
  )
}

export default App
