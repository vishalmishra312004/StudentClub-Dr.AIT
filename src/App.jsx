import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/Programs'
import  Title from './components/Title/Title'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'



function App() {


  return (
    <div>
    <Nav></Nav>
     <Hero></Hero>
     <div className='container'>
           <Title subtitle = 'Dr. AIT' title ='Students Club'></Title>
          <Programs></Programs>
          
        
         <About></About>
         <Title subtitle = 'Gallery' title ='Clubs Event'></Title>
         <Gallery></Gallery>
         <Title subtitle = 'TESTIMONIALS' title ='What Students Says'></Title>
         <Testimonials></Testimonials>
         <Title subtitle = 'Contact Us' title ='Get in Touch'></Title>
         <Contact></Contact>
         <Footer></Footer>
     </div>
 
    </div>
  )
}

export default App
